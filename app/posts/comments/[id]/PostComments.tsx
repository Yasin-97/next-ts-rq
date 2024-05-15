"use client";

import { useGetPostComment } from "@/hooks/postAPI";

type PostCommentsProps = { postId: string };

const PostComments = ({ postId }: PostCommentsProps) => {
  const { data: PostComment, isLoading } = useGetPostComment({ postId });

  if (isLoading) return <h1>client Loading ...</h1>;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        gap: 15,
      }}
    >
      <h1>Comments</h1>
      <div
        style={{
          width: "100%",
          display: "flex",
          gap: 15,
          flexWrap: "wrap",
        }}
      >
        {PostComment?.map((comment) => (
          <div
            key={comment.id}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 15,
              border: "1px #ccc solid",
              padding: 15,
              width: 300,
            }}
          >
            <p>email: {comment.email}</p>
            <p>name: {comment.name}</p>
            <p>body: {comment.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostComments;
