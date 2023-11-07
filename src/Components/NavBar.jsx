import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Contact from '../Pages/Contact'

const NavBar = () => {

    const [openContactBox, setOpenContactBox]=useState(false)
    const handleContactBox=()=>{
        setOpenContactBox(!openContactBox)
    }
  return (
    <>
    <div className='w-full bg-transparent p-5 sticky-0 fixed'>
        <div className='flex justify-between'>
            <div>
                <img src={`${require('../assets/Cat-N-Dog-Logo copy.png')}`} width={'130px'}/>
            </div>
            <div className='flex md:gap-4 sm:gap-3 max-sm:gap-2 justify-center items-center cursor-pointer md:text-white sm:text-black max-sm:text-black'>
                <div><Link to='/'>Home</Link></div>
                <div><Link to='/'>About</Link></div>
                <div><Link to='/'>Blog</Link></div>
                <div><Link to='/'>Careers</Link></div>
                <div onClick={handleContactBox}>Contacts</div>
            </div>
        </div>
    </div>
    {
        openContactBox && <Contact handleContactBox={handleContactBox}/>
    }
    </>
  )
}

export default NavBar