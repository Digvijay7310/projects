import React, { useContext, useState } from "react";
import Nav from "../components/Nav";
import { Categories } from "../Category";
import { food_items } from "../foods";
import Card from "../components/Card";
import { dataContext } from "../context/UserContext";
import { RxCrossCircled } from "react-icons/rx";
import Card2 from "../components/Card2";
import { useSelector } from "react-redux";

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

  let subTotal = items.reduce((total, item)=>total+item.price,0)
  let deliveryFee=20;;
  let taxes = subTotal*0.5/100;
  let total = subTotal=deliveryFee+taxes
  

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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 place-items-center">
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

{/* Cart */}
     
        <div className={`w-[50vw] h-[100%] fixed top-0 right-0 bg-white shadow-xl p-5 transition-all ${showCart ? "translate-x-0": "translate-full"}`}>
        <header className="flex justify-between items-center w-[100%] ">
          <span className="text-red-500 text-xl font-semibold">Order Item</span>
          <span>
            <RxCrossCircled onClick={()=> {
              setShowCart(false)
            }} className="w-10 h-10 cursor-pointer text-red-500 hover:text-red-700 text-xl font-semibold" />
            </span>
        </header>
        <div className="w-full mt-9 flex flex-col gap-3">
          {items.map((item)=> (
            <Card2 name={item.name} price={item.price}
            image={item.image} id={item.id} qty={item.qty} />
          ))}
        </div>
        <div className="w-full border-t-2 border-red-500 mt-7 flex flex-col gap-4 p-8">
          <div className="w-full flex justify-between items-center">
          <span>SubTotal</span>
          <span>{subTotal}</span>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
     
    </div>
  );
}

export default Home;
