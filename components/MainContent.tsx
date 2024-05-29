import React from 'react'
import Image from 'next/image'
import ailogo from '../public/bot.png'

const MainContent = () => {
  return (
    <section className='padding-container w-screen h-screen pt-12 flex flex-col'>
        <div id='chatlist' className='h-[85%] w-full flex flex-col gap-10'>
            <div className='flex gap-5' id='user-message'>
                <div className="bg-[#B0ACE9] min-w-10 h-10 flex items-center justify-center rounded-full">S</div>
                <p className='text-[15px] font-medium text-[#1B1F2A]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam commodi maxime corporis sit sint numquam, quisquam est recusandae iste! Cum impedit quibusdam inventore deserunt nesciunt in alias delectus sequi maiores numquam, quisquam maxime repellat, itaque reiciendis deleniti neque, molestias aspernatur!</p>
            </div>
            <div className='flex gap-5' id='bot-message'>
                <Image src={ailogo} alt='ailogo' width={100} height={100} className='min-w-10 h-11' />
                <p className='text-[15px] font-medium text-[#1B1F2A]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam commodi maxime corporis sit sint numquam, quisquam est recusandae iste! Cum impedit quibusdam inventore deserunt nesciunt in alias delectus sequi maiores numquam, quisquam maxime repellat, itaque reiciendis deleniti neque, molestias aspernatur!</p>
            </div>
        </div>
        <div id='form' className='h-[15%] bg-slate-600'></div>
    </section>
  )
}

export default MainContent