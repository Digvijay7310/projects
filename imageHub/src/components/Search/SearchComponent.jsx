import React from 'react'

function SearchComponent({search, setSearch}) {
  return (
    <div className='flex'>
        <input
         type="text"
        className='bg-gray-200 p-2 focus:bg-white border-none outline-none max-w-[100px] md:max-w-lg'
        placeholder='Search images'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        />
        <button type='button'
        className='px-3 py-1 border-none bg-orange-700 text-white'
        >S</button>
    </div>
  )
}

export default SearchComponent