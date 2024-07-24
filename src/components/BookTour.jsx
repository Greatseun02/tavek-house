import Modal from "./Modal";
import { useState } from "react";
import React from 'react'



export default function BookTour({showModal, setShowModal}) {
   const [name, setName] = useState("")
   const [phone, setPhone] = useState("")
   const [email, setEmail] = useState("")
   const [location, setLocation] = useState("")
   const [submit, setSubmit] = useState(false)

   function handleSubmit(event){
    event.preventDefault()
    setName("")
    setPhone("")
    setEmail("")
    setLocation("--")
    setSubmit(true)
    setTimeout(
        ()=>{
            setSubmit(false)
        },1000
    )
   }
  return (
    <Modal showModal={showModal} setShowModal={setShowModal}>
      <h2 className="font-bold syne text-xl mb-2 text-primaryBlue ">
            Get Started
        </h2>
        <form onSubmit={handleSubmit} className="grid gap-3">
        <h2></h2>
            <div className="grid gap-1">
                <label className="font-medium">Name</label>
                <input 
                    className="px-1 focus:outline-primaryBlue border-primaryBlack border-2 h-9"  
                    name="name" 
                    value={name} 
                    onChange={(event)=>{setName(event.target.value)}} 
                />
            </div>

            <div className="grid gap-1">
                <label className="font-medium">Email</label>
                <input 
                required
                    className="px-1 focus:outline-primaryBlue border-primaryBlack border-2 h-9"  
                    name="email" 
                    value={email} 
                    onChange={(event)=>{setEmail(event.target.value)}} 
                />
            </div>
            <div className="grid gap-1">
                <label className="font-medium">Phone Number</label>
                <input
                required 
                    className="px-1 focus:outline-primaryBlue border-primaryBlack border-2 h-9"  
                    name="phone" 
                    value={phone} 
                    type="tel"
                    onChange={(event)=>{setPhone(event.target.value)}} 
                />
            </div>

            <div className="grid gap-1">
                <label className="font-medium">Location</label>
                <select required onChange={(event)=>{setLocation(event.target.value)}}  name="location" value={location} className="border-primaryBlack border-2 focus:border-primaryBlue h-10 px-2">
                    <option>--</option>
                    <option>Lagos</option>
                    <option>Abuja</option>
                    <option>Ibadan</option>
                    <option>Portharcourt</option>
                    <option>Abeokuta</option>
                </select>
            </div>
            <p className="text-xs font-medium text-[#555555] ">We will mail you our time slots.</p>
            <div>
                <button className=" bg-primarySolidPurple rounded font-semibold text-white  text-lg w-full py-3" type="submit">Submit</button>
            </div>
            
        </form>
        {submit && <p className="font-bold mt-2">Thank you for your submission.</p>}
    </Modal>
  )
}
