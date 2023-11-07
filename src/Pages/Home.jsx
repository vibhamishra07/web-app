import React, { useEffect, useState } from 'react'
import img1 from '../assets/Group 2.png'
import img2 from '../assets/Group.png'

const Home = () => {
    const [images, setImages]=useState('');
    const arr=['../assets/Group 2.png', '../assets/Group.png']
    useEffect(()=>{
        setTimeout(()=>{
            setImages(img1)
        })
    }, [])
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
                <img src={img1} width={'100%'} height={'100%'}/>
                <div className='absolute top-[50%] text-white m-auto pl-10'>
                    <div>Hello world!</div>
                    <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit.  </div>
                </div>
                
              </div>
          </div>
    </div>
  )
}

export default Home