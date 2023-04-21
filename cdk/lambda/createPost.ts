import { PostInput, Post } from "./Post";
var slugify = require("slugify");
const AWS = require("aws-sdk");
const docClient = new AWS.DynamoDB.DocumentClient();

type ApiGatewayResponse = {
  title: string;
  titleSlug: string;
  description: string;
  code: string;
  created: string;
  updated: string;
  viewCount: number;
  postId: string;
  author: string;
  statusCode: number;
};

const createPost = async (postInput: PostInput):Promise<ApiGatewayResponse> => {
  console.log(
    `createPost invocation event: ${JSON.stringify(postInput, null, 2)}`
  );

  const titleSlug = slugify(postInput.title.split(" ").slice(0, 4).join(" "), {
    lower: true,
    strict: true,
  });
  const postId = Date.now().toString();

  const post: Post = {
    titleSlug,
    postId,
    title: postInput.title,
    description: postInput.description,
    code: postInput.code,
    author: postInput.author,
    created: new Date().toISOString(),
    updated: new Date().toISOString(),
    viewCount: 0,
    statusCode: 0,
  };

  const params = {
    TableName: process.env.USER_TABLE_NAME,
    Item: {
      PK: `POST#${postInput.author}`,
      SK: postId,
      type: "post",
      ...post,
    },
    ReturnConsumedCapacity: "TOTAL",
  };

  try {
    await docClient.put(params).promise();
    return post;
  } catch (err) {
    console.log(`DynamoDB Error: ${JSON.stringify(err, null, 2)}`);

    return {
      title: "",
      titleSlug: "",
      description: "",
      code: "",
      created: "",
      updated: "",
      viewCount: 0,
      postId: "",
      author: "",
      statusCode:0,
    }
};
}
export default createPost;