'use client'
import React, {useContext} from 'react'
import { ThemeContext } from '@/lib/context'
import { SVGIcon } from '../components/ui/SVGIcon'
import Image from 'next/image'
import NavBar from '../components/ui/NavBar'
import HeroCard from '../components/ui/HeroCard'
const Hero = () => {
  const theme = useContext(ThemeContext); //It needs to be inside the component and inside the Context Provider
  
  return (
    
    <section id="HERO" className='flex flex-col w-screen gap-6 justify-center items-center px-9 py-2'>
      <NavBar />
      <HeroCard />
     
    </section>
    
  )
}



export default Hero


