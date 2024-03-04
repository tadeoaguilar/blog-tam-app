
'use client'
import React from 'react'
import { SVGIcon } from './SVGIcon'
import { useState ,useContext} from 'react'
import { ThemeContext } from "@/lib/context"; // To REFACTOR , Stateless Component
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
            <SVGIcon 
            class='w-11 h-8 '
            children = {
              <path d="M9.66667 30C7.11111 30 4.94444 28.5455 3.16667 25.6364C1.38889 22.7273 0.5 19.1818 0.5 15C0.5 10.8182 1.38889 7.27273 3.16667 4.36364C4.94444 1.45455 7.11111 0 9.66667 0C10.6944 0 11.6806 0.295455 12.625 0.886364C13.5694 1.47727 14.4167 2.31818 15.1667 3.40909L18 7.63636L15.5 11.3182L12.9167 7.5C12.4722 6.86364 11.9722 6.36364 11.4167 6C10.8611 5.63636 10.2778 5.45455 9.66667 5.45455C8.05556 5.45455 6.68056 6.38636 5.54167 8.25C4.40278 10.1136 3.83333 12.3636 3.83333 15C3.83333 17.6364 4.40278 19.8864 5.54167 21.75C6.68056 23.6136 8.05556 24.5455 9.66667 24.5455C10.2778 24.5455 10.8611 24.3636 11.4167 24C11.9722 23.6364 12.4722 23.1364 12.9167 22.5L25.8333 3.40909C26.5833 2.31818 27.4306 1.47727 28.375 0.886364C29.3194 0.295455 30.3056 0 31.3333 0C33.8889 0 36.0556 1.45455 37.8333 4.36364C39.6111 7.27273 40.5 10.8182 40.5 15C40.5 19.1818 39.6111 22.7273 37.8333 25.6364C36.0556 28.5455 33.8889 30 31.3333 30C30.3056 30 29.3194 29.7045 28.375 29.1136C27.4306 28.5227 26.5833 27.6818 25.8333 26.5909L23 22.3636L25.5 18.6818L28.0833 22.5C28.5278 23.1364 29.0278 23.6364 29.5833 24C30.1389 24.3636 30.7222 24.5455 31.3333 24.5455C32.9444 24.5455 34.3194 23.6136 35.4583 21.75C36.5972 19.8864 37.1667 17.6364 37.1667 15C37.1667 12.3636 36.5972 10.1136 35.4583 8.25C34.3194 6.38636 32.9444 5.45455 31.3333 5.45455C30.7222 5.45455 30.1389 5.63636 29.5833 6C29.0278 6.36364 28.5278 6.86364 28.0833 7.5L15.1667 26.5909C14.4167 27.6818 13.5694 28.5227 12.625 29.1136C11.6806 29.7045 10.6944 30 9.66667 30Z" />
            }/>
             </div>
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