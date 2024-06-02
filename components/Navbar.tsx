'use client';
import React, { useRef, useState, useEffect } from 'react'
import logo from '../public/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import { CiCirclePlus } from "react-icons/ci";
import { CiFileOn } from "react-icons/ci";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThreeDots } from 'react-loader-spinner'
import { LineWave } from 'react-loader-spinner'
import { mutate } from 'swr';
import { useUpload } from '@/context/UploadContext';

// Props for Navbar
interface NavbarProps {
  setUploading: (uploading: boolean) => void;
}

const uploadPDF = async (formData: FormData) => {
  const res = await fetch(`http://127.0.0.1:8000/question/file_upload`, {
    method: 'POST',
    body: formData,
  })

  const data = await res.json();
  return data;
}

const Navbar = () => {
  const { setUploading } = useUpload();
  const [nameFile, setnameFile] = useState({is_name: false, file_name: ''});
  const [loading, setLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(true)


  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://127.0.0.1:8000/question/latest_fileupload');
        const data = await res.json();
        setIsLoading(false);
        if(data.warning === 'File not found'){
          console.log('not found')
          setnameFile({ is_name: false, file_name: '' });
        }
        setnameFile({ is_name: true, file_name: data.file_name });
      } catch (error) {
        setIsLoading(false);
        console.error('Error fetching latest file:', error);
      } finally {
        setIsLoading(false); // Set loading to false once fetching is done (whether successful or not)
      }
    };

    fetchData();
  }, []);

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
            // Trigger data re-fetch
            mutate('home');
            setUploading(true); // Set uploading state to true
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
        {isLoading ? (
          <LineWave
            visible={true}
            height='80'
            width='90'
            color='#4fa94d'
            ariaLabel='line-wave-loading'
            wrapperStyle={{}}
            wrapperClass=''
            firstLineColor=''
            middleLineColor=''
            lastLineColor=''
          />
        ) : nameFile.is_name ? (
          <div className='flex gap-1 items-center'>
            {nameFile.file_name && ( // Conditionally render if file name is present
              <div className='flex items-center justify-center px-[4px] py-[5px] border border-solid border-[#0FA958] rounded-lg '>
                <CiFileOn className='text-sm font-medium leading-[16.47px] text-left text-[#0FA958]' />
              </div>
            )}
            {nameFile.file_name && ( // Conditionally render if file name is present
              <span className='text-sm font-medium leading-[16.47px] text-left text-[#0FA958]'>{nameFile.file_name}</span>
            )}
          </div>
        ) : (
          ''
        )}

        <button
          className='px-3 lg:px-10 py-2 gap-1 flex justify-center items-center border border-solid border-[black] rounded-lg'
          onClick={handleButtonClick}
          disabled={loading}
        >
          {loading ? (
            <LineWave
              visible={true}
              height='30'
              width='60'
              color='#4fa94d'
              ariaLabel='line-wave-loading'
              wrapperStyle={{}}
              wrapperClass=''
              firstLineColor=''
              middleLineColor=''
              lastLineColor=''
            />
          ) : (
            <>
              <CiCirclePlus className='text-black font-bold h-5 w-5' />
              <span className='hidden lg:block text-sm font-semibold'>Upload File</span>
            </>
          )}
        </button>
        <input type='file' ref={fileInputRef} className='hidden' onChange={handleFileChange} multiple={false} accept='.pdf' />
      </div>
    </nav>
  )
}

export default Navbar