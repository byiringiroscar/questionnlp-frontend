'use client'

import React, { useState, useEffect, useRef } from 'react'
import useSWR from 'swr'
import Image from 'next/image'
import ailogo from '../public/bot.png'
import { ThreeDots } from 'react-loader-spinner'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

// create prop for chatList

interface ChatMessage {
  type: 'user' | 'bot';
  message: string;
}

interface ChatListProps {
  chatList: ChatMessage[];
  loading: boolean;
}



const fetcher = async() => {
    const res = await fetch(`http://127.0.0.1:8000/question/get_all_question_answer`)
    const data = await res.json()
    return data
  }


  const ChatList: React.FC<ChatListProps> = ({ chatList, loading }) => {
    const { data, error, mutate, isLoading }  = useSWR('home', fetcher)
    const chatListRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
      // Scroll to the bottom of the chat list
      if (chatListRef.current) {
        chatListRef.current.scrollTop = chatListRef.current.scrollHeight;
      }
    }, [chatList]);
    if (isLoading) {
      // Render skeleton loading UI while data is being fetched
      return (
        <div id='chatlist' className='h-[85%] w-full flex flex-col gap-10 overflow-y-scroll'>
          <Skeleton height={50} count={3} />
        </div>
      );
    }
    if (error) {
      return (
        <div id='chatlist' className='h-[85%] w-full flex flex-col gap-10 overflow-y-scroll'>
          <p>Error fetching data</p>
        </div>
      );
    }
      return (
        <div id='chatlist' ref={chatListRef} className='h-[85%] w-full flex flex-col gap-10 overflow-y-scroll'>
          {data.map((ele: any, index: number) => (
            <React.Fragment key={index}>
              <div className='flex gap-5' id='user-message'>
                <div className="bg-[#B0ACE9] min-w-10 h-10 flex items-center justify-center rounded-full text-white">S</div>
                <p className='text-[15px] font-medium text-[#1B1F2A]'>{ele.question}</p>
              </div>
              <div className='flex gap-5' id='bot-message'>
                <Image src={ailogo} alt='ailogo' width={50} height={50} className='h-[45px] w-[45px]' />
                <p className='text-[15px] font-medium text-[#1B1F2A]'>{ele.answer}</p>
              </div>
            </React.Fragment>
          ))}
          {chatList.map((ele, index) => (
            <React.Fragment key={`chat-${index}`}>
              {ele.type === 'user' ? (
                <div className='flex gap-5' id='user-message'>
                  <div className="bg-[#B0ACE9] min-w-10 h-10 flex items-center justify-center rounded-full text-white">S</div>
                  <p className='text-[15px] font-medium text-[#1B1F2A]'>{ele.message}</p>
                </div>
              ) : (
                <div className='flex gap-5' id='bot-message'>
                  <Image src={ailogo} alt='ailogo' width={50} height={50} className='h-[45px] w-[45px]' />
                  <p className='text-[15px] font-medium text-[#1B1F2A]'>{ele.message}</p>
                </div>
              )}
            </React.Fragment>
          ))}
          {loading && (
            <Skeleton height={50} count={1} />
          )}
        </div>
      )
    }

export default ChatList