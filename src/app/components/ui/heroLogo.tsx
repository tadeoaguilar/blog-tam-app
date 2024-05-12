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
        <div >
          <div className="relative  w-[400px] h-[280px] top-14 border-[#84C1D9] border-8 rounded bg-[#FA5E36] ">
            
              <Image 
                src= {widthCSS >650 ?"/Brain03Big.png": "/Brain03Small.png"}
                alt={widthCSS >650 ?"/Brain03Big.png": "/Brain03Small.png"}
                className=" border-[#FA5E36] border-8 rounded "
                fill={true}
                priority={true}
                placeholder="blur"
                blurDataURL="/pulsarLogo.svg"

              />
            
            
          </div>
        </div>
      )
  }