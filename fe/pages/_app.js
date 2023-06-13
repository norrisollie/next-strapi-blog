import React from 'react'

import NavBar from '@/components/NavBar/NavBar'

import "../styles/style.scss"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <main className='container'>
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default MyApp