import React from 'react'
import Logo from './Logo'
import SearchComponent from '../Search/SearchComponent'
import Navbar from './Navbar'

function Header() {
  return (
    <header className='py-3 px-2 flex justify-between items-center bg-orange-800'>
        <Logo />
        <SearchComponent />
        <aside className='max-w-sm'>
            <Navbar/>
        </aside>
    </header>
  )
}

export default Header