import React from 'react'
import axios from 'axios'

import AllPosts from '@/components/AllPosts/AllPosts'

function Page({ posts, meta }) {
  console.log(posts)
  console.log(meta)
  return (
    <AllPosts posts={posts} meta={meta} />
  )
}

const url = "http://127.0.0.1:1337/api/posts"

export async function getStaticProps({ params }) {

  const resultsPerPage = 5
  const pageClicked = params.page - 1


  const reponseForData = await axios.get(`${url}?pagination[start]=${pageClicked * resultsPerPage}&pagination[limit]=5`)
  const responseForMeta = await axios.get(`${url}?pagination[page]=1&pagination[pageSize]=5`)

  return {
    props: {
      posts: reponseForData.data.data,
      meta: responseForMeta.data.meta
    }
  }
}

// create paths
export async function getStaticPaths() {
  const postsResponse = await axios.get(`${url}?pagination[page]=1&pagination[pageSize]=5`);

  let paths = []
  for (let i = 0; i < postsResponse.data.meta.pagination.pageCount; i++) {
    paths.push({ params: { page: ([i + 1]).toString() } })
  }

  return {
    paths,
    fallback: false
  }
}

export default Page