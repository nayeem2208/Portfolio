import React from 'react'
import logo from '../assets/assets/mohamed-nayeem-ce-high-resolution-logo-transparent.png'

function Header() {
  return (
    <div className='w-full h-24  font-bold p-6 flex justify-between'>
        <div>
        <img src={logo} alt='Logo' className=' ' style={{height:'11vh'}} /></div>
    </div>
  )
}

export default Header
