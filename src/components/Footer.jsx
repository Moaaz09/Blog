import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-[#F5F5F5] p-12 mt-6'>
      <div className='flex gap-8 mb-3 justify-center'>
        <Link className='text-md hover:text-[#2c2b2a] text-[#605C59]' to='/about'>About</Link>
        <Link className='text-md hover:text-[#2c2b2a] text-[#605C59]' to='/blog'>Blog</Link>
        <Link className='text-md hover:text-[#2c2b2a] text-[#605C59]' to='/contact'>Contact</Link>
      </div>
      <div className='text-center'>
        <span className='merriweather-font text-sm font-bold text-[#3E3E3E]'>Copyright © 2021 Food Ninja Blog. All Rights Reserved.</span>
      </div>
    </div>
  )
}

export default Footer