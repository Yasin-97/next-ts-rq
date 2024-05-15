import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import PostComments from "./PostComments";
import { PostComments as PostCommentsAPI } from "@/api/post";

type CommentsProps = { params: { id: string } };

export default async function CommentsPage({ params }: CommentsProps) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["getPostComment"],
    queryFn: () =>
      PostCommentsAPI({
        params: {
          postId: params.id,
        },
      }),
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PostComments postId={params.id} />
    </HydrationBoundary>
  );
}
