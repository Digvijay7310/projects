import React from 'react'
import { Link } from 'react-router-dom'

function SuggestionVideo() {

  const array = new Array(12).fill(null)

  return (
    <div>
      
        <p className='text-white text-xl mb-3'>You may like this also</p>


     <div className="grid sm:grid-cols-2 md:grid-cols-1">
       {array.map((_,id)=>(
        
<div key={id} className='max-w-[400px] hover:shadow-2xl md:shadow-zinc-700'>
        <Link 
         to={`/videos/video:`} 
         className='flex flex-col m-1 mb-5 p-1 '>
          {/* Thumbnail */}
          <img src="https://tse3.mm.bing.net/th/id/OIP.gsi_RNsiOVZH-aJXQ7uy-AHaEK?pid=Api&P=0&h=180"
           alt="Title"
           className='h-[180px] w-[400px]'
           />

           <div className='flex flex-col'>
            {/* Title */}
           <h5 className='text-white mt-2 p-1 text-sm'>Title of SuggestionVideo in this</h5>


           {/* Video details */}
           <div className='flex flex-row gap-2'>
            <img src="https://up.yimg.com/ib/th/id/OIP.EwG6x9w6RngqsKrPJYxULAHaHa?pid=Api&rs=1&c=1&qlt=95&w=120&h=120"
             alt="user image"
             className='h-7 w-7 rounded-full ring-1 ring-red-500'
              />
              <div>
                <p className='text-white'>Username</p>
              <p className='text-gray-400 text-xs'>Views 5k</p>
              </div>
            <div>
           </div>
              
            </div>
           </div>
           
        </Link>
     </div>
      ))}
     </div>
       
    </div>
  )
}

export default SuggestionVideo

