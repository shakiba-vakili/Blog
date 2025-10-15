'use client'

import { useState } from "react"

function CreateArticle() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const handleCreateArticle = async () => {
        try {
            const res = await fetch("http://localhost:3001/articles", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    id: Date.now().toString(),
                    title,
                    description
                }),
            })

            if (!res.ok) throw new Error("Failed to create article")

            setTitle("")
            setDescription("")
            alert("Article created successfully!")
        } catch (error) {
            console.error(error)
            alert("Error creating article")
        }
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-6">
            <div className="w-full max-w-xl bg-gray-800 text-white rounded-xl shadow-2xl p-8 flex flex-col gap-6">
                <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 text-center">
                    Create New Article
                </h2>

                <div className="flex flex-col gap-2">
                    <label className="text-gray-200 font-semibold">Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="bg-gray-700 text-white p-3 rounded focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-gray-200 font-semibold">Description</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="bg-gray-700 text-white p-3 rounded h-32 resize-none focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    />
                </div>

                <button
                    onClick={handleCreateArticle}
                    className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                >
                  
                    Submit
                </button>
            </div>
        </div>
    )
}

export default CreateArticle
