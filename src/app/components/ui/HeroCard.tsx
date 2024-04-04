import React from 'react'
import { HEROLogo } from './heroLogo'
const HeroCard = () => {
  return (
    <section className='w-full  flex flex-col items-center  '>
        <h1 className='py-16 tracking-widest  text-7xl'>CLUSTER 44</h1>
        <p className='text-center leading-7'>Product
        A web framework for Rust that makes it simple to write <span className='font-extrabold'>fast, Type-safe, secure </span>, web applications with incredible usability, productivity and performance.        
        </p>
        <button className='bg-primary  rounded-md p-2 mt-6 border dark:bg-dark-primary dark:text-dark-on-primary bg-light-primary-container text-light-on-primary border-light-primary '
            onClick={() => {alert('Hola Poncho')}}
        >Get Started</button>
        <div className='flex flex-row'>
            <button className='bg-primary text-white rounded-md p-2 mt-6 '>Get Started</button>
            <button className='bg-primary text-white rounded-md p-2 mt-6'>Get Started</button>
        </div>
        <HEROLogo />
    </section>
  )
}

export default HeroCard