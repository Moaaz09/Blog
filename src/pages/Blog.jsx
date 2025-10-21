import React from 'react'
import NewsLetter from '../components/NewsLetter'
import Testimonial from '../components/Testimonials'
import ReadingComponents from '../components/ReadingComponents'

const Blog = () => {
  return (
    <div className='sm:ml-[235px] ml-[20px]'>
      
        <button className='bg-[#283A61] text-white sm:text-sm text-[8px] roboto-font rounded sm:w-[112px] w-[67px] sm:h-[26px] h-[16px] sm:mt-[45px] mt-[18px]'>Food Thoery</button>
        <h1 className='sm:text-[46px] text-[18px] merriweather-font font-bold'>What I Learned About Life and <br />Food Backpacking Around Greece</h1>
        <p className='merriweather-font sm:text-sm text-[8px] text-[#515151]'>Aug 1, 2021 • 7 min read</p>
        
        <div>
          <img className='sm:w-[800px] w-[270px] sm:h-[278px]' src="/Images/image-4.png" alt="This is an image" />
        </div>

        <div className='flex sm:gap-4 gap-2'>
          <img className='relative sm:bottom-[-4px] bottom-[-8px] sm:w-[50px] w-[25px] sm:h-[50px] h-[25px]' src="/Images/image-3.png" alt="Author" />
          <span className='Merriweather-font sm:text-sm text-[7px] font-medium mt-4'>George Costanza</span>
        </div>

        <p className='roboto-font sm:text-[26px] text-[9px] mt-[30px] text-[#434343] font-medium'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices dui <br /> diam arcu pharetra at laoreet pellentesque. Imperdiet sit ut ornare <br /> nulla risus id fames nascetur urna. Eros in neque tincidunt.</p>

        <p className='roboto-font sm:text-[20px] text-[7.5px] font-normal sm:mt-[45px] mt-[22px] sm:mb-[50px] mb-[25px]'>Vel leo proin facilisis metus sit ut cursus sagittis. Diam donec mus malesuada et ac <br /> vulputate. Aenean lacinia suspendisse et mattis adipiscing id dictum commodo nunc. <br />Feugiat lorem cras ut cras enim neque, elit, facilisi habitasse. Facilisis faucibus nunc <br /> congue urna diam. Vitae, diam justo, massa, elit. In et nibh ut in diam tellus at tellus <br />diam.</p>

        <div className='bg-[#F5F5F5] border-[1px #DDDDDD] rounded sm:w-[800px] w-[270px] sm:h-[278px] h-[180px] sm:pl-[40px] pl-[25px] sm:pt-[40px] p-[15px]'>
          <h3 className='Merriweather-font sm:text-2xl text-[20px] font-bold'>In this article</h3><br />
          <p className='Merriweather-font sm:text-[18px] text-[8.5px]'>1. <span className='Merriweather-font sm:text-[18px] text-[8.5px] underline'>How to travel without spending a dime</span></p><br />
          <p className='Merriweather-font sm:text-[18px] text-[8.5px]'>2. <span className='Merriweather-font sm:text-[18px] text-[8.5px] underline'>Get the most out of your credit card reward points</span></p><br />
          <p className='Merriweather-font sm:text-[18px] text-[8.5px]'>3. <span className='Merriweather-font sm:text-[18px] text-[8.5px] underline'>Why you don't need more than 3 pieces of clothing</span></p>
        </div>

        <p className='roboto-font sm:text-[20px] text-[7px] font-normal sm:mt-[50px] mt-[25px] sm:mb-[30px] mb-[15px]'>Amet aliquet at a aliquam ac suspendisse euismod. Lectus sit in ut erat in. Et nulla a <br /> magna amet, amet. Sodales malesuada laoreet bibendum neque amet turpis non. Ac <br /> arcu lacus turpis elementum imperdiet. Euismod purus, libero scelerisque vitae, libero <br />fermentum urna, nunc.</p>

        <h3 className='Merriweather-font sm:text-2xl text-[14px] font-bold sm:mb-[30px] mb-[15px]'>How to travel without spending a dime</h3>
        <p className='roboto-font sm:text-[18px] text-[7px] sm:mb-[30px] mb-[15px]'>Dignissim lacus sit congue lacus aliquam. Ut non fermentum vulputate donec enim sed <br /> ornare scelerisque. Sollicitudin orci leo egestas fermentum platea a imperdiet nisl. Velit <br /> placerat nibh nisl ut feugiat. Egestas id egestas nunc mattis. Sed mauris vitae commodo <br /> pharetra, vestibulum rhoncus natoque.</p>

        <p className='roboto-font sm:text-[18px] text-[7px] sm:mb-[30px] mb-[15px]'>Leo id aliquet potenti enim sed maecenas sed ornare. Risus nam mauris etiam nibh <br /> maecenas nibh interdum mauris suspendisse. Volutpat, enim interdum facilisi mauris <br /> vitae id. Vel malesuada sit etiam dolor. Ullamcorper habitant vitae, nec pretium <br /> ullamcorper viverra integer praesent tincidunt. At erat sagittis tellus ultricies in a. </p>

        <h3 className='Merriweather-font sm:text-2xl text-[14px] font-bold sm:mb-[30px] mb-[15px]'>Get the most out of your credit card reward points</h3>
        <p className='roboto-font sm:text-[18px] text-[7px] sm:mb-[30px] mb-[15px]'>Massa, libero morbi morbi sed non sed. In et neque lectus ultricies leo eros. Auctor in <br /> elementum accumsan malesuada gravida neque cursus pellentesque nunc. Dui nullam <br /> odio neque varius massa praesent. Neque, porta vel, morbi nulla at tincidunt. Neque, et <br /> ultrices duis fermentum, tincidunt sem sed. Erat accumsan dui enim nisl morbi feugiat.</p>

        <p className='roboto-font sm:text-[18px] text-[7px] sm:mb-[30px] mb-[15px]'>Ac eget lorem sit nulla sed fusce etiam. Elementum nibh in eu sed. Nibh non semper amet <br /> sit hac tristique orci. Quis velit vitae amet magnis nec in nunc. Amet vitae id cras nibh. Sed <br /> ipsum, lacinia in sit vitae. Duis luctus convallis risus purus sollicitudin purus id eu. <br /> Faucibus mattis eget ullamcorper eu suspendisse elit elit lacus purus. Tortor felis.</p>

        <h3 className='Merriweather-font sm:text-2xl text-[14px] font-bold sm:mb-[30px] mb-[15px]'>Why you don't need more than 3 pieces of clothing</h3>
        <p className='roboto-font sm:text-[18px] text-[7px] sm:mb-[30px] mb-[15px]'>Massa aenean cursus nulla urna dui, fermentum cursus in facilisis. Vulputate euismod <br /> vestibulum dolor in elementum quis quis. Erat proin in eget arcu tellus ut ultrices. Quis <br /> maecenas ullamcorper ante sit leo placerat. Quisque dictum laoreet eget quam leo tortor <br /> scelerisque sit nullam. Lacus, tortor, aenean mattis lobortis lacinia mauris. Viverra nulla.</p>

        <p className='roboto-font sm:text-[18px] text-[7px] sm:mb-[70px] mb-[35px]'>Sed pellentesque quam lorem urna. Mauris donec molestie eget massa pellentesque <br /> facilisis netus mauris. Magna eget eget sollicitudin at faucibus odio. At augue sit nisi et <br /> metus cras dignissim vel, tortor. Maecenas molestie consequat cursus posuere ultrices <br /> facilisis hac bibendum semper. Sed lorem vel donec proin. Volutpat aliquet rhoncus sit et.</p>

        <h2 className='Merriweather-font sm:text-4xl text-[21px] font-bold mb-[25px]'>Keep Reading</h2>
        
        <div className='flex'>
          <img className='sm:w-[250px] w-[100px] sm:h-[165px] h-[65px] sm:mr-10 mr-1' src="/Images/image-5.png" alt="Keep Reading image" />
          <div>
            <h3 className='Merriweather-font sm:text-2xl text-[12px] font-bold sm:mb-[15px] mb-[8px]'>Why you don't need more than <br /> 3 pieces of clothing</h3>
            <p className='roboto-font sm:text-[18px] text-[7px]'>Et vitae, mollis euismod lobortis blandit amet sed amet. Amet <br /> ut amet nisl tortor arcu non id nulla mauris neque nisl magna.</p>
          </div>
        </div><br />

        <div className='flex'>
          <img className='sm:w-[250px] w-[100px] sm:h-[165px] h-[65px] sm:mr-10 mr-1' src="/Images/image-6.png" alt="Keep Reading image" />
          <div>
            <h3 className='Merriweather-font sm:text-2xl text-[12px] font-bold sm:mb-[15px] mb-[8px]'>Why you should cook with your <br /> family together everyday</h3>
            <p className='roboto-font sm:text-[18px] text-[7px]'>Rutrum aliquet eros semper nunc. In adipiscing augue sagittis, <br /> fermentum donec nunc lacinia. Risus in egestas in orci quam.</p>
          </div>
        </div>

        <div className='flex bg-[#F5F5F5] border-[1px #DDDDDD] rounded sm:w-[800px] w-[280px] sm:h-[237px] h-[100px] sm:pt-[47px] pt-[20px] sm:pl-[65px] pl-[15px] mt-[40px] sm:gap-10 gap-3'>
          <div>
            <img className='sm:w-[150px] w-[50px] sm:h-[150px] h-[50px] relative sm:top-[-6px] top-[6px]' src="/Images/image-3.png" alt="Author" />
          </div>

          <div>
            <h3 className='Merriweather-font sm:text-2xl text-sm sm:font-normal font-bold sm:mb-[15px] mb-[7px]'>Written by George Costanza</h3>
            <p className='roboto-font sm:text-[18px] text-[7px]'>Volutpat cursus id id tincidunt duis id. Urna curabitur ultrices <br /> molestie bibendum. Purus orci nisl, commodo ipsum, ut urna,  <br />elementum. Nunc potenti lectus in erat ligula cras. Eget.</p>
          </div>
        </div><br /><br />
        <NewsLetter />
    </div>
  )
}

export default Blog