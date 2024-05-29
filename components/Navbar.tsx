'use client';
import React, { useRef } from 'react'
import logo from '../public/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import { CiCirclePlus } from "react-icons/ci";
import { CiFileOn } from "react-icons/ci";

const Navbar = () => {
 const fileInputRef = useRef<HTMLInputElement>(null);

 const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      // Handle the uploaded files here
      console.log(files[0]);
    }
  }

  return (
    <nav className='flex justify-between padding-container items-center py-6 xl:px-28'>
        <Link href='/'>
            <Image src={logo} alt='logo' width={80} height={80} />
        </Link>

        <div className='flex gap-2 items-center'>
            <p>oscar-resume.pdf</p>
            <button 
            className='px-5 py-2 gap-1 flex justify-center items-center border border-solid border-[black] rounded-lg'
            onClick={handleButtonClick}
            >
                <CiCirclePlus className='text-black font-bold' />
                <span className='text-sm font-semibold'>Upload file</span>
            </button>
            <input 
            type="file" 
            ref={fileInputRef} 
            className="hidden" 
            onChange={handleFileChange} 
            />
        </div>
    </nav>
  )
}

export default Navbar