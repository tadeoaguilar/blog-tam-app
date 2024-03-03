import React from 'react'
import Image from 'next/image'
import { Inter } from 'next/font/google'

interface SVGIconProps {
  class: string,
  children: React.ReactElement
}

export const SVGIcon = (props: SVGIconProps) => 
{
    return (
      <svg className={props.class} >
        {props.children}
      </svg>
      
    )
}


