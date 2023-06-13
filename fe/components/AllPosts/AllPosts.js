import React, { useState, useEffect } from 'react'

import PostPreview from '../PostPreview/PostPreview'
import PageNumber from '../PageNumber/PageNumber'

function AllPosts({ posts, meta }) {

  const [allPosts, setAllPosts] = useState([])
  const [currentPage, setCurrentPage] = useState(0)
  const [numberOfPages, setNumberOfPages] = useState(0)

  useEffect(() => {
    setAllPosts(posts)
  }, [posts])

  useEffect(() => {
    setNumberOfPages(meta.pagination.pageCount)
    setCurrentPage(meta.pagination.page)
  }, [meta])

  function renderAllPosts() {
    return allPosts.map((post) => {
      return (
        <PostPreview key={post.id} post={post} />
      )
    })
  }

  return (
    <section>
      <h2>Latest Posts</h2>
      <div>
        {renderAllPosts()}
      </div>
      <div className="pagination">
        <PageNumber count={numberOfPages} />
      </div>
    </section>
  )
}

export default AllPosts