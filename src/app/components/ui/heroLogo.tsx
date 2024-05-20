'use client'

import { useEffect, useState } from "react"
import Image from "next/image"
export const HEROLogo = () => 


  {
    const [widthCSS, setwidthCSS] = useState(1024)
    const [heightCSS, setHeightCSS] = useState(1024)
    useEffect(()=>{
    setwidthCSS(window.innerWidth)
    setHeightCSS(window.innerHeight)
    console.log(window.innerWidth)
  })
      return (
        
          
          
          <div className="abolute   w-screen h-screen bg-[#0d0219]">

              <Image 
                src= {widthCSS >650 ?"/HeroAbstract.svg": "/HeroAbstractSmall.svg"}
                alt={widthCSS >650 ?"/Brain03Big.png": "/Brain03Small.png"}
                className=" "
                
                priority={true}
               fill={true}

              />
            
            
          </div>
        
      )
  }