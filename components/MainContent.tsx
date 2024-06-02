"use client"
import React, { useState, useRef, useCallback } from 'react';
import { LuSendHorizonal } from "react-icons/lu";
import ChatList from './ChatList';
import { LineWave } from 'react-loader-spinner'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import { useUpload } from '@/context/UploadContext';

interface ChatMessage {
  type: 'user' | 'bot';
  message: string;
}


const askQuestion = async (question: string) => {
  const res = await fetch(`http://127.0.0.1:8000/question/ask_question`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ question: question})
  });
  const data = await res.json();
  return data;
};


const MainContent = () => {
  const { uploading } = useUpload();
  const [ loading, setLoading ] = useState(false)
  const [chatList, setChatList] = useState<ChatMessage[]>([]);
  const [question, setQuestion] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: any) => {
    setQuestion(e.target.value);
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true)

    // Append user question to chatList
    setChatList(prevChatList => [...prevChatList,{ type: 'user', message: question }]);
    // Clear the input field
    if (inputRef.current) {
      inputRef.current.value = '';
    }
    try {
      const ask = await askQuestion(question)
      if(ask.status === 'success'){
        setLoading(false)
        setQuestion('');
        // Append bot answer to chatList
        setChatList(prevChatList => [...prevChatList,{ type: 'bot', message: ask.answer }]);
      }
    } catch (error) {
      setLoading(false)
      setQuestion('');
    }
  }

  const clearChatList = useCallback(() => {
    setChatList([]);
  }, [])


  return (
    <section className='padding-container w-screen h-screen pt-12 flex flex-col overflow-hidden'>
        <ChatList chatList={chatList} loading={loading} clearChatList={clearChatList} uploading={uploading} />
        <div id='form' className='h-[15%] flex items-center'>
            <form
            onSubmit={handleSubmit}
             className='flex gap-5 w-full border border-solid border-[#E4E8EE] h-12 px-5 rounded-lg bg-[#F6F7F9]'>
                <input
                onChange={handleChange}
                ref={inputRef}
                 type='text' name='question' placeholder='Send a message ...' 
                 className='w-full rounded-full focus:outline-none'
                  />
                <button type='submit'
                disabled={loading}
                >
                    {loading ? <LineWave color='#222222' height={20} width={50} /> : <LuSendHorizonal className='w-14 h-6 text-[#222222]' />}
                </button>
            </form>
        </div>
    </section>
  )
}

export default MainContent