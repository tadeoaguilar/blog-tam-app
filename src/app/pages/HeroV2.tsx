'use client'
import React, {useContext} from 'react'
import { ThemeContext } from '@/lib/context'
import { SVGIcon } from '../components/ui/SVGIcon'
import Image from 'next/image'
import NavBar from '../components/ui/NavBar'
import HeroCard from '../components/ui/HeroCard'
const HeroV2 = () => {
  const theme = useContext(ThemeContext); //It needs to be inside the component and inside the Context Provider
  
  return (
    
    <section id="HERO" >
      <div className='h-screen w-screen   '>
        <div className="my-auto mx-auto w-2/5">
        <svg className='mx-auto' viewBox='0 0 605 605' xmlns="http://www.w3.org/2000/svg">
        <path className="line-svg" d="M 0 600 L 600 100"   />
        <path className="line-svg-1" d="M 100 600 L 600 100"   />
        <path className="line-svg-2" d="M 200 600 L 600 100"   />
        <path className="line-svg-3" d="M 300 600 L 600 100"   />
        <path className="line-svg-4" d="M 400 600 L 600 100"   />
        <path className="line-svg-5" d="M 500 600 L 600 100"   />
        <path className="line-svg-6"  d= "M 600 0 L 600 600 M 600 600 L 0 600 M 0 600 L 0 100 M 0 100 L 0 0 M 0 0 L 600  0"  />

  

              {/*<line className="line-svg"  x1={100} y1={600} x2={600} y2={100} />
              <line className="line-svg"  x1={100} y1={600} x2={600} y2={100} />
              <line className="line-svg"  x1={200} y1={600} x2={600} y2={100} />
              <line className="line-svg"  x1={300} y1={600} x2={600} y2={100} />
              <line className="line-svg"  x1={400} y1={600} x2={600} y2={100} />
              <line className="line-svg"  x1={500} y1={600} x2={600} y2={100} />
              <line className="line-svg"  x1={600} y1={600} x2={600} y2={100} />
  */}

      

          </svg>
        </div>
      </div>
    </section>
    
  )
}



export default HeroV2


