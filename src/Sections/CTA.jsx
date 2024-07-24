import React from 'react'
import Button from '../components/button'
import TourImage from "../assets/book-a-tourImage.png"



export default function CTA() {
  return (
    <section id='cta' className=' bg-[#111828] text-white pt-16 pb-8 tour-image'>
        <div className='container mx-auto px-sm'>
            <p className='syne text-[32px] font-medium'>
                Are you looking for a co-working space?
            </p>
            <Button text={"Book A Tour"} style={"mt-5 bg-primaryBlue font-bold text-lg leading-[20px] font-[700] py-5 px-7 rounded-[40px] text-[18px]"}/>
            <div className='mt-5 '>
                <img src={TourImage}></img>
            </div>
        </div>
    </section>
  )
}
