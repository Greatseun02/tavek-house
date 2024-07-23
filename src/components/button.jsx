import React from 'react'

export default function Button({link, style, text}) {
  return (
    <a  href={link}><button className={style + " bg-primaryBlue text-white rounded-3xl px-6 font-medium text-lg opensans py-3"} >{text}</button></a>
    
  )
}
