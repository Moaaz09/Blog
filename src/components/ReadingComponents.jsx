import React from 'react'
import BlogCard from './BlogCard'

const ReadingComponents = () => {
  return (
    <div className='flex overflow-x-hidden justify-center'>
        <div className='flex justify-evenly overflow-x-scroll sm:gap-6 gap-10 p-4 items-center mt-14 w-[85%] blog-card'>
      <BlogCard />
        </div>
    </div>
  )
}

export default ReadingComponents
