import React from 'react'
import logo from '../public/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import { CiCirclePlus } from "react-icons/ci";

const Navbar = () => {
  return (
    <nav className='flex justify-between padding-container items-center py-6 xl:px-28'>
        <Link href='/'>
            <Image src={logo} alt='logo' width={80} height={80} />
        </Link>

        <div className="relative w-8 h-8 text-center overflow-hidden rounded-full right-0 bottom-0 bg-[#7269EF]">
            <input  type="file" name="image" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" />
            <CiCirclePlus className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 bg-white" />
        </div>



    </nav>
  )
}

export default Navbar