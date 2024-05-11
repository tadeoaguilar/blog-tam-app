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
        <div className="absolute top-11 h-2/3 w-2/3">
            <Image 
              src="/Brain03.png"
              alt="Brain Image"
      
              fill={true}

            />
        </div>
      )
  }