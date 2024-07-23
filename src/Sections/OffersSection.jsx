import React from 'react'

export default function OffersSection() {
    const offers = [
        {
            id:1,icon:"", title:"Flexible workspace", description:"Brains but my the in of life from the avoidable, be blonde letters rely on it small called."
        },
        {
            id:2, icon:"", title:"National network", description:"Brains but my the in of life from the avoidable, be blonde letters rely on it small called."
        },
        {
            id:3, icon:"", title:"National network", description:"Brains but my the in of life from the avoidable, be blonde letters rely on it small called."
        },
        {
            id:4, icon:"", title:"National network", description:"Brains but my the in of life from the avoidable, be blonde letters rely on it small called."
        }
    ]
  return (
    <div className='  '>
        <div className='px-sm py-20 grid gap-20 container mx-auto'>
            {
                offers.map(
                    offer=>
                    <div key={offer.id} className='text-white gap-4 grid'>
                        <img src={offer.icon} className=' bg-primaryBlue text-white p-5 max-w-10 rounded-lg'></img>
                        <p className='text-[28px] font-medium'>{offer.title}</p>
                    </div>
                )
            }
        </div>
    </div>
  )
}
