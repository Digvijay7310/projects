import React from 'react';
import { RiDeleteBin6Line } from "react-icons/ri";
import { AddItem, RemoveItem, DecreaseItem, IncrementQty } from '../redux/cartSlice';
import { useDispatch } from 'react-redux';

function Card2({ name, id, price, image, qty }) {
    let dispatch = useDispatch()
  return (
    <div className="w-full bg-white p-3 shadow-md rounded-lg flex flex-col sm:flex-row items-center justify-between gap-4 mb-4">
      
      {/* Image + Info */}
      <div className="flex items-center gap-4 w-full sm:w-auto">
        
        {/* Image */}
        <div className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] overflow-hidden rounded-md border border-gray-300">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Name + Qty */}
        <div className="flex flex-col gap-2">
          <div className="text-sm sm:text-base font-semibold text-gray-800">{name}</div>
          <div className="flex items-center border rounded-md overflow-hidden w-[90px]">
            <button onClick={()=> qty>1?dispatch(DecreaseItem(id)): 1} className="w-1/3 bg-red-500 text-white text-sm py-1 hover:bg-red-600">-</button>
            <span className="w-1/3 text-center text-red-500 text-sm">{qty}</span>
            <button onClick={()=> dispatch(IncrementQty({id}))} className="w-1/3 bg-red-500 text-white text-sm py-1 hover:bg-red-600">+</button>
          </div>
        </div>
      </div>

      {/* Price + Delete */}
      <div className="flex flex-col sm:items-end items-start gap-2 text-sm">
        <span className="text-red-600 font-medium">Rs {price}/-</span>
        <RiDeleteBin6Line className="text-xl text-red-500 cursor-pointer hover:text-red-700" onClick={()=> dispatch(RemoveItem(id))} />
      </div>
    </div>
  );
}

export default Card2;
