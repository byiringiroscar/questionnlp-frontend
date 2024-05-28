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

        <div className="relative w-8 h-8 leading-[33px] text-center overflow-hidden rounded-[50%] right-0 bottom-0 bg-[#7269EF]">
            <input type="file" name="image" className="absolute opacity-0 scale-[2]" id="upload-profile-input" />
            <h5>upload</h5>
        </div>

    </nav>
  )
}

export default Navbar