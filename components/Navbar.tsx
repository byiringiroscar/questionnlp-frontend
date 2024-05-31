'use client';
import React, { useRef, useState } from 'react'
import logo from '../public/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import { CiCirclePlus } from "react-icons/ci";
import { CiFileOn } from "react-icons/ci";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThreeDots } from 'react-loader-spinner'
import { LineWave } from 'react-loader-spinner'


const uploadPDF = async (formData: FormData) => {
  const res = await fetch(`http://127.0.0.1:8000/question/file_upload`, {
    method: 'POST',
    body: formData,
  })

  const data = await res.json();
  return data;
}



const Navbar = () => {

  const [nameFile, setnameFile] = useState({is_name: false, file_name: ''});
  const [ loading, setLoading ] = useState(false)

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoading(true)
    const files = event.target.files;
    if (files) {
        setnameFile({
            is_name: true,
            file_name: files[0].name
        })
        const formData = new FormData();
        formData.append('file', files[0]);
        try{
          const uploadFile = await uploadPDF(formData)
          console.log(uploadFile.status)

          if(uploadFile.status === 'success'){
            setLoading(false)
            toast.success('File uploaded successfully', {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }
          else{
            setLoading(false)
            toast.error('File upload failed', {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            }
        }
        catch(err){
          setLoading(false)
          toast.error('File upload failed', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }  
    }
  }

  return (
    <nav className='flex justify-between padding-container items-center py-6 xl:px-28 shadow-[rgba(0,0,0,0.24)_0px_3px_8px]'>
        <Link href='/'>
            <Image src={logo} alt='logo' width={120} height={120} />
        </Link>

        <div className='flex gap-2 items-center'>
            {nameFile.is_name ? 
            (<div className='flex gap-1 items-center'>
                <div className='flex items-center justify-center px-[4px] py-[5px] border border-solid border-[#0FA958] rounded-lg '>
                <CiFileOn className='text-sm font-medium leading-[16.47px] text-left text-[#0FA958]' />
                </div>
                <span className='text-sm font-medium leading-[16.47px] text-left text-[#0FA958]'>{nameFile.file_name}</span>
            </div>)
            : 
            ('')}

            <button 
            className='px-3 lg:px-10 py-2 gap-1 flex justify-center items-center border border-solid border-[black] rounded-lg'
            onClick={handleButtonClick}
            disabled={loading}
            >
                  {loading ? (<LineWave
                      visible={true}
                      height="15"
                      width="15"
                      color="#4fa94d"
                      ariaLabel="line-wave-loading"
                      wrapperStyle={{}}
                      wrapperClass=""
                      firstLineColor=""
                      middleLineColor=""
                      lastLineColor=""
                      />): 
                      (
                  <>
                  <CiCirclePlus className='text-black font-bold h-5 w-5' />
                  <span className='hidden lg:block text-sm font-semibold'>Upload File</span>
                  </>
                     )
                    }
                
            </button>
            <input 
             type="file"  
             ref={fileInputRef} 
             className="hidden"
             onChange={handleFileChange}
             multiple={false}
             accept=".pdf"
             />
        </div>
    </nav>
  )
}

export default Navbar