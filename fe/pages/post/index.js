import React from 'react'
import axios from 'axios'
import AllPosts from '@/components/AllPosts/AllPosts';

function Posts({ posts, meta }) {

  console.log(meta)
  return (
    <AllPosts posts={posts} meta={meta} />
  )
}

export default Posts

// for static site generation
// generates once only unless data has changed
export async function getStaticProps() {

  const postsResponse = await axios.get("http://127.0.0.1:1337/api/posts?pagination[page]=1&pagination[pageSize]=5");

  return {
    props: {
      posts: postsResponse.data.data,
      meta: postsResponse.data.meta
    }
  }
}