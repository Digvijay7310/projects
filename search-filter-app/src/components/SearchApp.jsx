import React, { useEffect, useState } from 'react'
import users from '../data.js'

function SearchApp() {
    const [input, setInput] = useState("")
    const [results, setResults] = useState([])
    const [selectedUser, setSelectedUser] = useState(null)
    const [recentSearches, setRecentSearches] = useState([])
    const [showRecentSearches, setShowRecentSearches] = useState(false)


    useEffect(() => {
        const stored = localStorage.getItem("recentSearches")
        if(stored){
            setRecentSearches(JSON.parse(stored))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("recentSearches", JSON.stringify(recentSearches))
    }, [recentSearches])

    const searchFilter = (e) => {
        const value = e.target.value
        setInput(value)
        setSelectedUser(null) 

        if (value.trim() === "") {
            setResults([])
            return
        }

        const filtered = users.filter(user =>
            user.fullName.toLowerCase().includes(value.toLowerCase()) ||
            user.username.toLowerCase().includes(value.toLowerCase())
        )
        setResults(filtered)
    }

    const handleSuggestionClick = (user) => {
        setInput(user.fullName)
        setResults([])
        setSelectedUser(user) 
        setRecentSearches((prev) => {
            const updated = [user, ...prev.filter(u => u.username !== user.username)]
            return updated.slice(0, 5)
        })
    }

    return (
        <div className='flex flex-col justify-center items-center bg-[#d7d7d7] min-h-screen p-4'>
            <h2 className='text-lg font-semibold'>Search Users: </h2>
            <div className="p-2 rounded-lg w-full max-w-md">
                <input
                    type="search"
                    value={input}
                    onChange={searchFilter}
                    name="username"
                    id="username"
                    aria-label='search for username and fullName'
                    placeholder='Enter username or full name'
                    className='border px-2 py-1 rounded w-full'
                />
            </div>

            {recentSearches.length > 0 && (
  <div className="mt-4 w-full max-w-md">
    <h3 className="text-sm font-semibold mb-2 text-gray-700" onClick={() => setShowRecentSearches(prev => !prev)}>Recent Searches</h3>
    {showRecentSearches && (
        <ul className="space-y-1" role='listbox' aria-label='search suggestion'>
      {recentSearches.map((user, index) => (
        <li
          key={index}
          onClick={() => handleSuggestionClick(user)}
          className="cursor-pointer p-2 bg-gray-100 hover:bg-gray-200 rounded"
        >
          {user.fullName} (@{user.username})
        </li>
      ))}
    </ul>
    )}
  </div>
          )}


            {/* Suggestions */}
            {results.length > 0 && (
                <ul className='mt-2 bg-blue-300 shadow-lg p-2 rounded w-full max-w-md max-h-[200px] overflow-y-auto z-50'>
                    {results.map((user, id) => (
                        <li
                            key={id}
                            onClick={() => handleSuggestionClick(user)}
                            className='cursor-pointer bg-blue-100 p-2 mt-1 rounded-2xl text-sm hover:bg-blue-200'
                        >
                          <div className="flex items-center gap-2">
                            <img src={user.avatar} alt={user.fullName} className='h-8 w-8 rounded-full' />  {user.fullName} ({user.username})
                          </div>
                        </li>
                    ))}
                </ul>
            )}

            
            {/* User Details */}
{selectedUser && (
  <div className='mt-4 bg-white border shadow-md p-4 rounded-lg w-full max-w-md flex gap-4'>
    <img
      src={selectedUser.avatar}
      alt={selectedUser.fullName}
      className='w-20 h-20 rounded-full object-cover border'
    />
    <div>
      <h2 className='text-xl font-semibold'>{selectedUser.fullName}</h2>
      <p className='text-sm text-gray-500'>@{selectedUser.username}</p>
      <p className='mt-2'><strong>Email:</strong> {selectedUser.email}</p>
      <p><strong>Phone:</strong> {selectedUser.phone}</p>
      <p><strong>Location:</strong> {selectedUser.location}</p>
      <p className='mt-1 italic text-gray-600'>" {selectedUser.bio} "</p>
    </div>
  </div>
)}

        </div>
    )
}

export default SearchApp
