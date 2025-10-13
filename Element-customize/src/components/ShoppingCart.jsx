import React, { useEffect, useRef, useState } from 'react'

function ShoppingCart() {
  const [selectedElement, setSelectedElement] = useState("")
  const [range, setRange] = useState(1)
  
  const inputRange = useRef()

  function handleOnChange(e) {
    setSelectedElement(e.target.value)
  }

  function handleRange(e){
    setRange(e.target.value)
  }

  useEffect(() => {
    if(inputRange.current){
        if(range < 4){
            inputRange.current.className = "accent-red-800"
        } else if(range < 8){
            inputRange.current.className = "accent-yellow-400"
        } else {
            inputRange.current.className = "accent-green-800"
        }
    }
  }, [range])

  return (
    <div className="h-1/2 flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md space-y-6">
        <h1 className="text-2xl font-bold text-gray-800 text-center">🛒 Add to Cart</h1>

        <div className="space-y-2">
          <label htmlFor="item" className="block text-sm font-medium text-gray-700">Select Item:</label>
          <select
            id="item"
            value={selectedElement}
            onChange={handleOnChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">-- Choose an item --</option>
            <option value="mango">🥭 Mango</option>
            <option value="tomato">🍅 Tomato</option>
            <option value="onion">🧅 Onion</option>
            <option value="potato">🥔 Potato</option>
          </select>
        </div>

        {selectedElement && (
          <div className="space-y-2">
            <label htmlFor="range" className="block text-sm font-medium text-gray-700">Quantity: {range}</label>
            <input
            ref={inputRange}
              id="range"
              type="range"
              name="range"
              min="1"
              max="10"
              value={range}
              onChange={handleRange}
              className="w-[100px] accent-gray-500"
            />
          </div>
        )}

        {selectedElement && (
          <div className="bg-blue-100 text-blue-800 text-sm p-3 rounded-md">
            <p><span className="font-semibold">Item:</span> {selectedElement.charAt(0).toUpperCase() + selectedElement.slice(1)}</p>
            <p><span className="font-semibold">Quantity:</span> {range}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default ShoppingCart;
