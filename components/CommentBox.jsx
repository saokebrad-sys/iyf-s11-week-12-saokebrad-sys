import { useState } from 'react'

export default function CommentBox({ onAddComment }) {
  const [text, setText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!text.trim()) return
    onAddComment(text)
    setText('')
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write a comment..."
        className="w-full p-2 border rounded-lg"
        rows="3"
      />
      <button 
        type="submit"
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Post Comment
      </button>
    </form>
  )
}
