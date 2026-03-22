import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className='bg-gray-700 min-h-screen'>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default Body