import React from 'react'
import Header from '../components/Header/Header'
import {Outlet} from 'react-router-dom'
import Footer from '../components/Footer'

function Layout() {
  return (
    <>
    <Header />
    <main className='min-h-screen bg-gray-100'>
        <Outlet />
    </main>
    <Footer />
    </>
  )
}

export default Layout