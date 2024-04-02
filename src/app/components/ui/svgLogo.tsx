import React, { SVGAttributes } from 'react'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import classNames from 'classnames'


export const SVGLogo = () => 

{
  const logoCSS = "stroke-light-primary stroke-1 dark:stroke-dark-primary"
  const circleCSS = "stroke-light-primary stroke-1 dark:stroke-light-primary dark:stroke-dark-primary"
  const rectCSS="stroke-light-primary stroke-0 fill-none dark:stroke-dark-primary"
  const textCSS = "text-light-primary dark:text-dark-primary"
    return (
      
      <svg className="w-40 border border-light-on-primary" viewBox="0 0 420 100" >
          <g id="linesLogo">
          
              <line className={logoCSS} x1="30.45" y1="24.52" x2="30.49" y2="34.74"/>
              <line className={logoCSS} x1="41.59" y1="39.97" x2="30.49" y2="34.74"/>
              <line className={logoCSS} x1="51.43" y1="55.69" x2="51.51" y2="44.02"/>
              <line className={logoCSS} x1="41.59" y1="39.97" x2="51.51" y2="44.02"/>
              <line className={logoCSS} x1="51.43" y1="55.69" x2="51.33" y2="67.87"/>
              <line className={logoCSS} x1="70.11" y1="61.78" x2="76.55" y2="59.2"/>
              <line className={logoCSS} x1="76.55" y1="48.15" x2="76.55" y2="59.2"/>
              <line className={logoCSS} x1="84.28" y1="44.51" x2="76.55" y2="48.15"/>
              <line className={logoCSS} x1="65.22" y1="73.02" x2="70.11" y2="73.02"/>
              <line className={logoCSS} x1="77.02" y1="69.62" x2="70.11" y2="73.02"/>
              <line className= {logoCSS} x1="104.99" y1="77.91" x2="104.91" y2="67.5"/>
              <line className={logoCSS} x1="105.04" y1="57.44" x2="93.51" y2="51.25"/>
              <line className={logoCSS} x1="104.99" y1="77.91" x2="104.91" y2="67.5"/>
          </g>
          <g id="dotsLogo">
    <circle className={circleCSS} cx="41.29" cy="51.25" r="1.75"/>
    <circle className={circleCSS} cx="65.02" cy="50.69" r="1.75"/>
    <circle className={circleCSS} cx="51.17" cy="87.93" r="1.75"/>
    <circle className={circleCSS} cx="51.17" cy="67.02" r="1.75"/>
    <circle className={circleCSS} cx="30.01" cy="57.44" r="1.75"/>
    <circle className={circleCSS} cx="59.12" cy="69.62" r="1.75"/>
    <circle className={circleCSS} cx="58.62" cy="59.2" r="1.75"/>
    <circle className={circleCSS} cx="41.29" cy="62.14" r="1.75"/>
    <circle className={circleCSS} cx="51.33" cy="44.51" r="1.75"/>
    <circle className={circleCSS} cx="76.55" cy="48.15" r="1.75"/>
    <circle className={circleCSS} cx="76.55" cy="59.2" r="1.75"/>
    <circle className={circleCSS} cx="84.28" cy="67.02" r="1.75"/>
    <circle className={circleCSS} cx="104.95" cy="35.66" r="1.75"/>
    <circle className={circleCSS} cx="93.51" cy="51.25" r="1.75"/>
    <circle className={circleCSS} cx="84.26" cy="55.69" r="1.75"/>
    <circle className={circleCSS} cx="76.51" cy="70.25" r="1.75"/>
    <circle className={circleCSS} cx="93.55" cy="72" r="1.75"/>
    <circle className={circleCSS} cx="76.51" cy="81.3" r="1.75"/>
    <circle className={circleCSS} cx="83.97" cy="44.64" r="1.75"/>
    <circle className={circleCSS} cx="93.3" cy="40.36" r="1.75"/>
    <circle className={circleCSS} cx="104.99" cy="56.97" r="1.75"/>
    <circle className={circleCSS} cx="104.99" cy="67.02" r="1.75"/>
    <circle className={circleCSS} cx="84.28" cy="77.27" r="1.75"/>
    <circle className={circleCSS} cx="104.91" cy="46.4" r="1.75"/>
    <circle className={circleCSS} cx="118" cy="39.97" r="1.75"/>
    <circle className={circleCSS} cx="117.96" cy="61.41" r="1.75"/>
    <circle className={circleCSS} cx="117.96" cy="50.69" r="1.75"/>
    <circle className={circleCSS} cx="51.47" cy="55.22" r="1.75"/>
    <circle className={circleCSS} cx="117.96" cy="29.26" r="1.75"/>
    <circle className={circleCSS} cx="58.62" cy="48.15" r="1.75"/>
    <circle className={circleCSS} cx="41.59" cy="39.97" r="1.75"/>
    <circle className={circleCSS} cx="41.57" cy="29.26" r="1.75"/>
    <circle className={circleCSS} cx="41.29" cy="72" r="1.75"/>
    <circle className={circleCSS} cx="51.22" cy="77.27" r="1.75"/>
    <circle className={circleCSS} cx="50.85" cy="33.32" r="1.75"/>
    <circle className={circleCSS} cx="58.62" cy="37.1" r="1.75"/>
    <circle className={circleCSS} cx="93.3" cy="62.42" r="1.75"/>
    <circle className={circleCSS} cx="76.51" cy="37.1" r="1.75"/>
    <circle className={circleCSS} cx="93.55" cy="29.47" r="1.75"/>
    <circle className={circleCSS} cx="93.3" cy="62.42" r="1.75"/>
    <circle className={circleCSS} cx="83.97" cy="33.91" r="1.75"/>
    <circle className={circleCSS} cx="105.04" cy="24.52" r="1.75"/>
    <circle className={circleCSS} cx="76.51" cy="91.44" r="1.75"/>
    <circle className={circleCSS} cx="83.97" cy="88.25" r="1.75"/>
    <circle className={circleCSS} cx="93.3" cy="62.42" r="1.75"/>
    <circle className={circleCSS} cx="93.51" cy="83.91" r="1.75"/>
    <circle className={circleCSS} cx="104.99" cy="77.91" r="1.75"/>
    <circle className={circleCSS} cx="118" cy="72" r="1.75"/>
    <circle className={circleCSS} cx="58.62" cy="80.78" r="1.75"/>
    <circle className={circleCSS} cx="65.01" cy="40.36" r="1.75"/>
    <circle className={circleCSS} cx="70.07" cy="50.69" r="1.75"/>
    <circle className={circleCSS} cx="70.11" cy="62.14" r="1.75"/>
    <circle className={circleCSS} cx="70.11" cy="73.02" r="1.75"/>
    <circle className={circleCSS} cx="70.11" cy="83.28" r="1.75"/>
    <circle className={circleCSS} cx="30.45" cy="24.52" r="1.75"/>
    <circle className={circleCSS} cx="30.49" cy="34.74" r="1.75"/>
    <circle className={circleCSS} cx="30.45" cy="46.09" r="1.75"/>
    <circle className={circleCSS} cx="30.45" cy="67.87" r="1.75"/>
    <circle className={circleCSS} cx="30.49" cy="79.02" r="1.75"/>
    <circle className={circleCSS} cx="41.29" cy="83.91" r="1.75"/>
    <circle className={circleCSS} cx="65.22" cy="62.14" r="1.75"/>
    <circle className={circleCSS} cx="65.22" cy="73.02" r="1.75"/>
    <circle className={circleCSS} cx="65.02" cy="83.28" r="1.75"/>
    <circle className={circleCSS} cx="59.12" cy="91.78" r="1.75"/>
    <circle className={circleCSS} cx="17.14" cy="72.57" r="1.75"/>
    <circle className={circleCSS} cx="17.09" cy="61.41" r="1.75"/>
    <circle className={circleCSS} cx="17.09" cy="50.13" r="1.75"/>
    <circle className={circleCSS} cx="17.14" cy="28.79" r="1.75"/>
    <circle className={circleCSS} cx="17.14" cy="39.46" r="1.75"/>
    <circle className={circleCSS} cx="70.09" cy="40.36" r="1.75"/>
  </g>

  <g id="rectangles">
    <rect className={rectCSS} x=".5" y="20.94" width="133.68" height="75"/>
    <rect className={rectCSS} x="133.31" y="20.94" width="350" height="75"/>
  </g>
  <g id="logoText">
    <text className={textCSS} transform="translate(146.67 71.57)">
      <tspan className=" tracking-tight  text-[55px]" >cluster</tspan>
      <tspan className="tracking-normal text-[55px]"  > 44</tspan></text>
  </g>


      </svg>


      
    )
}


