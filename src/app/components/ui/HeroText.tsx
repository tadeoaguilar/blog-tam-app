
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
        
       

        <ul className="absolute pt-96 sm:w-8/12   h-12 flex
        
                       flex-col justify-center items-center
                   
                       ">
          

          <li className='text-2xl leading-normal sm:text-6xl text-center uppercase '>
            Affordable Web Services to grow everyone business
          </li>
          <li className='text-xl my-8 sm:text-3xl text-center text-orange'>
            Connect your business to the World. Discover your journey to the digital world with us.
          </li>
          <button className='bg-gradient-to-r
             from-cyan  via-orange via-5% to-red
             
             
             
             rounded-full h-48 w-44 py-2'>
             Welcome!
          </button>
          

        </ul>





        
       
          </>  
    
  )
}    




export default HeroText