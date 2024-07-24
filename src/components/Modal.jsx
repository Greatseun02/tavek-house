import React from 'react'
import { IoClose } from 'react-icons/io5'

export default function Modal({children, showModal, setShowModal}) {
    
    return (
    showModal && <div className=' top-0 overflow-y-auto fixed flex justify-center items-center w-full h-full modal '>
        <div className=' w-[70%] rounded-lg bg-primaryWhite '>
            <p className='flex justify-end text-3xl text-[#555555]'><IoClose className='hover:cursor-pointer' onClick={()=>{setShowModal(false)}}/></p>
            <div className='py-5 px-8'>
                {children}
            </div>
        </div>
    </div>
  )
}
