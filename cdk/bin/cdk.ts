#!/usr/bin/env node
import 'source-map-support/register';
import { App, Environment, Stack, StackProps } from "aws-cdk-lib";
import { CdkStack } from '../lib/frontend-stack';

const app = new App();

class Cheatsheet extends Stack {
  constructor(parent: App, name: string, props: StackProps) {
    super(parent, name, props);
    
    new CdkStack(this, "FrontendStack", {
      env: props.env as Environment,
    })
  }
}
new Cheatsheet(app, "CheatSheet", {
  env: {
    region: "us-east-1",
    account: process.env.CDK_DEFAULT_ACCOUNT,
  }
})