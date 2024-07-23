import React from 'react'
import Header from '../components/Header'
import Button from '../components/button'

export default function HeroSection() {
  return (
    <section id='home'>
        <Header/>
        <div className='bg-primaryWhite'>
            <div className='container px-sm mx-auto text-center pt-10 '>
                <p className='text-[48px] font-medium syne leading-[50px] tracking-[-0.8px]'>A different kind of workspace</p>
                <div className='grid grid-cols-2 gap-3 mt-10'>
                    <Button style={"font-bold text-lg w-full"} text={"Get Started"}/>
                    <Button text={"Book a tour"} style={"bg-primaryBlack w-full"}/>
                </div>
                <div className='grid justify-center h-[20px] container relative'>
                
                </div>
            </div>
        
        </div>
    </section>
  )
}
