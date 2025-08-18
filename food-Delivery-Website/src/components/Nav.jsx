import React, { useContext, useEffect } from 'react';
import { MdOutlineFastfood, MdSearch, MdShoppingBag } from "react-icons/md";
import { dataContext } from '../context/UserContext';
import { food_items } from '../foods';
import { useSelector } from 'react-redux';

function Nav() {
  let {input, setInput, cate, setCate, showCart, setShowCart} = useContext(dataContext);
  useEffect(()=>{
   let newList =  food_items.filter((item)=>item.food_name.includes(input) || item.food_name.toLowerCase().includes(input))
   setCate(newList)
  },[input])
  let items = useSelector(state=>state.cart)

  return (
    <div className='w-full max-w-screen px-4 sm:px-6 md:px-8 h-[80px] sm:h-[90px] md:h-[100px] flex items-center justify-between gap-4 bg-transparent'>

      {/* Logo Icon */}
      <div className='w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] rounded-md bg-white flex justify-center items-center shadow-xl'>
        <MdOutlineFastfood className='w-[24px] h-[24px] sm:w-[30px] sm:h-[30px] text-red-500' />
      </div>

      {/* Search Bar */}
      <form onSubmit={(e)=>e.preventDefault()} className='flex-1 mx-2 h-[45px] sm:h-[50px] md:h-[60px] bg-white flex items-center px-4 gap-2 rounded-2xl shadow-md'>
        <MdSearch className='w-[20px] h-[20px] sm:w-[24px] sm:h-[24px] text-red-500' />
        <input
        onChange={(e)=>setInput(e.target.value)}
        value={input}
          type="search"
          placeholder='Search items'
          className='w-full bg-transparent border-none outline-none text-sm sm:text-base'
        />
      </form>

      {/* Cart Icon */}
      <div
      onClick={()=> {
        setShowCart(true)
      }}
      className='w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] p-1 bg-white flex justify-center items-center rounded-md shadow-xl relative cursor-pointer'>
        <span className="absolute -top-1 -right-1 text-black font-bold text-xs sm:text-sm bg-white px-1 rounded-full shadow">{items.length}</span>
        <MdShoppingBag className='w-[24px] h-[24px] sm:w-[30px] sm:h-[30px] text-red-500' />
      </div>
    </div>
  );
}

export default Nav;
