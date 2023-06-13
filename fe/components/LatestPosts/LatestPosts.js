import React, { useState, useEffect } from 'react'

import PostPreview from '../PostPreview/PostPreview'

function LatestPosts({ posts }) {

  const [latestPosts, setLatestPosts] = useState([])

  useEffect(() => {
    setLatestPosts(posts.slice(0, 5))
  }, [posts])

  function renderRecentPosts() {
    return latestPosts.map((post) => {
      return (
        <PostPreview key={post.id} post={post} />
      )
    })
  }

  return (
    <section>
      <h2>Latest Posts</h2>
      <div>
        {renderRecentPosts()}
      </div>
    </section>
  )
}

export default LatestPosts