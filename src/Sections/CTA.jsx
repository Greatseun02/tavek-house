import React from 'react'
import Button from '../components/button'

export default function CTA() {
  return (
    <section id='cta' className=' bg-[#111828] text-white'>
        <p className=''>
            Are you looking for a co-working space?
        </p>
        <Button text={"Book A Tour"} style={"bg-primaryBlue"}/>
    </section>
  )
}
