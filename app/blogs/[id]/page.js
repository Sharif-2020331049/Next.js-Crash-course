import { notFound } from 'next/navigation';
import React from 'react'

async function BlogPage({params}) {
    const { id } = await params;

    if(id === '3'){
        notFound();
    }
  return (
    <div className='mt-6'>The blog id is: {id} </div>
  )
}

export default BlogPage