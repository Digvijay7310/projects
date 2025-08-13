import React from 'react'

function Resturant() {

  const array = new Array(12).fill(null)
  return (
    <div className='bg-gradient-to-r from-gray-100 to-gray-300 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4'>
        {array.map((_,idx) => (
          <div key={idx} className='bg-[#f1f1ee] p-2 hover:rounded-lg hover:shadow-lg shadow-zinc-300 duration-300'>
            <img src="www.via.placeholder" alt="My hotels" className='w-full h-60 border border-red-800 object-contain rounded hover:scale-90 hover:overflow-hidden duration-100' />
            <h2 className='font-semibold text-xl mt-2'>La Da Ve Restaurants</h2>
            <p className='text-xs'>Rating 5</p>
            <p className='text-sm font-extralight'>Famous for Chienese</p>
            <p className='text-sm font-extralight'>10:00am to 10:00pm</p>
            <p className='text-sm font-extralight'>L-120 Street trondio, 201232 Kolkata</p>
        </div>
        ))}
    </div>
  )
}

export default Resturant