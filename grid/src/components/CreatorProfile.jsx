import React from 'react';

function CreatorProfile() {

    const array = new Array(12).fill(null)
  return (
    <div className="mt-[66px] md:mt-[81px] w-full">

      {/* Cover Image Full Width */}
      <div className="w-full h-[200px] md:h-[300px] bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://cdn.pixabay.com/photo/2016/10/31/16/24/book-1786027_640.png')"
        }}
      ></div>

      {/* Avatar and User Info (Positioned Below on md+) */}
      <div className="relative w-full max-w-5xl mx-auto px-4">

        {/* Avatar overlaps cover image */}
        <div className="flex flex-col md:flex-row md:items-end md:gap-6 -mt-16 md:-mt-20">
          <img
            src="https://tse1.mm.bing.net/th/id/OIP.Rg2FmvXuSaiA7GHVqvuY0QHaFj?pid=Api&P=0&h=180"
            alt="Avatar"
            className="h-24 w-24 md:h-32 md:w-32 rounded-full border-4 border-white shadow-md"
          />

          {/* User Info */}
          <div className="mt-4 md:mt-0">
            <p className="text-2xl md:text-3xl font-semibold">John Doe</p>
            <p className="text-gray-600">@johndoe</p>
            <p className="text-sm text-gray-500">john.doe@example.com</p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="w-full max-w-5xl mx-auto mt-8 px-4 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
        <div className="bg-gray-100 p-4 rounded shadow">
          <p className="text-xl font-bold">120</p>
          <p>Videos Uploaded</p>
        </div>
        <div className="bg-gray-100 p-4 rounded shadow">
          <p className="text-xl font-bold">3.5k</p>
          <p>Profile Views</p>
        </div>
        <div className="bg-gray-100 p-4 rounded shadow">
          <p className="text-xl font-bold">Joined Jan 2023</p>
          <p>Member Since</p>
        </div>
      </div>

      {/* Sections: Videos, Likes, Comments */}
      <div className="w-full max-w-5xl mx-auto mt-10 px-4">

        <h2 className="text-xl font-semibold mb-4">Your Videos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          <div className="bg-white shadow-md p-3 rounded">
            <div className="bg-gray-200 h-40 rounded mb-2"></div>
            <p className="font-medium">Video Title 1</p>
          </div>
        </div>

        <h2 className="text-xl font-semibold mb-4">Liked Videos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          <div className="bg-white shadow-md p-3 rounded">
            <div className="bg-gray-200 h-40 rounded mb-2"></div>
            <p className="font-medium">Liked Video 1</p>
          </div>
        </div>

        <h2 className="text-xl font-semibold mb-4">Commented Videos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          <div className="bg-white shadow-md p-3 rounded">
            <div className="bg-gray-200 h-40 rounded mb-2"></div>
            <p className="font-medium">Commented Video 1</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreatorProfile;
