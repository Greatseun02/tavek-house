import React from 'react'
import { GiRoundTable } from "react-icons/gi";
import { FaWifi } from "react-icons/fa";
import { FaRegLightbulb } from "react-icons/fa";
import { TbToolsKitchen3 } from "react-icons/tb";
import { IoMdPrint } from "react-icons/io";
import { IoDesktopOutline } from "react-icons/io5";
import { GiOfficeChair } from "react-icons/gi";
import { IoLogoGameControllerB } from "react-icons/io";



export default function OffersSection() {
    const offers = [
        {
            id:1,icon:<GiRoundTable/>, title:"Meeting Rooms"
        },
        {
            id:2, icon:<FaWifi/>, title:"Fast & Unlimited Internet"
        },
        {
            id:3, icon:<FaRegLightbulb/>, title:"24/7 electricity"
        },
        {
            id:4, icon:<TbToolsKitchen3/>, title:"Shared Kitchen"
        },
        {
            id:5, icon:<IoMdPrint/>, title:"Printing & Scanning"
        },
        {
            id:6, icon:<IoDesktopOutline/>, title:"IT support"
        },
        {
            id:7, icon:<GiOfficeChair/>, title:"On-site Reception"
        },
        {
            id:8, icon:<IoLogoGameControllerB/>, title:"Relaxation & Recreational Room"
        }
    ]
  return (
    <section id='features' className='bg-primaryBlack '>
        <div className='px-sm py-20 text-center container mx-auto text-white px:px-xl'>
        <p className='syne text-[40px] leading-[42px] font-medium'>Our Features</p>
            <div className='grid mt-10 gap-10 pl-[12%] pr-20 xl:grid-cols-4 '>
                {
                    offers.map(
                        offer=>
                        <div key={offer.id} className=' hover:cursor-pointer items-center text-white gap-4 flex'>
                            <div className='text-[22px] bg-primaryLightPurple text-primaryBlue rounded-lg p-3'>
                                {offer.icon}
                            </div>
                            <p className=' text-left text-[22px] font-medium syne'>{offer.title}</p>
                        </div>
                    )
                }
            </div>
            
        </div>
    </section>
  )
}
