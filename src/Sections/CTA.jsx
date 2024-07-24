import React from 'react'
import Button from '../components/button'
import TourImage from "../assets/book-a-tourImage.png"
import BookTour from '../components/BookTour'



export default function CTA() {
    const [showModal, setShowModal] = React.useState(false)
  function handleClick(){
    setShowModal(true)
  }
  return (
    <>
    <section id='cta' className=' bg-[#111828] text-white pt-16 pb-8 tour-image xl:pb-16'>
        <div className='container mx-auto px-sm xl:px-xl xl:flex xl:items-center justify-center'>
        <div className='xl:w-[40%] w-full '>
            <p className='syne text-[32px] font-medium'>
                Are you looking for a co-working space?
            </p>
            <Button onClick={handleClick} text={"Book A Tour"} style={"mt-5 bg-primaryBlue font-bold text-lg leading-[20px] font-[700] py-5 px-7 rounded-[40px] text-[18px]"}/>
        </div>
            <div className='mt-5 xl:w-[50%] '>
                <img src={TourImage}></img>
            </div>
        </div>
    
    </section>
    <BookTour showModal={showModal} setShowModal={setShowModal}/>
    </>
  )
}
