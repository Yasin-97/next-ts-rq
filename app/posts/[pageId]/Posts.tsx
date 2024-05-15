"use client";
import { useGetPosts } from "@/hooks/postAPI";
import Link from "next/link";

type PostsProps = { pageId: string };

const Posts = ({ pageId }: PostsProps) => {
  const pageIndex = Number(pageId);
  const { data: Posts, isLoading } = useGetPosts({ page: pageId });

  if (isLoading) return <h1>client Loading ...</h1>;

  return (
    <>
      <main style={{ maxWidth: 1200, marginInline: "auto", padding: 20 }}>
        {
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 15,
            }}
          >
            {Posts?.map((post) => (
              <Link
                href={`/posts/comments/${post.id}`}
                key={post.id}
                style={{
                  border: "1px solid #ccc",
                  padding: 15,
                  width: 300,
                  textDecoration: "none",
                }}
              >
                <h3>{post.id}</h3>
                <h3>{post.title}</h3>
                <p>{post.title}</p>
              </Link>
            ))}
          </div>
        }
      </main>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 15,
        }}
      >
        {pageIndex > 1 && (
          <Link
            href={`/posts/${pageIndex - 1}`}
            style={{
              border: "1px solid #ccc",
              padding: 15,
              textDecoration: "none",
            }}
          >
            prev
          </Link>
        )}
        <Link
          prefetch
          href={`/posts/${pageIndex + 1}`}
          style={{
            border: "1px solid #ccc",
            padding: 15,
            textDecoration: "none",
          }}
        >
          next
        </Link>
      </div>
    </>
  );
};

export default Posts;
