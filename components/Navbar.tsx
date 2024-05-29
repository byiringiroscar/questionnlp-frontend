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

        <button className='px-5 py-2 gap-1 flex justify-center items-center border border-solid border-[black] rounded-lg'>
            <CiCirclePlus className='text-black font-bold' />
            <span className='text-sm font-semibold'>Upload file</span>
        </button>
    </nav>
  )
}

export default Navbar