import React from 'react'

export interface IPropsCard  {
    props:{
    title: string,
    titleBgColor: "cyan" | "red" | "orange" | "white",
    svgFile: string,
    learn:string
}
}

const Card: React.FC<IPropsCard> = ({props}) => {
  return (
    <div className={`bg-grape rounded-xl  w-full h-full text-${props.titleBgColor}`}>
        <p>{props.title} </p>
        <p>{props.svgFile} </p>
        <p>{props.learn} </p>

    </div>
  )
}

export default Card