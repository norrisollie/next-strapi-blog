import React from 'react'
import axios from 'axios'

import Hero from '@/components/Hero/Hero'
import LatestPosts from '@/components/LatestPosts/LatestPosts'

function index({ posts }) {
  return (
    <>
      <Hero />
      <LatestPosts posts={posts} />
    </>
  )
}

export default index


// for server side generation
// export async function getServerSideProps() {

//   const postsResponse = await axios.get("http://127.0.0.1:1337/api/posts");

//   return {
//     props: {
//       posts: postsResponse.data.data
//     }
//   }
// }

// for static site generation
// generates once only unless data has changed
export async function getStaticProps() {

  const postsResponse = await axios.get("http://127.0.0.1:1337/api/posts");

  return {
    props: {
      posts: postsResponse.data.data
    }
  }
}