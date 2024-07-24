import React from 'react'

export default function Button({onClick, link, style, text}) {
  return (
    <a  href={link}><button onClick={onClick} className={style + "  text-white rounded-3xl px-6 font-medium text-lg opensans py-3  "} >{text}</button></a>
    
  )
}
