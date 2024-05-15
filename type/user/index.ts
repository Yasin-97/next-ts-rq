export type PostsType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type commentType = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

export type FetchType<T> = {
  params: T;
};

export type FetchPostsParams = { page: string };
export type FetchPostCommentsParams = { postId: string };

export type FetchPostsType = FetchType<FetchPostsParams>;
export type FetchPostsResponseType = PostsType[];

export type FetchPostCommetsType = FetchType<FetchPostCommentsParams>;
export type FetchPostCommentsResponseType = commentType[];
