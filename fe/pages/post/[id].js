import React from 'react'
import axios from 'axios'
import MarkdownIt from 'markdown-it'

function PostPage({ post }) {

  const md = new MarkdownIt()
  const htmlContent = md.render(post.attributes.content)

  return (
    <div>
      <div>{post.attributes.title}</div>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
    </div>
  )
}

export default PostPage

export async function getStaticProps({ params }) {
  const postResponse = await axios.get(`http://127.0.0.1:1337/api/posts/${params.id}`)

  return {
    props: {
      post: postResponse.data.data
    }
  }
}

export async function getStaticPaths() {
  const postsResponse = await axios.get("http://127.0.0.1:1337/api/posts")

  const paths = postsResponse.data.data.map((post) => {
    return { params: { id: post.id.toString() } }
  })
  console.log(paths)

  return {
    paths,
    fallback: false
  }
}