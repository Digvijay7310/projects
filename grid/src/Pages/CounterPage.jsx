import React from 'react'

function CounterPage() {

    const [counter, setCounter] = React.useState(0)

    const addValue = () => {
        // When we do * time the value update only one time
        // setCounter(counter + 1)
        setCounter(prevCounter => prevCounter + 1)
        setCounter(prevCounter => prevCounter + 1)
        setCounter(prevCounter => prevCounter + 1)
        setCounter(prevCounter => prevCounter + 1)
        
    }

    const removeValue = () => {
        if(counter < 1) return null
        setCounter(counter - 1)
    }
  return (
    <div className='flex justify-center items-center flex-col w-full h-screen bg-gradient-to-tl from-blue-300 to-pink-500 '>
        <h1 className='text-3xl text-white'>Welcome to React project Series</h1>
        <h2 className='text-2xl'>Here we make React Projects.</h2>
        <h3 className='text-xl'>Counter {counter}</h3>

        <button
        className='bg-green-600 px-4 py-1 rounded-lg shadow-sm outline-none cursor-pointer'
        onClick={addValue}>Add Value {counter}</button>
        <br />
        <button
        className='bg-red-600 px-4 py-1 rounded-lg shadow-sm outline-none cursor-pointer'
        onClick={removeValue}>Remove Value {counter}</button>
    </div>
  )
}

export default CounterPage