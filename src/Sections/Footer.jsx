import React from 'react'
import Button from '../components/button'

export default function Footer() {
    function ContactList ({icon, text}){
        <p className='grid'> <span>{icon}</span> <span>{text}</span> </p>
    }
  return (
    <section id='contact'>
        <p>Tavekhouse</p>
        <div>
            <p>Contact us</p>
            <div>
                <ContactList/>
            </div>
        </div>
        <div className=' col-span-2 gap-3 pt-10  flex-col justify-center text-center xl:pt-0  xl:flex xl:flex-row'>
            <a className='hover:text-primaryBlue' href='#home'>Home</a>
            <a className='hover:text-primaryBlue' href='#about'>About</a>
            <a className='hover:text-primaryBlue' href='#features'>Features</a>
            <a className='hover:text-primaryBlue' href='#location'>Locations</a>
            <a className='hover:text-primaryBlue' href='#cta'>CTA</a>
            <Button text={"Contact Us"} link={"#contact"} style={"bg-primaryBlue"}>Contact Us</Button>
        </div>
    </section>
  )
}
