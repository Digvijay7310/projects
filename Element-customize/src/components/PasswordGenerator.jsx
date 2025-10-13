import React, { useEffect, useRef, useState } from 'react'

function PasswordGenerator() {
    const [specialCharacter, setSpecialCharacter] = useState(false)
    const [number, setNumber] = useState(false)
    const [range, setRange] = useState(6)
    const [password, setPassword] = useState("")

    const checkbox = useRef(null)
    const checkbox2 = useRef(null)

    useEffect(() => {
        if(checkbox.current || checkbox2.current){
            checkbox.current.classList.add("h-5", "w-5", "rounded-xl")
            checkbox2.current.classList.add("h-5", "w-5", "rounded-xl")
        }
    }, [])


    const handleRange = (e) => {
        setRange(e.target.value)
    }

    const generatePassword = () => {
        const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const numbers = '0123456789';
        const symbols = "!@#$%^&*()_+=|][}{`<>,./?";

        let charset = letters
        if (number) charset += numbers
        if (specialCharacter) charset += symbols

        let generated = ""
        for (let i = 0; i < range; i++) {
          const randomIndex = Math.floor(Math.random() * charset.length)
          generated += charset[randomIndex]
        }

        setPassword(generated)

    }
  return (
    <div className='bg-amber-50 rounded p-5 shadow-lg rounded-lg'>
        <h3 className='font-semibold text-lg text-centerx'>Generate your Password: </h3>
        <div className='flex gap-4'>
            <div className="p-2 text-sm flex items-center justify-center">
            <label htmlFor="specialCharacter">Special character: </label>
              <input
              ref={checkbox}
              type="checkbox" name="specialCharacter" id="specialCharacter" className='accent-green-500 ' onClick={() => setSpecialCharacter(prev => !prev)}/>
        </div>

        <div className='p-2 text-sm flex items-center justify-center'>
            <label htmlFor="number">Number: </label>
              <input
              ref={checkbox2}
              type="checkbox" name="number" id="number" className='accent-green-500' onClick={() => setNumber(prev => !prev)}/>
        </div>
        </div>
        <br /><br />

        <label htmlFor="range">Range: </label>
        <input type="range" name='range' min="6" max="30" value={range} onChange={handleRange} className='w-full accent-red-900' />
        <button type='submit' className='px-4 py-1 rounded bg-blue-500 text-white cursor-pointer' onClick={generatePassword}>Generate</button>
        
        <p>Range: {range}</p>
        <label htmlFor='yourPassword'>Your Password: </label>
        <input type="text" name='yourPassword' id='yourPassword' readOnly value={password} className='px-3 py-1 outline-none border-none rounded-lg ring ring-blue-500 ' />
    </div>
  )
}

export default PasswordGenerator