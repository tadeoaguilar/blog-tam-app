
'use client'
import React from 'react'
import Image from 'next/image'
import { SVGIcon } from './SVGIcon'
import { useState ,useContext} from 'react'
import { ThemeContext } from "@/lib/context"; // To REFACTOR , Stateless Component
import { SVGLogo } from './svgLogo'
const NavBar = () => {
  
  const theme = useContext(ThemeContext); // To REFACTOR , Stateless Component
  
  return (
    
        <nav className="flex flex-row w-full  justify-between fill-light-primary dark:fill-dark-primary ">
            <div className="flex flex-row items-center gap-4 ">
            <SVGIcon 
            class='w-6 h-6 '
            children = {
              <path  d="M3 8V6H21V8H3ZM3 13H21V11H3V13ZM3 18H21V16H3V18Z" />            
            }/>
         
            
             </div>
             <SVGLogo/>
            <div className="flex flex-row items-center ">
           
            <button 
                    className=" bg-light-on-primary-surface text-light-primary dark:text-dark-primary dark:bg-dark-on-primary-surface"
                    onClick={() => {
                      console.log("theme bar", theme);
                      theme?.updateTheme(theme.theme ==='dark'? 'light':'dark'
                      )}}  >                    
                          {theme?.theme}
            </button>    
            <SVGIcon 
            class='w-6 h-6 '
            children = {
              <path  d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM18.36 16.83C16.93 15.09 13.46 14.5 12 14.5C10.54 14.5 7.07 15.09 5.64 16.83C4.62 15.49 4 13.82 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 13.82 19.38 15.49 18.36 16.83ZM8.5 9.5C8.5 7.56 10.06 6 12 6C13.94 6 15.5 7.56 15.5 9.5C15.5 11.44 13.94 13 12 13C10.06 13 8.5 11.44 8.5 9.5Z" />
            }/>
                    
                    </div>
        </nav>
    
  )
}    




export default NavBar