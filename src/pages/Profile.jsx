import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import CommentBox from '../components/CommentBox'

export default function Profile() {
  const { user, logout } = useAuth()
  const [comments, setComments] = useState([])
  
  const addComment = (text) => {
    setComments([...comments, { id: Date.now(), text }])
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
          <div key={c.id} className="bg-blue-50 p-2 rounded">
            {c.text}
          </div>
        ))}
      </div>

      <button 
        onClick={logout}
        className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
      >
        Logout
      </button>
    </div>
  )
}
