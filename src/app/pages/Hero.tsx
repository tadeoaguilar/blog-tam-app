'use client'
import React, {useContext} from 'react'
import { ThemeContext } from '@/lib/context'
import { SVGIcon } from '../components/ui/SVGIcon'
import Image from 'next/image'
import NavBar from '../components/ui/NavBar'

import { HEROLogo } from '../components/ui/heroLogo'
import HeroText from '../components/ui/HeroText'
const Hero = () => {
  const theme = useContext(ThemeContext); //It needs to be inside the component and inside the Context Provider
  
  return (
    
    <section id="HERO" className='w-screen h-screen items-center   flex flex-col justify-center  '>
   

      

   
   
   <HEROLogo /> 
   <NavBar />
  
  <HeroText />
 
    
      
    
      
    </section>
    
  )
}



export default Hero


