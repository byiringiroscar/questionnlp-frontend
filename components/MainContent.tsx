import React from 'react'

const MainContent = () => {
  return (
    <section className='padding-container w-screen h-screen pt-12 flex flex-col'>
        <div id='chatlist' className='h-[85%] bg-green-600'></div>
        <div id='form' className='h-[15%] bg-slate-600'></div>
    </section>
  )
}

export default MainContent