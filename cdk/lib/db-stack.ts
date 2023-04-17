import * as cdk from 'aws-cdk-lib';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';
import * as kms from 'aws-cdk-lib/aws-kms';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import { Construct } from 'constructs';

export class DBStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const encryptionKey = new kms.Key(this, 'MyKey');

    const userTable = new dynamodb.Table(this, 'Users', {
      partitionKey: { name: 'username', type: dynamodb.AttributeType.STRING },
      billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,
      encryptionKey,
    });

    const createUser = new lambda.Function(this, 'CreateUserFunction', {
        runtime: lambda.Runtime.NODEJS_16_X,
        handler: 'create-user.handler',
        code: lambda.Code.fromAsset('lambda'),
        environment: {
          USER_TABLE_NAME: userTable.tableName,
        },
      });
      userTable.grantReadWriteData(createUser);

          // Create the API Gateway REST API
    const api = new apigateway.RestApi(this, 'MyApiGateway', {
        restApiName: "MyApi"
    });
    
    // Create the API Gateway resource and method for the create user endpoint
    const users = api.root.addResource('users');
    users.addMethod('POST', new apigateway.LambdaIntegration(createUser));
    users.addMethod('GET', new apigateway.LambdaIntegration(createUser));
    
    new cdk.CfnOutput(this, 'ApiGatewayUrl', {
        value: api.url,
    })
  }
}
