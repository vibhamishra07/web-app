import React, { useEffect, useState } from 'react'
import img1 from '../assets/Group 2.png'
import img2 from '../assets/Group.png'

const Home = () => {
    const [index, setIndex]=useState(0)
    const arr=[img1, img2]

    const length = arr.length;
    console.log(length)

    const nextSlide = () => {
        setIndex(index === length - 1 ? 0 : index + 1);
    };

    const prevSlide = () => {
        setIndex(index === 0 ? length - 1 : index - 1);
    };


  return (
    <div className='w-full h-[100vh]'>
          <div className='w-full h-full flex justify-between md:flex-row sm:flex-col max-sm:flex-col'>
              <div className='bg-[#FDE3D9] flex-1 border-none flex items-center pl-10 flex-col h-full justify-center'>
                  <div className='flex flex-col gap-4 p-10'>
                      <div className='text-[#3E3E3E] text-[42px] font-medium'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                      <div className='text-[16px] text-[#6D6D6D]'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
                  </div>
                <div className='pt-4 flex gap-4 w-full justify-left items-center p-[2.5rem]'>
                    <div>
                        <img src={`${require('../assets/AppStoreBadge.png')}`} width={'100px'}/>
                    </div>
                    <div>
                    <img src={`${require('../assets/google-play-badge.png')}`} width={'100px'} height={'80px'}/>
                    </div>
                </div>
              </div>
              <div
              style={{
                flex:1,
                backgroundSize: 'cover',
                objectFit:'cover',
                // position:'relative'
              }}>
                <img src={arr[index]} width={'100%'} height={'100%'} />
                <div className='absolute top-[50%] text-white m-auto pl-10 '>
                    {/* <img src={`${require('../assets/left-arrow.png')}`} className='absolute left-0 top-[50%]'/> */}
                    <div>Hello world!</div>
                    <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit.  </div>
                    
                </div>
                {
                    console.log(index)
                }
                <div className='h-full absolute top-[50%] text-white z-10 w-[48%]'>
                    <div className='w-full flex justify-between'>
                        <div onClick={prevSlide} > <img src={`${require('../assets/left-arrow.png')}`}/></div>
                        <div onClick={nextSlide} className='cursor-pointer'> <img src={`${require('../assets/right-arrow.png')}`} /></div>
                    </div>
                </div>
                {/* <img src={`${require('../assets/right-arrow.png')}`} onclick={()=>setImages((prev)=>prev+1)} className='absolute right-3 top-[50%] cursor-pointer'/> */}
              </div>
          </div>
    </div>
  )
}

export default Home