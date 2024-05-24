'use client'

import { useEffect, useState } from "react"
import Image from "next/image"
import HeroText from "./HeroText"
import NavBar from "./NavBar"
export const HEROLogoAlt = () => 


  {
    const [widthCSS, setwidthCSS] = useState(1024)
    const [heightCSS, setHeightCSS] = useState(1024)
    useEffect(()=>{
    setwidthCSS(window.innerWidth)
    setHeightCSS(window.innerHeight)
    console.log(window.innerWidth)
  })
      return (
        
          
        <div className="  grid grid-cols-2 w-screen h-screen bg-grape items-center justify-center">
          <HeroText />
          

          <div className="flex flex-col w-full h-full">
           
           <div className="relative z-10 w-full h-full   bg-grape ">
              
              <Image 
                src= {widthCSS >650 ?"/HeroAbstract.svg": "/HeroAbstractSmall.svg"}
                alt={widthCSS >650 ?"/Brain03Big.png": "/Brain03Small.png"}
                className=" "
                
                priority={true}
               fill={true}

              />
            
            
          </div>
          </div>
          </div>


          
        
      )
  }