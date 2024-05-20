
'use client'
import React from 'react'
import Image from 'next/image'
import { SVGIcon } from './SVGIcon'
import { useState ,useContext} from 'react'
import { ThemeContext } from "@/lib/context"; // To REFACTOR , Stateless Component

const HeroText = () => {
  
  const theme = useContext(ThemeContext); // To REFACTOR , Stateless Component

  
  return (
    <>
        
       

        <ul className="absolute pt-96  w-[40%] h-12 flex
        
                       flex-col justify-center items-center">
          

          <li className='text-6xl text-center uppercase '>
            Affordable Web Services to grow everyone business
          </li>
          <li className='my-16 text-3xl text-center text-[#F15A24]'>
            Connect your business to the World. Discover your journey to the digital world with us.
          </li>
          <button className='bg-[#19B6BD] text-2xl rounded-full h-48 w-44 '>
             Welcome!
          </button>
          

        </ul>





        
       
          </>  
    
  )
}    




export default HeroText