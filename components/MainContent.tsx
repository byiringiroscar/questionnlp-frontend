import React from 'react'

const MainContent = () => {
  return (
    <section className='padding-container w-screen h-screen pt-12 flex flex-col'>
        <div id='chatlist' className='h-[85%] w-full'>
            <div className='flex gap-5' id='user-message'>
                <div className="bg-[#B0ACE9] min-w-10 h-10 flex items-center justify-center rounded-full">S</div>
                <p className='text-[15px] font-medium text-[#1B1F2A]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam commodi maxime corporis sit sint numquam, quisquam est recusandae iste! Cum impedit quibusdam inventore deserunt nesciunt in alias delectus sequi maiores numquam, quisquam maxime repellat, itaque reiciendis deleniti neque, molestias aspernatur!</p>
            </div>
            <div className='flex gap-5' id='bot-message'></div>
        </div>
        <div id='form' className='h-[15%] bg-slate-600'></div>
    </section>
  )
}

export default MainContent