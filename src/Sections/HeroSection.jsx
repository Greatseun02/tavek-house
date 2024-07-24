import React from 'react'
import Header from '../components/Header'
import Button from '../components/button'
import Image from "../assets/heroImage.png"

export default function HeroSection() {
  return (
    <section id='home'>
        <Header/>
        <div className='bg-primaryWhite herosection'>
            <div className=' container px-sm mx-auto text-center pt-16 xl:px-xl '>
                <p className='text-[48px] font-medium syne leading-[50px] tracking-[-0.8px] xl:text-[72px] w-[60%] mx-auto xl:leading-[80px]'>A different kind of workspace</p>
                <div className='grid grid-cols-2 gap-1 mt-10 w-fit mx-auto '>
                    <Button style={"font-[700] bg-primaryBlue text-lg w-[200px] tochange"} text={"Get Started"}/>
                    <Button text={"Book a tour"} style={"font-[700] tochange bg-primaryBlack  w-[200px] "}/>
                </div>
                <div className='grid justify-center container relative'>
                  <img src={Image} className='w-[80%] xl:w-[65%] mx-auto my-28'></img>
                </div>
            </div>
        
        </div>
    </section>
  )
}
