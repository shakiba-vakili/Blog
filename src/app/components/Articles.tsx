import React from 'react'
import { IGetArticles } from "../blogs/page"

function Articles({ title, description, id }: IGetArticles) {
  return (
    <div className="shadow p-4 rounded-lg bg-white text-black 
                transform transition duration-300 
                hover:bg-gray-100 hover:scale-105">
  <h2 className="text-xl font-semibold mb-2">{title}</h2>
  <p>{description}</p>
</div>

  )
}

export default Articles
