import React, { useEffect, useState } from 'react';
import users from '../data.js';

function SearchApp() {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [recentSearches, setRecentSearches] = useState([]);
  const [showRecentSearches, setShowRecentSearches] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("recentSearches");
    if (stored) setRecentSearches(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem("recentSearches", JSON.stringify(recentSearches));
  }, [recentSearches]);

  const searchFilter = (e) => {
    const value = e.target.value;
    setInput(value);
    setSelectedUser(null);

    if (value.trim() === "") {
      setResults([]);
      return;
    }

    const filtered = users.filter(user =>
      user.fullName.toLowerCase().includes(value.toLowerCase()) ||
      user.username.toLowerCase().includes(value.toLowerCase())
    );
    setResults(filtered);
  };

  const handleSuggestionClick = (user) => {
    setInput(user.fullName);
    setResults([]);
    setSelectedUser(user);
    setRecentSearches(prev => {
      const updated = [user, ...prev.filter(u => u.username !== user.username)];
      return updated.slice(0, 5);
    });
  };

  return (
    <div className='flex flex-col items-center min-h-screen p-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50'>
      <h2 className='text-3xl font-bold mb-6 text-indigo-800 tracking-wide'>User Search</h2>

      <div className="w-full max-w-md mb-4">
        <input
          type="search"
          value={input}
          onChange={searchFilter}
          placeholder='Search by full name or username...'
          className='w-full p-3 rounded-xl border border-indigo-300 focus:outline-none focus:ring-2 focus:ring-purple-300 shadow-sm text-indigo-700 placeholder-indigo-400'
        />
      </div>

      {/* Recent Searches */}
      {recentSearches.length > 0 && (
        <div className="w-full max-w-md mb-4">
          <h3 
            className="text-indigo-700 font-semibold mb-2 cursor-pointer select-none"
            onClick={() => setShowRecentSearches(prev => !prev)}
          >
            Recent Searches
          </h3>
          {showRecentSearches && (
            <ul className="space-y-1">
              {recentSearches.map((user, i) => (
                <li
                  key={i}
                  onClick={() => handleSuggestionClick(user)}
                  className="cursor-pointer p-2 bg-purple-50 hover:bg-purple-100 rounded-xl shadow-sm transition"
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
        <ul className='w-full max-w-md bg-white rounded-2xl shadow-lg overflow-y-auto max-h-64'>
          {results.map((user, id) => (
            <li
              key={id}
              onClick={() => handleSuggestionClick(user)}
              className='cursor-pointer p-3 flex items-center gap-3 hover:bg-purple-50 transition rounded-xl'
            >
              <img src={user.avatar} alt={user.fullName} className='h-10 w-10 rounded-full border border-indigo-200' />
              <div>
                <p className='text-indigo-800 font-medium'>{user.fullName}</p>
                <p className='text-sm text-indigo-500'>@{user.username}</p>
              </div>
            </li>
          ))}
        </ul>
      )}

      {/* Selected User */}
      {selectedUser && (
        <div className='mt-6 w-full max-w-md bg-white shadow-md rounded-2xl p-5 flex gap-5 transition-transform transform hover:scale-105'>
          <img
            src={selectedUser.avatar}
            alt={selectedUser.fullName}
            className='w-20 h-20 rounded-full object-cover border border-purple-200'
          />
          <div>
            <h2 className='text-xl font-bold text-indigo-800'>{selectedUser.fullName}</h2>
            <p className='text-sm text-indigo-500'>@{selectedUser.username}</p>
            <p className='mt-2'><strong>Email:</strong> {selectedUser.email}</p>
            <p><strong>Phone:</strong> {selectedUser.phone}</p>
            <p><strong>Location:</strong> {selectedUser.location}</p>
            <p className='mt-1 italic text-indigo-400'>"{selectedUser.bio}"</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchApp;
