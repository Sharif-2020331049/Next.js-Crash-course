import getAllPost from "@/lib/getAllPost";
import Link from "next/link";
import React from "react";

async function allPost() {
  const posts = await getAllPost();
  console.log(posts);

  return (
    <div className="mt-6">
      <h1> All Post </h1>

      <ul className="mt-6 gap-2">
        {posts.map((post) => (
          <li key={post.id}> <Link href={`/posts/${post.id}`}> {post.title} </Link> </li>
        ))}
      </ul>
    </div>
  );
}

export default allPost;
