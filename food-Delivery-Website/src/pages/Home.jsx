import React, { useState } from 'react'
import Nav from '../components/Nav'
import { Categories } from '../Category'
import { food_items } from '../foods'
import Card from '../components/Card'

function Home() {
  let [cate, setCate] = useState(food_items)

  function filter(category){
    if(category ==="All"){
      setCate(food_items)
    } else {
      let newList = food_items.filter((item) =>item.category 
      === category)
      setCate(newList)
    }
  }
  return (
    <div className='bg-slate-200 w-full h-full'> 
        <Nav />
        {/* Food menu */}
{/* Food menu */}
<div className='w-full px-4 sm:px-6 md:px-10 py-4'>
  <div className='
    flex gap-4 sm:gap-6 
    overflow-x-auto md:overflow-x-visible 
    whitespace-nowrap md:flex-wrap 
    justify-start 
    scrollbar-thin scrollbar-thumb-red-300
  '>
    {Categories.map((item) => (
      <div
        key={item.id}
        className='
          min-w-[80px] sm:min-w-[100px] h-[90px] sm:h-[100px]
          bg-white
          flex flex-col items-center justify-center
          p-2
          border border-red-500 rounded-md
          text-center
          transition duration-300
          hover:bg-red-100 hover:text-gray-600
          hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-400
          cursor-pointer
          flex-shrink-0
        '
        onClick={() => filter(item.name)}
      >
        <div className='text-red-500 text-xl sm:text-2xl'>
          {item.image}
        </div>
        <div className='text-xs sm:text-sm font-bold'>
          {item.name}
        </div>
      </div>
    ))}
  </div>
</div>



       {/* Product */}
      {/* Product */}
<div className='w-full px-5 pt-8'>
  <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 place-items-center'>
    {cate.map((item) => (
      <Card 
        key={item.id}
        name={item.food_name}
        image={item.food_image}
        price={item.price}
        id={item.id}
      />
    ))}
  </div>
</div>

    </div>
  )
}

export default Home