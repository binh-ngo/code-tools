type Post = {
    title: string;
    titleSlug: string;
    description: string;
    created: string;
    updated: string;
    viewCount: number;
    postId: string;
    author: string;
  };
  
  type PostInput = {
    title: string;
    description: string;
    author: string;
  };
  
  type PostUpdateableFields = {
    title?: string;
    titleSlug?: string;
    description?: string;
    updated?: string;
    viewCount?: number;
    published?: boolean;
    publishDate?: string | null;
  };
  
  export type { Post, PostInput, PostUpdateableFields };