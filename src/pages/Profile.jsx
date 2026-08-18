import { useAuth } from '../context/AuthContext'

export default function Profile() {
  const { user, logout } = useAuth()
  
  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">My Profile</h1>
      <div className="bg-gray-100 p-4 rounded-lg">
        <p><b>Username:</b> {user?.username || 'Loading...'}</p>
        <p><b>Email:</b> {user?.email || 'Loading...'}</p>
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
