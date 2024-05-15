import { dehydrate } from "@tanstack/query-core";
import { HydrationBoundary, QueryClient } from "@tanstack/react-query";
import { getPosts } from "@/api/post";
import Posts from "./Posts";

type PostsProps = { params: { pageId: string } };
export default async function PostsPage({ params }: PostsProps) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["getPosts"],
    queryFn: () =>
      getPosts({
        params: {
          page: params.pageId,
        },
      }),
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Posts pageId={params.pageId} />
    </HydrationBoundary>
  );
}
