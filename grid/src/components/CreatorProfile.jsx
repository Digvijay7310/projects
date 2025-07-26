import React from 'react'
import { Link } from 'react-router-dom'
import user from '../user';

function CreatorProfile() {

  if(!user) return <div>Loading...</div>

  return (
    <div className='bg-black text-white'>
      {/* Cover Image */}
      <div style={{
        backgroundImage: `url('${user.coverImage || '/avatar2.jpg'}')`,
      }}
      className='mt-[66px] md:mt-[80px] h-[200px] sm:h-[250px] sm:mx-6 rounded-lg bg-center bg-contain relative'></div>

      {/* User details and avatar */}
      <div className="flex gap-5 justify-center items-center p-4 sm:mx-6">
        <img
        className='h-[100px] md:h-[150px] rounded-full ring-1 ring-red-500' 
        src={user.avatar}
         alt="User avatar" />

         <div className="flex flex-col justify-center">
          <h3 className='text-lg'>{user.fullName}</h3>
          <p className="text-sm text-gray-300 hover:text-gray-400 duration-200">@{user.username}</p>
          <a href="#" className='text-sm text-blue-500 hover:text-blue-600 duration-200'>Email {user.email}</a>
         </div>

         <Link to="/users/update-profile" className='bg-red-500 py-0.5 px-2.5 rounded-lg text-white'>Edit</Link>
      </div> 

      {/* About this creator */}
      <div className=' flex justify-center items-center gap-5 mx-2'>

        <div className='bg-gray-800 flex flex-col justify-center items-center rounded-xl p-1'>
          <h3 className='text-white text-sm sm:text-md text-center'>Video Upload</h3>
          <p className='text-gray-300 text-xs sm:text-sm'>120</p>
          </div>

        <div className='bg-gray-800 flex flex-col justify-center items-center rounded-xl p-1'>
          <h3 className='text-white text-sm sm:text-md text-center'>Profile Views</h3>
          <p className='text-gray-300 text-xs sm:text-sm'>1234</p>
        </div>

        <div className='bg-gray-800 flex flex-col justify-center items-center rounded-xl p-1'>
          <h3 className='text-white text-sm sm:text-md text-center'>Date Of Join</h3>
          <p className='text-gray-300 text-xs sm:text-sm'>26/03/2025</p>
        </div>
      </div>

      {/* Subscribe button */}
     <div className="mt-3 flex justify-center items-center">
       <button className='bg-red-500 font-semibold text-white px-0.5 py-2.5 w-[200px] rounded-lg hover:bg-red-600 duration-300 hover:text-gray-300'>Subscribe</button>
     </div>


      {/* Videos sections */}
      <div className="flex justify-center items-center gap-6 p-2 mt-4 overflow-y-auto">
        
        <Link to="#"
        className='text-sm bg-slate-900 px-3 py-1 rounded-lg hover:bg-slate-700 duration-300'
        >All</Link>
        <Link to="#"
        className='text-sm bg-slate-900 px-3 py-1 rounded-lg hover:bg-slate-700 duration-300'
        >Uploaded</Link>
        <Link to="#"
        className='text-sm bg-slate-900 px-3 py-1 rounded-lg hover:bg-slate-700 duration-300'
        >Likes</Link>
        <Link to="#"
        className='text-sm bg-slate-900 px-3 py-1 rounded-lg hover:bg-slate-700 duration-300'
        >Comments</Link>
        <Link to="#"
        className='text-sm bg-slate-900 px-3 py-1 rounded-lg hover:bg-slate-700 duration-300'
        >Subscribed</Link>
        <Link to="#"
        className='text-sm bg-slate-900 px-3 py-1 rounded-lg hover:bg-slate-700 duration-300'
        >Watchlist</Link>
      </div>

    <div className="grid sm:grid-cols-2 md:grid-cols-3">
  {user.videos.map((video, index) => (
    <Link
      key={index}
      className="group p-2 mt-4 overflow-hidden shadow-md shadow-gray-800 hover:shadow-2xs hover:shadow-amber-200 max-w-[360px] border-2 border-amber-950"
    >
      {/* Hover video over thumbnail */}
      <div className="relative h-[200px] w-full">
        <img
          className="h-full w-full object-cover rounded-lg group-hover:hidden"
          src={video.vid_thumbnail}
          alt="thumbnail"
        />
        <video
          className="h-full w-full object-cover rounded-lg hidden group-hover:block"
          src={video.vid_Src}
          autoPlay
          loop
          muted
        />
      </div>

      {/* Video Description */}
      <p className="text-white font-sm mt-1">{video.vid_title}</p>

      {/* User info */}
      <div className="flex gap-2 items-center mt-2">
        <img
          className="h-10 rounded-full"
          src={user.avatar}
          alt="avatar"
        />
        <div className="flex flex-col">
          <p className="text-white text-sm">{user.username}</p>
          <p className="text-gray-300 text-xs">{video.vid_views} views</p>
        </div>
      </div>
    </Link>
  ))}
</div>

    </div>
  )
}

export default CreatorProfile