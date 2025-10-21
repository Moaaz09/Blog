import React from 'react'
const NewsLetter = () => {
  return (
    <div className='bg-[#283A61] w-full max-w-[382px] flex flex-col items-center text-center p-8 sm:p-12 rounded gap-5'>
      <h3 className='merriweather-font font-bold text-xl sm:text-2xl text-white'>Subscribe To Our Newsletter</h3>
      <p className='text-[#DFE6FF] roboto-font text-sm sm:text-base'>Get weekly food news, articles, and videos delivered to your inbox.</p>
      <input type="email" placeholder='Email' className='placeholder:text-[#605C59] bg-white w-full p-3 placeholder:text-sm sm:placeholder:text-base placeholder:font-bold' />
      <button className='bg-[#000638] rounded w-[99px] text-sm sm:text-base text-white font-bold text-center px-4 py-2'>Sign Up</button>
      
    </div>
  )
}

export default NewsLetter