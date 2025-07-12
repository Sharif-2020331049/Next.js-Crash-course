import getPost from "@/lib/getPost";
import getPostComments from "@/lib/getPostComments";
import React from "react";

export async function generateMetadata({ params }) {
  const id = params;
  const post = await getPost(id);

  // have to return a object
  return {
    title: post.title,
    description: post.body,
  };
}

async function PostPage({ params }) {
  const id = await params;

  // this not performing parallerly rather than it performs serially (one after another)
  //   const post = await getPost(id);
  //   const postComments = await getPostComments(id);

  // we can do this parallerly
  const postPromise = getPost(id);
  const commentsPromise = getPostComments(id);

  const [post, comments] = await Promise.all([postPromise, commentsPromise]);
  console.log(comments);

  return (
    <div className="mt-6">
      <h1> {post.title} </h1>
      <p className="mt-6">{post.body}</p>

      <hr />
      <div className="mt-10">
        <h1> Comments </h1>
        <hr/>

        <ul>
          {comments.map((comment) => (
            <li className="mb-3" key={comment.id}> {comment.body} </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PostPage;
