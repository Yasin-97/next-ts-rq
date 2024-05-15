import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getPosts, PostComments } from "@/api/post";

export function useGetPosts({ page }: { page: string }) {
  return useQuery({
    queryKey: [`getPosts`],
    queryFn: () =>
      getPosts({
        params: {
          page,
        },
      }),
    placeholderData: keepPreviousData,
  });
}

export function useGetPostComment({ postId }: { postId: string }) {
  return useQuery({
    queryKey: ["getPostComment"],
    queryFn: () => PostComments({ params: { postId } }),
  });
}
