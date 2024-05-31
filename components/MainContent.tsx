import React from 'react'
import { LuSendHorizonal } from "react-icons/lu";
import ChatList from './ChatList';

const MainContent = () => {
  return (
    <section className='padding-container w-screen h-screen pt-12 flex flex-col overflow-hidden'>
        <ChatList />
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