import React, { useState } from 'react'
import { FaArrowDown, FaArrowUp } from 'react-icons/fa'
import { LuAArrowDown, LuAArrowUp } from 'react-icons/lu'

function VegeRestaurant() {

    const array = new Array(12).fill(null)
    const images = new Array(6).fill(null)

    const [open, setOpen] = useState(false)
    const handleAbout = () => {
        setOpen((prev)=> !prev)
    }
  return (
    <div>
          <div className='bg-[#FFF8F0] p-4 sm:p-10 md:px-20 '>
            <img src="www.via.placeholder" alt="My hotels" className='w-full h-60 border border-red-800 object-contain rounded' />
            <div>
                <h2 className='font-semibold text-xl mt-2'>La Da Ve Restaurants</h2>
            <p className='text-xs'>Rating 5</p>
            <p className='text-sm font-extralight'>Famous for Chienese</p>
            <p className='text-sm font-extralight'>10:00am to 10:00pm</p>
            <p className='text-sm font-extralight'>L-120 Street trondio, 201232 Kolkata</p>
            </div>

             <div className='flex gap-3 overflow-scroll scrollbar-hide'>
                    {images.map((_,idx) => (
                        <div key={idx} className='gap-3 py-5'>
                            <img src='www.via.placeholder' alt='image' className='h-10 w-10 sm:h-15 sm:w-15 md:h-25 md:w-25 border border-red-900 object-contain rounded-md hover:-translate-y-1/12 hover:shadow hover:shadow-zinc-600 duration-300' />
                            
                        </div>
                    ))}
                    
                </div>


            {/* About Restaurant */}
        <div className='mt-2 sm:mt-5 md:mt-10 p-4 rounded-lg bg-[#f2f2f2]'>
            <div className='flex gap-3 p-1]'>
                <h3 className='font-semibold text-xl'>About this Restaurant</h3>
                <button onClick={handleAbout}>{open ? <FaArrowUp/> : <FaArrowDown/>}</button>
                
            </div>

           


            {open && (
                <div>
                    <p className='text-sm py-2'>Welcome to our Restaurant. WE server different type of food, Snacks, Desserts, And Sweet Dishes from around all over India. Pricing starts from Rs 300. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, cumque aut voluptatibus, dolorem incidunt, eligendi eaque a sit pariatur harum minima sunt commodi atque assumenda esse facere veritatis! Molestiae, cumque.
                    Ullam unde totam rem. Quaerat ipsum earum nemo ullam corrupti officia totam odit nihil tenetur, iste natus beatae nesciunt molestias eveniet, molestiae adipisci dignissimos ea, esse maiores maxime in! Voluptatem!
                    Harum quia amet, neque nulla iusto quo omnis eum corporis praesentium cum? Vero, sequi. Ab officiis a temporibus porro non at, corrupti dolor qui, expedita fugiat magnam ipsum dolorum ipsam. lorem*10</p>
                    <div className='flex gap-3 overflow-scroll scrollbar-hide'>
                    {images.map((_,idx) => (
                        <div key={idx} className='gap-3 py-5'>
                            <img src='www.via.placeholder' alt='image' className='h-30 w-30 sm:h-40 sm:w-40 border border-red-900 object-contain rounded-md hover:-translate-y-1/12 hover:shadow hover:shadow-zinc-600 duration-300' />
                            
                        </div>
                    ))}
                    
                </div>
                </div>
            )}
        </div> 
        </div>


        {/* Restaurants menu */}
        <div className='p-4 sm:p-10 md:px-20 bg-[#FFF8F0]'>
            <p className='text-red-700 font-semibold text-lg'>Food</p>
            <div className='flex gap-3 overflow-scroll scrollbar-hide py-2'>
            

            {array.map((_,id)=> (
                <div
                key={id}
                 className='bg-white p-2 border border-red-400 mt-3 flex justify-center items-center flex-col'>    
                    <img src="www.via.placeholder" alt="Chole Bhature"
                 className='w-40 h-40 md:w-50 md:h-50 object-contain rounded-lg border border-blue-400' />
            <h4 className='text-sm font-semibold'>Chole Bhature</h4>
            <p className='text-xs'>Customers rating: 4.4</p>
            
            {/* Add to cart */}
           <div className=' mt-3 flex justify-center'>
             <button
             type='button'
             className='px-3 py-1 rounded text-white bg-red-500 hover:bg-red-700 outline-none border-none hover:scale-105 duration-300 hover:rounded-lg'>
                Add to cart
                </button>
           </div>
                </div>
            ))}
        </div>
        </div>

        <div className='p-4 sm:p-10 md:px-20 bg-[#FFF8F0]'>
            <p className='text-red-700 font-semibold text-lg'>Snacks</p>
            <div className='flex gap-3 overflow-scroll scrollbar-hide py-2'>
            

            {array.map((_,id)=> (
                <div
                key={id}
                 className='bg-white p-2 border border-red-400 mt-3 flex justify-center items-center flex-col'>    
                    <img src="www.via.placeholder" alt="Chole Bhature"
                 className='w-40 h-40 md:w-50 md:h-50 object-contain rounded-lg border border-blue-400' />
            <h4 className='text-sm font-semibold'>Chole Bhature</h4>
            <p className='text-xs'>Customers rating: 4.4</p>
            
            {/* Add to cart */}
           <div className=' mt-3 flex justify-center'>
             <button
             type='button'
             className='px-3 py-1 rounded text-white bg-red-500 hover:bg-red-700 outline-none border-none hover:scale-105 duration-300 hover:rounded-lg'>
                Add to cart
                </button>
           </div>
                </div>
            ))}
        </div>
        </div>

        <div className='p-4 sm:p-10 md:px-20 bg-[#FFF8F0]'>
            <p className='text-red-700 font-semibold text-lg'>Desserts</p>
            <div className='flex gap-3 overflow-scroll scrollbar-hide py-2'>
            

            {array.map((_,id)=> (
                <div
                key={id}
                 className='bg-white p-2 border border-red-400 mt-3 flex justify-center items-center flex-col'>    
                    <img src="www.via.placeholder" alt="Chole Bhature"
                 className='w-40 h-40 md:w-50 md:h-50 object-contain rounded-lg border border-blue-400' />
            <h4 className='text-sm font-semibold'>Chole Bhature</h4>
            <p className='text-xs'>Customers rating: 4.4</p>
            
            {/* Add to cart */}
           <div className=' mt-3 flex justify-center'>
             <button
             type='button'
             className='px-3 py-1 rounded text-white bg-red-500 hover:bg-red-700 outline-none border-none hover:scale-105 duration-300 hover:rounded-lg'>
                Add to cart
                </button>
           </div>
                </div>
            ))}
        </div>
        </div>

        <div className='p-4 sm:p-10 md:px-20 bg-[#FFF8F0]'>
            <p className='text-red-700 font-semibold text-lg'>Sweets</p>
            <div className='flex gap-3 overflow-scroll scrollbar-hide py-2'>
            

            {array.map((_,id)=> (
                <div
                key={id}
                 className='bg-white p-2 border border-red-400 mt-3 flex justify-center items-center flex-col'>    
                    <img src="www.via.placeholder" alt="Chole Bhature"
                 className='w-40 h-40 md:w-50 md:h-50 object-contain rounded-lg border border-blue-400' />
            <h4 className='text-sm font-semibold'>Chole Bhature</h4>
            <p className='text-xs'>Customers rating: 4.4</p>
            
            {/* Add to cart */}
           <div className=' mt-3 flex justify-center'>
             <button
             type='button'
             className='px-3 py-1 rounded text-white bg-red-500 hover:bg-red-700 outline-none border-none hover:scale-105 duration-300 hover:rounded-lg'>
                Add to cart
                </button>
           </div>
                </div>
            ))}
        </div>
        </div>

        <div className='p-4 sm:p-10 md:px-20 bg-[#FFF8F0]'>
            <p className='text-red-700 font-semibold text-lg'>Street Food</p>
            <div className='flex gap-3 overflow-scroll scrollbar-hide py-2'>
            

            {array.map((_,id)=> (
                <div
                key={id}
                 className='bg-white p-2 border border-red-400 mt-3 flex justify-center items-center flex-col'>    
                    <img src="www.via.placeholder" alt="Chole Bhature"
                 className='w-40 h-40 md:w-50 md:h-50 object-contain rounded-lg border border-blue-400' />
            <h4 className='text-sm font-semibold'>Chole Bhature</h4>
            <p className='text-xs'>Customers rating: 4.4</p>
            
            {/* Add to cart */}
           <div className=' mt-3 flex justify-center'>
             <button
             type='button'
             className='px-3 py-1 rounded text-white bg-red-500 hover:bg-red-700 outline-none border-none hover:scale-105 duration-300 hover:rounded-lg'>
                Add to cart
                </button>
           </div>
                </div>
            ))}
        </div>
        </div>
        
    </div>
  )
}

export default VegeRestaurant