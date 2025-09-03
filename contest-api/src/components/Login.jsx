import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {/* Card Div */}
      <div className="bg-white shadow-lg rounded-lg p-6 w-80">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        
        <div className="flex flex-col gap-3">
          <input 
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder='Username'
            className="border border-gray-300 p-2 rounded"
          />

          <input
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password'
            className="border border-gray-300 p-2 rounded"
          />

          <button
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold p-2 rounded"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login
