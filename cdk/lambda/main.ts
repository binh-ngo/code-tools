// Import the functions to handle each operation
import createPost from './createPost';
import deletePost from './deletePost';
import getPosts from './getPosts';
import updatePost from './updatePost';
import createUser from './createUser';

// Define the shape of the Lambda event
type ApiGatewayEvent = {
  httpMethod: string;
  path: string;
  headers: {
    [name: string]: string;
  };
  queryStringParameters: {
    [name: string]: string;
  };
  body: string;
};

// Define the shape of the Lambda response
type ApiGatewayResponse = {
  statusCode: number;
  headers?: {
    [name: string]: string;
  };
  body?: string;
};

// Define the Lambda function handler
export const handler = async (
  event: ApiGatewayEvent
): Promise<ApiGatewayResponse> => {
  switch (event.httpMethod) {
    case 'POST':
      if (event.path === '/users') {
        // Call the createUser function if the request is to create a user
        return await createUser(event.body);
      } else if (event.path === '/posts') {
        // Call the createPost function if the request is to create a post
        return await createPost(JSON.parse(event.body));
      }
      break;
    case 'GET':
      if (event.path === '/posts') {
        // Call the getPosts function if the request is to get posts
        const author = event.queryStringParameters.author;
        return await getPosts(author);
      }
      break;
    case 'PUT':
      if (event.path.startsWith('/posts/')) {
        // Call the updatePost function if the request is to update a post
        const parts = event.path.split('/');
        const author = parts[2];
        const postId = parts[3];
        return await updatePost(author, postId, JSON.parse(event.body));
      }
      break;
      case 'DELETE':
        if (event.path.startsWith('/posts/')) {
          // Call the deletePost function if the request is to delete a post
          const parts = event.path.split('/');
          const author = parts[2];
          const postId = parts[3];
          const result = await deletePost(author, postId);
          if (!result) {
            return {
              statusCode: 404,
              body: JSON.stringify({ message: 'Post not found' }),
            };
          }
          return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Post deleted successfully' }),
          };
        }
        break;
    }

  // If the request doesn't match any of the supported operations, return an error
  return {
    statusCode: 400,
    body: JSON.stringify({ message: 'Invalid request' }),
  }
}
