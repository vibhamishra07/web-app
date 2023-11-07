import React from 'react'
import Close from '../assets/Close.png'

const Contact = ({handleContactBox}) => {
  return (
    <div className='fixed top-0 left-0 w-full h-[100vh] bg-[#0006] flex justify-center items-center z-50'>
        <div className='bg-[#FCEBE5] p-10 md:w-[40%] rounded-[16px] relative sm:w-[70%] max-sm:w-[90%] pt-4 cursor-pointer'>
            <div className='absolute right-5 text-black' onClick={handleContactBox}>
                <img src={Close} height={'20px'} width={'20px'}/>
            </div>
            <div className='flex flex-col'>
                <div className='text-[#495057]'>
                    <div className='text-[42px] text-[#495057]'>
                    Contacts
                    </div>
                    <div className='text-[14px] text-[#495057]'>
                    Lorem Ipsum is simply dummy text of the printing
                    </div>
                </div>
                <div className='w-[100%] flex justify-center items-center'>
                    <form className='flex pt-5 gap-4 flex-col w-full '>
                        <div className='w-full flex '>
                            <div className='absolute pt-2 pl-4'>Name</div>
                        <input type='text' placeholder='Enter Your Name' className='p-2 rounded-[30px] w-full pl-[7rem]'></input>
                        </div>
                        <div className='w-full flex '>
                            <div className='absolute pt-2 pl-4'>E-mail</div>
                        <input type='text' placeholder='Enter your e-mail address here' className='p-2 rounded-[30px] w-full pl-[7rem]'></input>
                        </div>
                        <div className='w-full flex '>
                            <div className='absolute pt-2 pl-4'>Message</div>
                        <input type='text' placeholder='Wanna share something with us?' className='p-2 rounded-[30px] w-full pl-[7rem]'></input>
                        </div>
                        <div className='flex justify-end w-full '>
                        <button type='submit' className='bg-black text-white p-3 pl-10 pr-10 rounded-[39px] '>Submit</button>
                        </div>
                    </form>
                </div>
                <div className='flex justify-between items-center pt-2'>
                    <div>Need more info? hello@newzera.com</div>
                    <div className='flex gap-2'>
                        <span><img src={`${require('../assets/linkedin-icon-black.png')}`} width={'10px'} height={'10px'}/></span>
                        <span><img src={`${require('../assets/FB-icon-black.png')}`} width={'10px'} height={'10px'}/></span>
                        <span><img src={`${require('../assets/Twitter-icon-black.png')}`} width={'10px'} height={'10px'}/></span>
                        
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Contact