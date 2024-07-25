import React from 'react'
import Button from '../components/button'
import { PiPhoneBold } from 'react-icons/pi'
import { CgMail } from 'react-icons/cg'

export default function Footer() {
    function ContactList ({icon, children}){
        return <p className='hover:cursor-pointer flex items-center text-lg leading-7 text-[#555555] gap-1'> <span className='text-primaryBlue text-2xl'>{icon}</span> <span>{children}</span> </p>
    }

  return (
    <section id='contact' className='pt-16 pb-7 mx-auto container px-sm xl:px-xl flex flex-col xl:flex-row-reverse justify-between xl:pb-0'>
        <div className='mb-16'>
            <p className='text-[28px] font-medium leading-[34px] syne '>Contact us</p>
            <div className='grid gap-3 mt-5'>
                <ContactList icon={<PiPhoneBold/>}>+2347016265809</ContactList>
                <ContactList icon={<CgMail/>}>bunmi.arije@tavekhouse.com</ContactList>
            </div>
        </div>
         
        
        <div className=' col-span-2 gap-3 pt-10 flex flex-col justify-center text-center xl:pt-0  xl:flex xl:flex-row text-lg text-[#555555]'>
            <p className='text-primaryBlack hover:cursor-pointer xl:mr-10 text-center opensans-italic font-extrabold tracking-[0.8px] text-3xl leading-[26px] underline  '>Tavek<span className=' text-primaryBlue '>House</span></p>
            <a className='hover:text-primaryBlue' href='#home'>Home</a>
            <a className='hover:text-primaryBlue' href='#about'>About</a>
            <a className='hover:text-primaryBlue' href='#features'>Features</a>
            <a className='hover:text-primaryBlue' href='#location'>Locations</a>
            <a className='hover:text-primaryBlue' href='#cta'>CTA</a>
        </div>
    </section>
  )
}
