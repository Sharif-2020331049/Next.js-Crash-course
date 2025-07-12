import Link from "next/link";
import React from "react";

function BlogsPage() {
  const blogs = [
    {
      id: 1,
      title: "Blog 1",
      description: "This is blog 1. You know about blog 1",
    },
    {
      id: 2,
      title: "Blog 2",
      description: "This is blog 2. You know about blog 2",
    },
  ];

  return (
    <div className="mt-10">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        This is blog page.
        <ul >
          {blogs.map((blog) => (
            <li className="mb-5" key={blog.id}>
              <Link href={`/blogs/${blog.id}`}> {blog.title} </Link>
              
              </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default BlogsPage;
