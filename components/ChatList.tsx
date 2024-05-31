'use client'

import React, { useState, useEffect } from 'react'
import useSWR from 'swr'
import Image from 'next/image'
import ailogo from '../public/bot.png'
import { ThreeDots } from 'react-loader-spinner'


const fetcher = async() => {
    const res = await fetch(`http://127.0.0.1:8000/question/get_all_question_answer`)
    const data = await res.json()
    return data
  }


const ChatList = () => {
const { data, error, mutate, isLoading }  = useSWR('home', fetcher)
if (isLoading) return <ThreeDots color='#B0ACE9' height={50} width={50} />
if (error) return <div>Failed to load</div>

console.log(data)

  return (
    <div id='chatlist' className='h-[85%] w-full flex flex-col gap-10 overflow-y-scroll'>
            {data.map((ele: any, index: number) => {
                return (
                    <>
                    <div className='flex gap-5' id='user-message'>
                        <div className="bg-[#B0ACE9] min-w-10 h-10 flex items-center justify-center rounded-full text-white">S</div>
                        <p className='text-[15px] font-medium text-[#1B1F2A]'>{ele.question}</p>
                    </div>
                    <div className='flex gap-5' id='bot-message'>
                        <Image src={ailogo} alt='ailogo' width={50} height={50}  />
                        <p className='text-[15px] font-medium text-[#1B1F2A]'>{ele.answer}</p>
                    </div>
                    </>
                )
                
            })}
    </div>
  )
}

export default ChatList