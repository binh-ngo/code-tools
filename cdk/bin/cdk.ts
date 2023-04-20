#!/usr/bin/env node
import 'source-map-support/register';
import { App, Environment, Stack, StackProps } from "aws-cdk-lib";
import { FrontendStack } from '../lib/frontend-stack';
import { DBStack } from '../lib/db-stack';
import { CognitoStack } from '../lib/cognito-stack';

const app = new App();

class Cheatsheet extends Stack {
  constructor(parent: App, name: string, props: StackProps) {
    super(parent, name, props);
    
    new FrontendStack(this, "FrontendStack", {
      env: props.env as Environment,
    })

    const cognito = new CognitoStack(this, "CognitoStack", {
      env: props.env as Environment,
    })
    new DBStack(this, "DBStack", {
      env: props.env as Environment,
      userPool: cognito.userPool,
    })
  }
}
new Cheatsheet(app, "CheatSheet", {
  env: {
    region: "us-east-1",
    account: process.env.CDK_DEFAULT_ACCOUNT,
  }
})