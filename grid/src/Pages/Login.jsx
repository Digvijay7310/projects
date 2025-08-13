import React, { useContext } from 'react'
import { userContext } from '../context/userContext'
import { useState } from 'react'

function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [user, setUser] = useContext(userContext)

    const handleSubmit = (e) => {
      e.preventDefault()
      setUser({username, password})
    }
  return (
    <div>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type='submit' onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login