import React from 'react'
import Container from './Container'
import Logo from './Logo'
import { IoSearchOutline } from "react-icons/io5";
import { LuUser } from "react-icons/lu";
import { BsCart3 } from "react-icons/bs";


export default function Header() {
  return (
    <div className='bg-bodyColor h-20'>
      Header
      <Container className='h-full flex items-center md:gap-x-5 justify-between md:justify-start'>
        <Logo />

        {/* Search Bar */}
        <div className='w-full bg-white hidden md:flex items-center gap-x-1 border-[1px] border-lightText/50 rounded-full px-4 py-1.5 focus-within:border-orange-600 group'>
          <IoSearchOutline className="text-gray-500 group-focus-within:text-darkText duration-200" />
          <input type="text" name="" id=""
            placeholder='Search for Product'
            className=' placeholder:text-sm flex-1 outline-none' />
        </div>

        {/* Register to User */}
        <div className="headerDiv cursor-pointer">
        <LuUser className="text-2xl"/>
        <p className="text-sm font-semibold">Register/Login</p>
        </div>

        {/* Add to Card */}
        <div className="bg-black hover:bg-slate-950 rounded-full text-slate-100 hover:text-white flex items-center justify-center gap-x-1 px-3 py-1.5 border-[1px] border-black hover:border-orange-600 duration-200 relative">
        <BsCart3 className="text-2xl"/>
        <p className="text-sm font-semibold">$0.00</p>
        <span className='bg-white text-orange-500 rounded-full text-xs font-semibold absolute -right-2 -top-2 w-5 h-5 flex items-center justify-center shadow-xl shadow-black'>0</span>
        </div>
        </Container>
    </div>
  )
}
