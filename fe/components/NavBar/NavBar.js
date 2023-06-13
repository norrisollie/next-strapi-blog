import React from 'react'
import Link from "next/link"

function NavBar() {
  return (
    <nav className='navBar'>
      <div className='container'>
        <Link href="/" className="title">
          Blog Name
        </Link>
        <ul>
          <li>
            <Link href="/posts/1">
              All Posts
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar