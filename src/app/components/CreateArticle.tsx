'use client'

import { useState } from "react"

function CreateArticle() {
    const [title,setTitle] = useState("")
    const [description,setDescription] = useState("")
 const handleCreateArticle = async () => {
    try {
      const res = await fetch("http://localhost:3001/articles", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
                    id: Date.now().toString(),
          title,
          description
        }),
      })

      if (!res.ok) {
        throw new Error("Failed to create article")
      }

      // Reset form
      setTitle("")
      setDescription("")
      alert("Article created successfully!")
    } catch (error) {
      console.error(error)
      alert("Error creating article")
    }
  }
  return (
    <div className="bg-slate-200 py-24 flex flex-col px-4 gap-5">
            <label>title</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className='bg-white' />
            <label>description</label>
            <textarea value={description} className='bg-white' onChange={(e) => setDescription(e.target.value)}></textarea>
 <button 
        onClick={handleCreateArticle} 
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
      >
        Submit
      </button>            </div>  )
}

export default CreateArticle