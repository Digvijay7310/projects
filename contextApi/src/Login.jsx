import React, { useContext, useState } from 'react'
import { UserContext } from './context/UserContext'

function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const {user,setUser} = useContext(UserContext)

    const handleOnSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }
  return (
    <div>
        <form onSubmit={handleOnSubmit} className='flex flex-col justify-center items-center gap-3'>
        <input
         type="text"
        placeholder='Enter username'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className='bg-white border border-green-400 rounded'
        />

        <input
         type="password"
        placeholder='Enter Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className='bg-white border border-green-400 rounded'
        />
        <button className='bg-green-600 p-3 rounded'>Submit</button>
    </form>
    {user && (
        <div>
            Welcome,  {user}
        </div>
    )}

    <h2>Enter username and password</h2>
    </div>
  )
}

export default Login