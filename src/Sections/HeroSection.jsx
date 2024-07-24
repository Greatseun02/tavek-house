import React from 'react'
import Header from '../components/Header'
import Button from '../components/button'
import Image from "../assets/heroImage.png"

export default function HeroSection() {
  return (
    <section id='home'>
        <Header/>
        <div className='bg-primaryWhite'>
            <div className='herosection container px-sm mx-auto text-center pt-16 '>
                <p className='text-[48px] font-medium syne leading-[50px] tracking-[-0.8px]'>A different kind of workspace</p>
                <div className='grid grid-cols-2 gap-1 mt-10 w-[80%] mx-auto '>
                    <Button style={"font-bold bg-primaryBlue text-lg w-full"} text={"Get Started"}/>
                    <Button text={"Book a tour"} style={"bg-primaryBlack w-full"}/>
                </div>
                <div className='grid justify-center container relative'>
                  <img src={Image} className='w-[80%] mx-auto my-28'></img>
                </div>
            </div>
        
        </div>
    </section>
  )
}
