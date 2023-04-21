const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient();

const createUser = async (event:any) => {
  const tableName = process.env.POSTS_TABLE;

  if (!tableName) {
    throw new Error('User table name is missing.');
  }

  switch (event.httpMethod) {
    case 'GET':
      // Retrieve all users from the DynamoDB table
      const users = await dynamodb.query({ TableName: tableName }).promise();
      return {
        statusCode: 200,
        body: JSON.stringify(users.Items),
      };

    case 'POST':
      // Parse the user data from the request body
      const { userId, name, password } = JSON.parse(event.body);

      // Save the user data to the DynamoDB table
      await dynamodb
        .put({
          TableName: tableName,
          Item: { userId, name, password },
        })
        .promise();
      return {
        statusCode: 201,
        body: JSON.stringify({ message: 'User created successfully.' }),
      };

    default:
      return {
        statusCode: 405,
        body: JSON.stringify({ message: 'Method not allowed.' }),
      };
  }
};

export default createUser;