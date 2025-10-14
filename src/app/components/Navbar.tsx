import React from 'react'
import Link from 'next/link'
function Navbar() {
  return (
    <div
    className='shadow p-4'
    >
        <Link className='mr-4' href="/">Home</Link>
        <Link className="mr-4" href="/blogs">Blogs</Link>
        <Link href="/create-blog">Create Blogs</Link>


    </div>
  )
}

export default Navbar