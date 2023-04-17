import * as cdk from 'aws-cdk-lib';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';
import * as kms from 'aws-cdk-lib/aws-kms';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';
const apigw = require('@aws-cdk/aws-apigatewayv2');
const integrations = require('@aws-cdk/aws-apigatewayv2-integrations');

export class DBStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const encryptionKey = new kms.Key(this, 'MyKey');

    const userTable = new dynamodb.Table(this, 'Users', {
      partitionKey: { name: 'username', type: dynamodb.AttributeType.STRING },
      billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,
      encryptionKey,
    });

    const createUserFunction = new lambda.Function(this, 'CreateUserFunction', {
        runtime: lambda.Runtime.NODEJS_16_X,
        handler: 'index.handler',
        code: lambda.Code.fromAsset('path/to/your/lambda/code'),
        environment: {
          USER_TABLE_NAME: userTable.tableName,
        },
      });
      userTable.grantReadWriteData(createUserFunction);

    // create the HTTP API
    const api = new apigw.HttpApi(this, 'my-http-api', {
        defaultIntegration: new integrations.LambdaProxyIntegration({
        handler: createUserFunction,
        }),
    });
    
    // create a route that maps to the Lambda function
    api.addRoutes({
        path: '/users',
        methods: [apigw.HttpMethod.POST],
    });
  }
}
