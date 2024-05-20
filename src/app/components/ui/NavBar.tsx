
'use client'
import React from 'react'
import Image from 'next/image'
import { SVGIcon } from './SVGIcon'
import { useState ,useContext} from 'react'
import { ThemeContext } from "@/lib/context"; // To REFACTOR , Stateless Component

const NavBar = () => {
  
  const theme = useContext(ThemeContext); // To REFACTOR , Stateless Component
  const logoCSS ="stroke-light-red "
  
  return (
    <>
        
       

        <nav className="absolute  w-screen h-12 flex ">
          <ul className=' h-full w-full 
                          flex flex-row justify-around sm:ml-[60%] items-center
                          font-semibold text-lg tracking-wide
                          text-cyan text-opacity-75'>
            <li className='underline underline-offset-4  decoration-red'>Home</li>
            <li>Service</li>
            <li>Contact</li>
            <li>About</li>
          </ul>

        </nav>





        
          <nav className="hidden absolute w-screen   flex-row justify-around items-center ">
              <div className="relative flex flex-row items-center  h-16  w-16 stroke-2">
                <Image 
                  src= {theme?.theme==="light"? "/logoLight.svg":"/logoDark.svg"}
                  alt="Logo Light"
                  fill={true}
                />
              
            
                </div>
             
             
            <div className="flex flex-row items-center gap-5  relative">
            
            <div 
                    className=""
                    onClick={() => {
                      
                      theme?.updateTheme(theme.theme ==='dark'? 'light':'dark'
                      )}}  >                    
                          {
                          
                          theme?.theme==="light"?
                         
                         
                         <svg className='fill-light-orange' id="sun"   height="24" viewBox="0 -960 960 960" width="24">                       
                              <path   d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Zm326-268Z"/>
                          </svg>
                        :
                        <svg className='fill-dark-orange' height="24" viewBox="0 -960 960 960" width="24">
                          <path    d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z"/>                        
                        </svg>
                          
                          }
            </div>    
            
                    
          </div>
          </nav>      
          </>  
    
  )
}    




export default NavBar