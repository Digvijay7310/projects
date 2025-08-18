import React from 'react';
import { LuLeafyGreen } from 'react-icons/lu';
import { MdShoppingCart } from 'react-icons/md';

function Card({ name, image, id, price }) {
  return (
    <div className='w-full bg-white p-4 rounded-lg flex flex-col items-center gap-3 hover:ring-2 ring-red-500 hover:shadow-lg hover:shadow-slate-400 hover:scale-95 duration-150'>

      {/* Image */}
      <div className='w-full aspect-square overflow-hidden rounded-md'>
        <img
          src={image}
          alt={`${name} image`}
          className='object-cover w-full h-full'
        />
      </div>

      {/* Title */}
      <h3 className='text-base sm:text-lg font-semibold text-center'>{name}</h3>

      {/* Price & Type */}
      <div className='w-full flex justify-between items-center text-sm px-1'>
        <p className='text-gray-800 font-medium'>Rs. {price}</p>
        <div className='flex items-center gap-1 text-green-600 font-semibold'>
          <LuLeafyGreen className='text-lg' />
          <span>Veg</span>
        </div>
      </div>

      {/* Add to Cart Button */}
      <button className='w-full mt-auto group flex justify-center items-center gap-2 p-2 bg-red-500 rounded text-white text-sm sm:text-base hover:scale-105 hover:cursor-pointer hover:text-white hover:rounded-2xl hover:bg-red-600 duration-200'>
        <MdShoppingCart className='text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200' />
        Add To Cart
      </button>

    </div>
  );
}

export default Card;
