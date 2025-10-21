import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='flex justify-between items-center p-3 sm:py-12 sm:px-30 '>
      <Link to='/'><h1 className='text-2xl merriweather-font font-bold'>Food Ninja</h1></Link>
      <div className='flex gap-2 merriweather-font sm:gap-6'>
        <Link className='text-md hover:text-[#2c2b2a] text-[#605C59]' to= "/blog">Blog</Link>
        <Link className='text-md hover:text-[#2c2b2a] text-[#605C59]' to= "/about">About</Link>
        <Link className='text-md hover:text-[#2c2b2a] text-[#605C59]' to= "/contact">Contact</Link>
      </div>
    </div>
  )
}

export default Navbar
