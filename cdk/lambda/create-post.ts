import { APIGatewayProxyEvent, APIGatewayProxyHandler, APIGatewayProxyResult } from 'aws-lambda';
import { v4 as uuidv4 } from 'uuid';
const AWS = require('aws-sdk');

// Create a new DynamoDB DocumentClient
const documentClient = new AWS.DynamoDB.DocumentClient();

interface UserPost {
  postId: string;
  userId: string;
  title: string;
  body: string;
  createdAt: string;
}

export const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent, context:any) => {
    let response: APIGatewayProxyResult;
  
    switch (event.httpMethod) {
      case 'GET':
        response = await handleGetPosts(event);
        break;
      case 'POST':
        response = await handleCreatePost(event);
        break;
      default:
        response = {
          statusCode: 405,
          body: JSON.stringify({ message: 'Method not allowed' }),
        };
    }
  
    return response;
  };
  
  async function handleGetPosts(event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> {
    try {
      const allPosts = await getAllPosts();
      return {
        statusCode: 200,
        body: JSON.stringify(allPosts),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ message: 'Error retrieving posts' }),
      };
    }
  }
  
  async function handleCreatePost(event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> {
    try {
      const requestBody = event.body ? JSON.parse(event.body) : null;
      if (!requestBody || !requestBody.title || !requestBody.body) {
        return {
          statusCode: 400,
          body: JSON.stringify({ message: 'Invalid request body' }),
        };
      }
  
      const newPost: UserPost = {
        postId: uuidv4(),
        userId: 'your-user-id', // Replace this with your actual user ID
        title: requestBody.title,
        body: requestBody.body,
        createdAt: new Date().toISOString(),
      };
      await createPost(newPost);
      return {
        statusCode: 201,
        body: JSON.stringify(newPost),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ message: 'Error creating post' }),
      };
    }
  }
  
  
  async function getAllPosts(): Promise<UserPost[]> {
    const result = await documentClient.scan({
      TableName: 'user-posts',
    }).promise();
  
    return result.Items as UserPost[];
  }
  
  async function createPost(post: UserPost): Promise<void> {
    await documentClient.put({
      TableName: 'user-posts',
      Item: post,
    }).promise();
  }
  