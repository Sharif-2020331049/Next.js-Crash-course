import React from 'react'

async function Comments({promise}) {
    const comments = await promise;
 
  return (
       <div className="mt-10">
        <h1> Comments </h1>
        <hr/>

        <ul>
          {comments?.map((comment) => (
            <li className="mb-3" key={comment.id}> {comment.body} </li>
          ))}
        </ul>
      </div>
  )
}

export default Comments