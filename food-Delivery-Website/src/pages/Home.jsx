import React, { useContext, useState } from "react";
import Nav from "../components/Nav";
import { Categories } from "../Category";
import { food_items } from "../foods";
import Card from "../components/Card";
import { dataContext } from "../context/UserContext";
import { RxCrossCircled } from "react-icons/rx";
import Card2 from "../components/Card2";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

function Home() {
  let { cate, setCate, input, showCart, setShowCart } = useContext(dataContext);

  function filter(category) {
    if (category === "All") {
      setCate(food_items);
    } else {
      let newList = food_items.filter((item) => item.category === category);
      setCate(newList);
    }
  }

  let items = useSelector(state => state.cart)

  let subTotal = items.reduce((total, item)=> total + item.qty*item.price,0)
  let deliveryFee=20;;
  let taxes = subTotal*0.5/100;
  let total = Math.floor(subTotal+deliveryFee+taxes)

  const formatCurrency = (value) => 
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0
    }).format(value)
  

  return (
    <div className="bg-slate-200 w-full h-full">
      <Nav />
      {/* Food menu */}

      {!input ? (
        <div className="w-full px-4 sm:px-6 md:px-10 py-4">
          <div
            id="scrollbar"
            className="
    flex gap-4 sm:gap-6 
    overflow-x-auto md:overflow-x-visible 
    whitespace-nowrap md:flex-wrap 
    justify-start 
  "
          >
            {Categories.map((item) => (
              <div
                key={item.id}
                className="
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
        "
                onClick={() => filter(item.name)}
              >
                <div className="text-red-500 text-xl sm:text-2xl">
                  {item.image}
                </div>
                <div className="text-xs sm:text-sm font-bold">{item.name}</div>
              </div>
            ))}
          </div>
        </div>
      ) : null}

      {/* Product */}
      <div className="w-full px-5 pt-8">
        <div className="grid grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-5 place-items-center">
          {cate.length>1?(cate.map((item) => (
            <Card
              key={item.id}
              name={item.food_name}
              image={item.food_image}
              price={item.price}
              id={item.id}
            />
          ))): (<div className="h-screen w-full flex  flex-col justify-center items-center gap-5 text-red-500">
           <p className="font-semibold text-lg text-bold"> {input}</p>
   <h4 className="text-3xl"> No Dish Found</h4>
  </div>)}
          
        </div>
      </div>

{/* Cart */}
     
        <div className={`w-[50vw] min-w-[300px] h-[100%] fixed top-0 right-0 bg-white shadow-xl p-5 transition-all ${showCart ? "translate-x-0": "translate-full"}`}>
        <header className="flex justify-between items-center w-[100%] ">
          <span className="text-red-500 text-xl font-semibold">Order Item</span>
          <span>
            <RxCrossCircled onClick={()=> {
              setShowCart(false)
            }} className="w-10 h-10 cursor-pointer text-red-500 hover:text-red-700 text-xl font-semibold" />
            </span>
        </header>
        
        {items.length>0 ? <>
        <div className="w-full mt-9 flex flex-col gap-3 ">
          {items.map((item)=> (
            <Card2 key={item.id} name={item.name} price={item.price}
            image={item.image} id={item.id} qty={item.qty} />
          ))}
        </div>
        <div className="w-[80%] border-t-2 border-b-2 border-red-500 mt-7 flex flex-col gap-4 p-8">
          <div className="w-full flex justify-between items-center">
          <span className="text-md text-gray-600">SubTotal</span>
          <span className="text-md text-red-400">{formatCurrency(subTotal)}/-</span>
          </div>
          <div className="w-full flex justify-between items-center">
          <span className="text-md text-gray-600">Delivery Fee</span>
          <span className="text-md text-red-400">{formatCurrency(deliveryFee)}/-</span>
          </div>
          <div className="w-full flex justify-between items-center">
          <span className="text-md text-gray-600">Taxes</span>
          <span className="text-md text-red-400">{formatCurrency(taxes)}/-</span>
          </div>

          
        </div>
        <div className="w-full flex justify-between items-center">
          <span className="text-md text-gray-600">Total</span>
          <span className="text-md text-red-400">{formatCurrency(total)}/-</span>
          </div>
           <button 
           onClick={()=>{
            toast.success("Successfully order Placed")
           }}
           className='w-full p-2 bg-red-500 rounded text-white sm:text-base hover:scale-105 hover:cursor-pointer hover:text-white hover:rounded-2xl hover:bg-red-600 duration-200'>Place order</button>

           </>: <div className="h-[400px] text-center flex items-center justify-center text-3xl text-red-500">Empty Cart</div>}
        
      </div>
     
       
     
    </div>
  );
}

export default Home;
