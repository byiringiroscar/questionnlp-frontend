'use client'

import React from 'react'
import Image from 'next/image'
import ailogo from '../public/bot.png'


const fetcher = async() => {
    const res = await fetch(`http://127.0.0.1:8000/question/get_all_question_answer`)
    const data = await res.json()
    return data
  }

const ChatList = () => {
  return (
    <div id='chatlist' className='h-[85%] w-full flex flex-col gap-10 overflow-y-scroll'>
            <div className='flex gap-5' id='user-message'>
                <div className="bg-[#B0ACE9] min-w-10 h-10 flex items-center justify-center rounded-full text-white">S</div>
                <p className='text-[15px] font-medium text-[#1B1F2A]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam commodi maxime corporis sit sint numquam, quisquam est recusandae iste! Cum impedit quibusdam inventore deserunt nesciunt in alias delectus sequi maiores numquam, quisquam maxime repellat, itaque reiciendis deleniti neque, molestias aspernatur!</p>
            </div>
            <div className='flex gap-5' id='bot-message'>
                <Image src={ailogo} alt='ailogo' width={100} height={100} className='min-w-10 h-11' />
                <p className='text-[15px] font-medium text-[#1B1F2A]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam commodi maxime corporis sit sint numquam, quisquam est recusandae iste! Cum impedit quibusdam inventore deserunt nesciunt in alias delectus sequi maiores numquam, quisquam maxime repellat, itaque reiciendis deleniti neque, molestias aspernatur!</p>
            </div>
    </div>
  )
}

export default ChatList