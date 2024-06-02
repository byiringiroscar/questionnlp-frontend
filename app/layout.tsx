'use client'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { UploadProvider } from '@/context/UploadContext';

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`flex flex-col h-screen ${inter.className}`}>
        <UploadProvider>
          <Navbar />
          {children}
          <ToastContainer />
        </UploadProvider>
      </body>
    </html>
  );
}
