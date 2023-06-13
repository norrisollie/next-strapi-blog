import React from 'react'
import Link from "next/link"

function PageNumber({ count }) {
  const elements = [];

  for (let i = 0; i < count; i++) {
    elements.push(<Link className='pagination__link' href={`/posts/${i + 1}`} key={i} > {i + 1
    }</Link >);
  }

  return <>{elements}</>
}

export default PageNumber