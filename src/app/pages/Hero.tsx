'use client'
import React, {useContext} from 'react'
import { ThemeContext } from '@/lib/context'
import { SVGIcon } from '../components/ui/SVGIcon'
import Image from 'next/image'
import NavBar from '../components/ui/NavBar'
import HeroCard from '../components/ui/HeroCard'
import { HEROLogo } from '../components/ui/heroLogo'
const Hero = () => {
  const theme = useContext(ThemeContext); //It needs to be inside the component and inside the Context Provider
  
  return (
    
    <section id="HERO" className='w-full flex flex-col items-center'>
   

      

        
      <NavBar />
      <div>
      <HEROLogo />
      </div>
      <div>
        <HeroCard />     
      </div>
    </section>
    
  )
}



export default Hero


