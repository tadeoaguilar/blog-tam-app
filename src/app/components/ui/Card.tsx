import React from 'react'
import Image from 'next/image'
export interface IPropsCard  {
    
    title: string,
    subTitle:string,
    titleBgColor: "text-cyan" | "text-red" | "text-orange" | "text-white" |"text-grape" | "text-blue"
    svgFile: string,
    learn:string

}

const Card: React.FC<IPropsCard> = (props) => {

  return (
    
      <div className={"bg-grape flex flex-col  gap-6 mx-auto h-full w-full py-8 justify-center drop-shadow-2xl items-center "+ props.titleBgColor }  >
        <p className='font-bold text-4xl text-cyan  pb-12 '>{props.title} </p>
        <p className='font-bold text-xl pt-4'>{props.subTitle} </p>
        <div className='relative w-full  h-52 sm:full '>
        
                <Image 
                  src= {props.svgFile}
                  alt="Card Image"
                  
                  
                priority={true}
                fill={true}

                />
            </div>
          
        
        </div>
    
  )
}

export default Card