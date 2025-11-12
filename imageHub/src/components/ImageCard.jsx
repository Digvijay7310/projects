import React from 'react'

function ImageCard({image, title}) {
  return (
    <div className='p-2 bg-white'>
        <img src={image} alt={title}
        className='h-5 w-5 rounded'
        />
        <p className='font-medium text-sm'>{title}</p>
    </div>
  )
}

export default ImageCard