import * as cdk from 'aws-cdk-lib';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import { Construct } from 'constructs';
import { CfnOutput } from 'aws-cdk-lib';
import { IUserPool } from 'aws-cdk-lib/aws-cognito';
import { StackProps } from 'aws-cdk-lib'
import * as iam from 'aws-cdk-lib/aws-iam'
import { Effect, PolicyStatement } from 'aws-cdk-lib/aws-iam';

interface DBStackProps extends StackProps {
  readonly userPool: IUserPool;
}
export class DBStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: DBStackProps) {
    super(scope, id, props);

    const userTable = new dynamodb.Table(this, 'Users', {
      partitionKey: { name: 'PK', type: dynamodb.AttributeType.STRING },
      sortKey: { name: "SK", type: dynamodb.AttributeType.STRING },
      billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    });
    
    // UserTableName's output is presented when deployed "CheatSheetDBStack26A56847.UserTableName "
    new CfnOutput(this, "UserTableName", {
      value: userTable.tableName,
    })

    const lambdaRole = new iam.Role(this, 'LambdaRole', {
      assumedBy: new iam.ServicePrincipal('lambda.amazonaws.com'),
    });
    
    // creates a lambda 
    const postLambda = new lambda.Function(this, 'postLambda', {
      runtime: lambda.Runtime.NODEJS_16_X,
      handler: "lambdaRedirect.handler",
      code: lambda.Code.fromAsset('lambda'),
      environment: {
        USER_TABLE_NAME: userTable.tableName,
      },
      role: lambdaRole,
    });
    userTable.grantFullAccess(lambdaRole);

    // gives the lambda the permission to create Cloudwatch logs
    lambdaRole.addToPolicy(new PolicyStatement({
      effect: Effect.ALLOW,
      resources: ['*'],
      actions: [
        "logs:CreateLogGroup",
        "logs:CreateLogStream",
        "logs:PutLogEvents"
      ],
    }))
          // Create the API Gateway REST API
    const api = new apigateway.RestApi(this, 'MyApiGateway', {
        restApiName: "MyApi",
    });
    
    // Create the API Gateway resource and method for the create user endpoint
    const users = api.root.addResource('users');
    users.addMethod('POST', new apigateway.LambdaIntegration(postLambda));
    users.addMethod('GET', new apigateway.LambdaIntegration(postLambda));

    const posts = api.root.addResource('posts');
    posts.addMethod('POST', new apigateway.LambdaIntegration(postLambda));
    posts.addMethod('GET', new apigateway.LambdaIntegration(postLambda));
    
    // displays API Gateway endpoint url
    new cdk.CfnOutput(this, 'ApiGatewayUrl', {
        value: api.url,
    })
  }
}
