import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import HomeCard from "../../components/HomeCard";
import "./style.css"
import { atomOneDark, CopyBlock } from "react-code-blocks";
import { Editor } from "../../components/Lexical/Editor";

function CDK() {
    const reactContent = [
    {
        title: "Installation",
        description: "You will need Node, Typescript, AWS CLI, CDK CLI (npm i -g cdk), and a configured AWS Account (aws configure)",
        code: `// To create a react app use this command:
npx create-react-app <name-of-project> 
--template typescript
// Then enter the directory by typing:
cd <name-of-project>
// Type this command to create a build folder:
npm run build || yarn build
// Create a folder called cdk, then initialize it within 
//that folder while outputting a typescript template:
mkdir cdk && cd cdk && cdk init app --language typescript` ,
    },
    {
      title: "CDK Structure",
      description: "In the CDK, there is a single-to-many relationship from App -> Stack -> Construct. Each stack has three props, (scope, id, props). Constructs also have three props, (the stack it belongs to, its name, options.)",
code: `export class CdkStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

// S3
const bucket = new Bucket(this, "CreateReactAppBucket", {
    publicReadAccess: true,
    removalPolicy: RemovalPolicy.DESTROY,
    websiteIndexDocument: "index.html"
  });`
    },
    {
      title: "DynamoDB",
      description: "Basic code for a minimal deployable DynamoDB table.",
code: `import * as dynamodb from '@aws-cdk/dynamodb';
  const table = new dynamodb.Table(this, 'Table', {
    partitionKey: 
    { 
      name: 'id', 
      type: dynamodb.AttributeType.STRING 
    },
});`
    },
    {
      title: "Lambda",
      description: "Basic code for a minimal Lambda function.",
code: `import * as lambda from '@aws-cdk/lambda';
  const fn = new lambda.Function(this, 'MyFunction', {
    runtime: lambda.Runtime.NODEJS_16_X,
    handler: 'index.handler',
    code: lambda.Code.fromAsset(path.join(__dirname, 'lambda-handler')),
});`
    },
    {
      title: "SPA Deployment",
      description: "With this construct, you can deploy a single page application to CloudFront quick and easy. Make sure you download the required dependencies.",
      code: 
      `import * as cdk from '@aws-cdk/core';
import { SPADeploy } from 'cdk-spa-deploy';
      
export class CdkStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new SPADeploy(this, 'spaDeploy')
      .createBasicSite({
        indexDoc: 'index.html',
        websiteFolder: '../blog/dist/blog'
      });

    new SPADeploy(this, 'cfDeploy')
      .createSiteWithCloudfront({
        indexDoc: 'index.html',
        websiteFolder: '../blog/dist/blog'
      });
  }
}`
    }
]
  return (
    <Container>
      <h1 className="cheatsheetTitle">CDK</h1>
      <Row className="Home flex">
        {reactContent.map((props) => (
          <Col sm="3" className="homeCard flex">
            <HomeCard 
              title={props.title} 
              description={props.description} 
              />
        <CopyBlock 
        text={props.code}
        language='javascript'
        showLineNumbers={false}
        theme={atomOneDark}/>
          </Col>
        ))}
      </Row>
      <Editor />
    </Container>
  )
}

export default CDK;