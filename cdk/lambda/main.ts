import createPost from "./create-post";
import deletePost from "./delete-post";
import getPosts from "./get-posts";
import { PostInput } from "./Post";
import updatePost from "./update-post";
import createUser from "./create-user.js"

type AppSyncEvent = {
  info: {
    fieldName: string;
  };
  arguments: {
    author: string;
    postId: string;
    post: PostInput;
  };
};

exports.handler = async (event: AppSyncEvent) => {
  switch (event.info.fieldName) {
    case "createUser":
      return await createUser(event.arguments)
    case "getPosts":
      return await getPosts(event.arguments.author);
    case "createPost":
      return await createPost(event.arguments.post);
    case "updatePost":
      return await updatePost(
        event.arguments.author,
        event.arguments.postId,
        event.arguments.post
      );
    case "deletePost":
      return await deletePost(event.arguments.author, event.arguments.postId);
    default:
      throw new Error(`Unknown field name: ${event.info.fieldName}`);
  }
};