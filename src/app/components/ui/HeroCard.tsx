import React from 'react'

const HeroCard = () => {
  return (
    <section className='absolute  z-20 w-full  flex flex-col items-center  dark:text-dark-on-primary text-light-on-primary'>
        <h1 className='py-16 tracking-widest  text-7xl'>CLUSTER 44</h1>
        <p className='text-center leading-7  '>Product
        A web framework for Rust that makes it simple to write <span className='font-extrabold'>fast, Type-safe, secure </span>, web applications with incredible usability, productivity and performance.        
        </p>
        <button className=' rounded-md p-2 mt-6 border dark:bg-light-primary-container bg-dark-primary dark:text-light-on-primary text-dark-on-primary   border-light-primary '
            onClick={() => {alert('Hola Poncho')}}
        >Get Started</button>
        <div className='flex flex-row gap-16'>
            <button className='bg-dark-primary  dark:bg-light-primary-container text-white rounded-md p-2 mt-6 dark:text-light-on-primary text-dark-on-primary'>Get Started</button>
            <button className='bg-dark-primary  dark:bg-light-primary-container text-white rounded-md p-2 mt-6 dark:text-light-on-primary text-dark-on-primary'>Get Started</button>
        </div>
       
    </section>
  )
}

export default HeroCard