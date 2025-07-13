import Comments from "@/app/components/Comments";
import getAllPost from "@/lib/getAllPost";
import getPost from "@/lib/getPost";
import getPostComments from "@/lib/getPostComments";
import React, { Suspense } from "react";

export async function generateMetadata({ params }) {
  const id = await params;
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

  // This is a way for parallel fetch
  // const [post, comments] = await Promise.all([postPromise, commentsPromise]);
  // console.log(comments);

  // but there is another beautiful way of progressive rerender
  const post = await postPromise;

  return (
    <div className="mt-6">
      <h1> {post.title} </h1>
      <p className="mt-6">{post.body}</p>

      <hr />

      <Suspense fallback="<h1>comments loading...</h1>">
        <Comments promise= {commentsPromise} />
      </Suspense>
    </div>
  );
}
export default PostPage;

export async function generateStaticParams(){
   const posts = await getAllPost()

   // I have to return array of object
  //  [
  //   { 
  //     id: 1
  //   },
  //   {
  //     id: 2
  //   },
  //   {
  //     id: 3
  //   }
  //  ]

  return posts.map( post => ({
    id: post.id.toString()
  }));

}
