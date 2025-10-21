import React from 'react'
import ReadingComponents from '../components/ReadingComponents'
import NewsLetter from '../components/NewsLetter'

const Home = () => {
  return (
    <div>
      <div className='flex flex-col gap-3 mt-8'>
        <h1 className='sm:text-5xl text-3xl merriweather-font font-bold text-center'>
          The Food Ninja Blog
        </h1>
        <p className='roboto-font text-center sm:text-md text-sm text-[#605C59]'>
          A blog about food, experiences, and recipes.
        </p>
      </div>

      <div className='flex justify-center'>
        <div className='flex justify-between items-center mt-8 py-3 px-4 border border-[#5F5F5F] w-[270px] sm:w-[430px] rounded'>
          <input
            className='focus:outline-none border-none merriweather-font placeholder:text-lg'
            type='text'
            placeholder='Search for articles'
          />
          <i className='fa-solid fa-magnifying-glass'></i>
        </div>
      </div>

      <div>
        <ReadingComponents />
      </div>

      <div className='flex justify-center mt-16 mb-16 px-4'>
        <div className='flex flex-col sm:flex-row gap-8 sm:gap-12 md:gap-20 max-w-[1200px] w-full items-start'>
          <div className='w-full sm:w-auto flex justify-center sm:justify-start'>
            <NewsLetter />
          </div>
          
          <div className='flex flex-col gap-6 flex-1'>
            <h4 className='roboto-font font-semibold text-sm'>POPULAR POSTS</h4>
            <p className='merriweather-font text-sm hover:underline cursor-pointer'>
              How To Have Your Cake and Eat It Too: The Way of The Chicken Man
            </p>
            <p className='merriweather-font text-sm hover:underline cursor-pointer'>
              My Grandma's 30-year-old Recipe
            </p>
            <p className='merriweather-font text-sm hover:underline cursor-pointer'>
              What I learned about cooking from Ratatoulie
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home