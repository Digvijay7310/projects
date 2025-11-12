import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false)

    const links = [
        {name: "Home", path:"/"},
        {name: "About", path:"/about"},
        {name: "Contact", path:"/contact"},
        {name: "Gallery", path:"/gallery"},
        {name: "Register", path:"/register"},
    ]
  return (
    <nav className="relative">
        <div className="md:hidden flex items-center">
            <button onClick={toggleMenu}>
                {isOpen ? <FaTimes className='text-white tetx-2xl'/> : <FaBars className='text-white text-2xl' />}
            </button>
        </div> 

        <ul className={
            `md:flex md:flex-row md:gap-5 absolute md:static top-full left-0 w-full md:w-auto bg-orange-700 md:bg-transparent text-white flex flex-col items-center gap-4 p-4 transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`
        }>
            {links.map((link) => (
                <Link to={link.path}
                 key={link.name}
                 onClick={closeMenu}
                 className='text-white font-semibold hover:underline block md:text-white'
                 >
                    {link.name}
                 </Link>
            ))}
        </ul>
    </nav>
  )
}

export default Navbar