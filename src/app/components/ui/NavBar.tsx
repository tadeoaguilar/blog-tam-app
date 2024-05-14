
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
    
        <nav className="  flex flex-row w-4/5  justify-between  ">
          <div className=" flex flex-row items-center gap-4 h-14  w-14 stroke-2 my-2">
          <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120.06 120.06">
            <g>              
                <path className='dark:fill-light-orange fill-dark-orange' d="M25.25,68.24c12.18,3.75,21.28,1.54,20.32-4.93-.96-6.47-11.6-14.76-23.78-18.5-12.18-3.75-21.28-1.54-20.32,4.93.96,6.47,11.6,14.76,23.78,18.5Z" />
                <path className='dark:fill-light-blue fill-dark-blue' d="M31.92,37.96c4.66,11.86,12.06,17.59,16.53,12.81,4.46-4.78,4.3-18.27-.36-30.13-4.66-11.86-12.06-17.59-16.53-12.81-4.46,4.78-4.3,18.27.36,30.13Z" />
                <path className='dark:fill-light-orange fill-dark-orange' d="M59.76,24.3c-6.36,11.04-6.23,20.4.29,20.91,6.52.51,16.97-8.03,23.33-19.07s6.23-20.4-.29-20.91c-6.52-.51-16.97,8.03-23.33,19.07Z" />
                <path className='dark:fill-light-beige fill-dark-brown' d="M87.79,37.54c-12.6,1.91-19.84,7.85-16.17,13.26,3.67,5.42,16.86,8.26,29.45,6.35,12.6-1.91,19.84-7.85,16.17-13.26-3.67-5.42-16.86-8.26-29.45-6.35Z" />
                <path className='dark:fill-light-blue fill-dark-blue' d="M94.92,67.71c-9.35-8.66-18.5-10.62-20.45-4.37-1.95,6.25,4.05,18.33,13.4,26.99s18.5,10.62,20.45,4.37c1.95-6.25-4.05-18.33-13.4-26.99Z" />
                <path className='dark:fill-light-orange fill-dark-orange' d="M75.78,92.1c.94-12.71-3.24-21.09-9.33-18.71-6.1,2.37-11.81,14.59-12.75,27.3-.94,12.71,3.24,21.09,9.33,18.71,6.1-2.37,11.81-14.59,12.75-27.3Z" />
                <path className='dark:fill-light-beige fill-dark-brown' d="M44.77,92.34c10.52-7.19,14.47-15.68,8.81-18.96-5.66-3.29-18.77-.13-29.29,7.05s-14.47,15.68-8.81,18.96c5.66,3.29,18.77.13,29.29-7.05Z" />
            </g>
            <polygon className="fill-dark-red dark:fill-light-red" points="65.02 49.52 53.47 49.52 47.7 59.52 53.47 69.52 65.02 69.52 70.79 59.52 65.02 49.52" />
          </svg>
         
        
             </div>
            
             
            <div className="flex flex-row items-center gap-5  ">
            
            <div 
                    className=""
                    onClick={() => {
                      
                      theme?.updateTheme(theme.theme ==='dark'? 'light':'dark'
                      )}}  >                    
                          {
                          
                          theme?.theme==="light"?
                         
                         
                         <svg id="sun"   height="24" viewBox="0 -960 960 960" width="24">                       
                              <path className=''    d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Zm326-268Z"/>
                          </svg>
                        :
                        <svg className='' height="24" viewBox="0 -960 960 960" width="24">
                          <path    d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z"/>                        
                        </svg>
                          
                          }
            </div>    
            <SVGIcon
            class='w-6 h-6 '
            children = {
              <path   d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM18.36 16.83C16.93 15.09 13.46 14.5 12 14.5C10.54 14.5 7.07 15.09 5.64 16.83C4.62 15.49 4 13.82 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 13.82 19.38 15.49 18.36 16.83ZM8.5 9.5C8.5 7.56 10.06 6 12 6C13.94 6 15.5 7.56 15.5 9.5C15.5 11.44 13.94 13 12 13C10.06 13 8.5 11.44 8.5 9.5Z" />
            }/>
                    
          </div>
        </nav>
    
  )
}    




export default NavBar