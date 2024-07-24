import React from 'react'
import Button from '../components/button'
import { HorizontalLine } from '../Icon'
import { CheckBox } from '../Icon'
import GetStarted from '../components/GetStarted'

export default function About() {
    const [showModal, setShowModal] = React.useState(false)
  function handleClick(){
    setShowModal(true)
  }
  return (
    <section id='about' className='bg-white pt-10 pb-10'>
        <div className='px-sm container mx-auto xl:px-xl about'>
            <p className='text-[22px] text-primaryBlue font-medium syne flex items-center gap-1'>About Us <HorizontalLine/> </p>
            <h2 className='text-[40px] leading-[42px] font-medium syne xl:text-[48px]'>
                Workspace & private offices for collaborative thinkers
            </h2>
            <div className='grid gap-10 mt-10'>
                <div className='flex gap-4'>
                    <div className='w-[10%] text-[36px] text-primaryBlue pt-1'><CheckBox/></div>
                    <div className='w-[90%]' >
                        <p className='text-[26px] leading-[39px] font-medium syne'>Cost effective</p>
                        <p className='text-[18px] leading-[26px] poppins'>Our payment plans are affordable and suitable for your pockets</p>
                    </div>
                </div>
                <div className='flex gap-4'>
                <div className='w-[10%] text-[36px] text-primaryBlue pt-1'><CheckBox/></div>
                    <div className='w-[90%]' >
                        <p className='text-[26px] leading-[39px] font-medium syne'>Flexible</p>
                        <p className='text-[18px] leading-[26px] poppins'>We provide flexible time hours and payment schedules for your benefit.</p>
                    </div>
                </div>
                <div className='flex gap-4'>
                <div className='w-[10%] text-[36px] text-primaryBlue pt-1'><CheckBox/></div>
                    <div className='w-[90%]' >
                        <p className='text-[26px] leading-[39px] font-medium syne'>Work-life balance</p>
                        <p className='text-[18px] leading-[26px] poppins'>We provide a professional work environment so you won't have to work from home keeping your work life different from home.</p>
                    </div>
                </div>
                <Button onClick={handleClick} text={"Get Started"} style={"bg-primaryBlack font-bold py-4 px-8 rounded-[40px]"}/>
            </div>
        </div>
        <GetStarted showModal={showModal} setShowModal={setShowModal}/>
    </section>
  )
}
