import React, { useRef } from 'react'
import Button from './button'
import Hamburger from "../assets/tavekHamburger.svg"

export default function Header() {
    const toggled = useRef(null)
    function toggle(){
       
        toggled.current.classList.toggle("hidden")
        toggled.current.classList.toggle("flex")
    }
  return (
    <div>
        <div className='grid grid-cols-2 container py-7 px-sm mx-auto'>
            <p className='opensans-italic font-extrabold tracking-[0.8px] text-3xl leading-[26px] underline  '>Tavek<span className=' text-primaryBlue '>House</span></p>
            <div className='grid justify-end'>
                <div onClick={toggle} className='rounded-md border-[1px] border-primaryBlack px-4 py-2 '>
                    <img className=' w-4 ' src={Hamburger}></img>
                </div>
                    
            </div>
            <div ref={toggled} className=' col-span-2 gap-3 pt-10 hidden  flex-col justify-center text-center xl:pt-0  xl:flex xl:flex-row'>
                <a className='hover:text-primaryBlue' href='#home'>Home</a>
                <a className='hover:text-primaryBlue' href='#about'>About</a>
                <a className='hover:text-primaryBlue' href='#features'>Features</a>
                <a className='hover:text-primaryBlue' href='#location'>Locations</a>
                <a className='hover:text-primaryBlue' href='#cta'>CTA</a>
                <Button text={"Contact Us"} link={"#contact"} style={"bg-primaryBlue"}>Contact Us</Button>
            </div>
        </div>
    </div>
  
  )
}
