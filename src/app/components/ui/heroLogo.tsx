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
        <div  className="h-screen w-4/5 flex flex-row justify-center">
          
          <div className="  w-2/3 h-2/3  bg-light-blue dark:bg-dark-blue ">
            test
          </div>
          <div className="relative z-30  w-2/3 h-2/3  border-dark-blue dark:border-light-blue  border-8 rounded">

              <Image 
                src= {widthCSS >650 ?"/Brain03Big.png": "/Brain03Small.png"}
                alt={widthCSS >650 ?"/Brain03Big.png": "/Brain03Small.png"}
                className=" border-dark-orange dark:border-light-red border-8  blur-0 transition ease-in-out delay-500 bg-dark-on-primary  hover:blur-sm duration-500 "
                fill={true}
                priority={true}
                placeholder="blur"
                blurDataURL="/pulsarLogo.svg"

              />
            
            
          </div>
        </div>
      )
  }