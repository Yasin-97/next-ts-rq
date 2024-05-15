import {
  FetchPostsType,
  FetchPostsResponseType,
  FetchPostCommetsType,
  FetchPostCommentsResponseType,
} from "@/type/user";
import { axiosInstance } from "@/utils/axiosInstance";

export const getPosts = async ({ params: { page = "1" } }: FetchPostsType) => {
  const pageIndex = Number(page);
  const startIndex = pageIndex === 1 ? 0 : (pageIndex - 1) * 6;
  const endIndex = pageIndex * 6;

  const { data } = await axiosInstance.get(`posts`);

  // just to fake api pagination :))
  const chunkedPosts = data.slice(startIndex, endIndex);
  return chunkedPosts as FetchPostsResponseType;
};

export const PostComments = async ({
  params: { postId = "1" },
}: FetchPostCommetsType) => {
  const { data } = await axiosInstance.get(`comments?postId=${postId}`);
  return data as FetchPostCommentsResponseType;
};
