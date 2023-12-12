import React from 'react'
import logo from '../assets/assets/mohamed-nayeem-ce-high-resolution-logo-transparent.png'
import { motion } from "framer-motion";

function Header() {
  return (
    <div className='w-full h-24  font-bold p-6 flex justify-between'>
        <div>
        <motion.img src={logo} alt='Logo' whileTap={{scale:1000}}  animate={{opacity:1,y:0}} initial={{opacity:0,y:150}} transition={{duration:0.5,delay:0.1}} style={{height:'11vh'}} /></div>
    </div>
  )
}

export default Header
