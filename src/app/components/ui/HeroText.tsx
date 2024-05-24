
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
        
       

      <ul className="relative w-9/12 z-10  h-max flex
        
                       flex-col 
                       
                       items-center justify-center
                   
                       
                       ">
          

          <li className='text-2xl leading-normal sm:text-6xl text-center uppercase text-white'>
            Affordable Web Services to grow everyone business
          </li>
          <li className='text-xl my-8 sm:text-3xl text-center text-cyan text-opacity-90'>
            Connect your business to the World. Discover your journey to the digital world with us.
          </li>
          <button className="bg-orange  text-2xl rounded-full  w-44 py-1  "          
             
             onClick={()=>alert("hola Poncho")}
             
             >
             Welcome!
          </button>
          

        </ul>





        
       
          </>  
    
  )
}    




export default HeroText