import React from 'react'
import Image from 'next/image'
import ailogo from '../public/bot.png'
import { LuSendHorizonal } from "react-icons/lu";

const MainContent = () => {
  return (
    <section className='padding-container w-screen h-screen pt-12 flex flex-col overflow-hidden'>
        <div id='chatlist' className='h-[85%] w-full flex flex-col gap-10 overflow-y-scroll'>
            <div className='flex gap-5' id='user-message'>
                <div className="bg-[#B0ACE9] min-w-10 h-10 flex items-center justify-center rounded-full">S</div>
                <p className='text-[15px] font-medium text-[#1B1F2A]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam commodi maxime corporis sit sint numquam, quisquam est recusandae iste! Cum impedit quibusdam inventore deserunt nesciunt in alias delectus sequi maiores numquam, quisquam maxime repellat, itaque reiciendis deleniti neque, molestias aspernatur!</p>
            </div>
            <div className='flex gap-5' id='bot-message'>
                <Image src={ailogo} alt='ailogo' width={100} height={100} className='min-w-10 h-11' />
                <p className='text-[15px] font-medium text-[#1B1F2A]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam commodi maxime corporis sit sint numquam, quisquam est recusandae iste! Cum impedit quibusdam inventore deserunt nesciunt in alias delectus sequi maiores numquam, quisquam maxime repellat, itaque reiciendis deleniti neque, molestias aspernatur!</p>
            </div>
            <div className='flex gap-5' id='user-message'>
                <div className="bg-[#B0ACE9] min-w-10 h-10 flex items-center justify-center rounded-full">S</div>
                <p className='text-[15px] font-medium text-[#1B1F2A]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam commodi maxime corporis sit sint numquam, quisquam est recusandae iste! Cum impedit quibusdam inventore deserunt nesciunt in alias delectus sequi maiores numquam, quisquam maxime repellat, itaque reiciendis deleniti neque, molestias aspernatur!</p>
            </div>
            <div className='flex gap-5' id='bot-message'>
                <Image src={ailogo} alt='ailogo' width={100} height={100} className='min-w-10 h-11' />
                <p className='text-[15px] font-medium text-[#1B1F2A]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam commodi maxime corporis sit sint numquam, quisquam est recusandae iste! Cum impedit quibusdam inventore deserunt nesciunt in alias delectus sequi maiores numquam, quisquam maxime repellat, itaque reiciendis deleniti neque, molestias aspernatur!</p>
            </div>
            <div className='flex gap-5' id='user-message'>
                <div className="bg-[#B0ACE9] min-w-10 h-10 flex items-center justify-center rounded-full">S</div>
                <p className='text-[15px] font-medium text-[#1B1F2A]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam commodi maxime corporis sit sint numquam, quisquam est recusandae iste! Cum impedit quibusdam inventore deserunt nesciunt in alias delectus sequi maiores numquam, quisquam maxime repellat, itaque reiciendis deleniti neque, molestias aspernatur!</p>
            </div>
            <div className='flex gap-5' id='bot-message'>
                <Image src={ailogo} alt='ailogo' width={100} height={100} className='min-w-10 h-11' />
                <p className='text-[15px] font-medium text-[#1B1F2A]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam commodi maxime corporis sit sint numquam, quisquam est recusandae iste! Cum impedit quibusdam inventore deserunt nesciunt in alias delectus sequi maiores numquam, quisquam maxime repellat, itaque reiciendis deleniti neque, molestias aspernatur!</p>
            </div>
            <div className='flex gap-5' id='user-message'>
                <div className="bg-[#B0ACE9] min-w-10 h-10 flex items-center justify-center rounded-full">S</div>
                <p className='text-[15px] font-medium text-[#1B1F2A]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam commodi maxime corporis sit sint numquam, quisquam est recusandae iste! Cum impedit quibusdam inventore deserunt nesciunt in alias delectus sequi maiores numquam, quisquam maxime repellat, itaque reiciendis deleniti neque, molestias aspernatur!</p>
            </div>
            <div className='flex gap-5' id='bot-message'>
                <Image src={ailogo} alt='ailogo' width={100} height={100} className='min-w-10 h-11' />
                <p className='text-[15px] font-medium text-[#1B1F2A]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam commodi maxime corporis sit sint numquam, quisquam est recusandae iste! Cum impedit quibusdam inventore deserunt nesciunt in alias delectus sequi maiores numquam, quisquam maxime repellat, itaque reiciendis deleniti neque, molestias aspernatur!</p>
            </div>
        </div>
        <div id='form' className='h-[15%] flex items-center'>
            <form className='flex gap-5 w-full border border-solid border-[#E4E8EE] h-12 px-5 rounded-lg bg-[#F6F7F9]'>
                <input type='text' placeholder='Send a message ...' className='w-full rounded-full' />
                <button type='submit'>
                    <LuSendHorizonal className='w-14 h-6 text-[#222222]' />
                </button>
            </form>
        </div>
    </section>
  )
}

export default MainContent