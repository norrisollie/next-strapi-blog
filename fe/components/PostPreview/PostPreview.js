import React from 'react'
import Link from "next/link"

function PostPreview({ post: { id, attributes: { title, description } } }) {
  return (
    <Link href={`/posts/${id}`}>
      <article className="post-preview">
        <h3>{title}</h3>
        <p>{description}</p>
      </article>
    </Link>
  )
}

export default PostPreview