import { useState, useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
import CommentBox from '../components/CommentBox'

export default function Profile() {
  const { user, logout } = useAuth()
  const [comments, setComments] = useState(() => {
    const saved = localStorage.getItem('comments')
    return saved? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem('comments', JSON.stringify(comments))
  }, [comments])

  const addComment = (text) => {
    setComments([...comments, { id: Date.now(), text, user: user?.username, date: new Date().toLocaleString() }])
  }

  const deleteComment = (id) => {
    setComments(comments.filter(c => c.id!== id))
  }

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">My Profile</h1>
      <div className="bg-gray-100 p-4 rounded-lg mb-4">
        <p><b>Username:</b> {user?.username || 'Loading...'}</p>
        <p><b>Email:</b> {user?.email || 'Loading...'}</p>
      </div>
      <h2 className="text-xl font-semibold mb-2">Comments</h2>
      <CommentBox onAddComment={addComment} />
      <div className="mt-4 space-y-2">
        {comments.map(c => (
          <div key={c.id} className="bg-blue-50 p-2 rounded flex justify-between">
            <div><p className="text-xs text-gray-500">{c.user} • {c.date}</p><p>{c.text}</p></div>
            <button onClick={() => deleteComment(c.id)} className="text-red-500 text-xs">X</button>
          </div>
        ))}
      </div>
      <button onClick={logout} className="mt-6 bg-red-500 text-white px-4 py-2 rounded">Logout</button>
    </div>
  )
}
