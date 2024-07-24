import React from 'react'
import { HorizontalLine } from '../Icon'
import Lagos from "../assets/lagos.jpg"
import Abeokuta from "../assets/abeokuta.jpg"
import Ibadan from "../assets/ibadan.jpg"
import Portharcourt from "../assets/portharcourt.jpg"
import Abuja from "../assets/abuja.jpg"

export default function Locations() {
    const lists = [
        {
            id:1,
            img:Lagos,
            title:"Lagos"
        },
        {
            id:2,
            img:Ibadan,
            title:"Ibadan"
        },
        {
            id:3,
            img:Abuja,
            title:"Abuja"
        },
        {
            id:4,
            img:Portharcourt,
            title:"Port-harcourt"
        },
        {
            id:5,
            img:Abeokuta,
            title:"Abeokuta"
        }

    ]
  return (
    <section className='bg-primaryWhite' id='locations'>
        <div className='container px-sm mx-auto py-16'>
            <p className=' mb-3 flex items-center syne font-medium leading-[28px] text-[22px] text-primaryBlue '>Locations <HorizontalLine/> </p>
            <p className='text-[40px] syne font-medium leading-[42px]'>We have workspaces in these different cities</p>
            <div className='grid xl:grid-cols-2 gap-16 mt-16'>
                {
                    lists.map(
                        list => 
                        <div className='grid'>
                            <img className='object-cover w-full h-[600px]  rounded-xl ' src={list.img}></img>
                            <p className='syne font-semibold text-[24px] mt-3 '>{list.title}</p>
                        </div>
                    )
                }
            </div>
           
        </div>
    </section>
  )
}
