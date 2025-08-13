import React, { useContext } from 'react'
import { userContext } from '../context/userContext'

function Profile() {
    const {user} = useContext(userContext)

    if(!user)  return <div> <h1>Please Login</h1></div>
  return (
    <div>
        <h1>Welcome {user.username}</h1>
        <p>This is your Dashboard.</p>
        <h3>{Date.now().toLocaleString()}</h3>
    </div>
  )
}

export default Profile