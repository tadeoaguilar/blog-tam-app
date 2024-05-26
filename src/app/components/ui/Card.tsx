import React from 'react'

export interface IPropsCard  {
    
    title: string,
    subTitle:string,
    titleBgColor: "text-cyan" | "text-red" | "text-orange" | "text-white" |"text-grape" | "text-blue"
    svgFile: string,
    learn:string

}

const Card: React.FC<IPropsCard> = (props) => {

  return (
    <div className={"bg-grape rounded-xl  w-full h-96 " + props.titleBgColor}>
      <div className='flex flex-col w-5/6 mx-auto h-full py-8'>
        <p className='font-bold text-2xl text-cyan'>{props.title} </p>
        <p className='font-bold text-base pt-4'>{props.subTitle} </p>
        <div className='w-full bg-white h-full mt-2'>
            Imagen
        </div>
        </div>
    </div>
  )
}

export default Card