"use client"
// import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { FaCameraRetro } from "react-icons/fa";
import { useEffect, useState } from "react";
// import AOS from 'aos';
import AOS from 'aos'
import 'aos/dist/aos.css';


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;

  
}>) {

  useEffect(() =>{
    AOS.init();
  }, []);


  const [open, setOpen] = useState<boolean>();
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="bg-custom-purple p-4 text-white fixed  w-full z-50 mt-3 flex md:hidden justify-between">
          <div className="uppercase flex gap-2"><i className="text-white text-3xl"><FaCameraRetro /></i>monogram</div>
          <button onClick={() => setOpen(true)} className="text-xl">MENU</button>
        </nav>
        {open ? (
          <ul className="flex bg-custom-purple text-white flex-col gap-2 pt-20 pb-2 font-extralight px-3">
            <div className="flex justify-between">
              <li className="hover:text-custom-pink uppercase"><a href="/">HOw it works</a></li>
              <button onClick={() => setOpen(false)} className="text-xl bg-red-500 text-white rounded-full px-2 ">*</button>
            </div>
            <li className="hover:text-custom-pink uppercase"><a href="/work">work flows</a></li>
            <li className="hover:text-custom-pink uppercase"><a href="/download">download</a></li>
            <li className="hover:text-custom-pink uppercase"><a href="/blog">blog</a></li>
            <li className="hover:text-custom-pink uppercase"><a href="suport">support</a></li>
            <li className="hover:text-custom-pink uppercase"><a href="/shop">shop</a></li>
            <li className="hover:text-custom-pink uppercase"><a href="/gbp">gbp</a></li>
          </ul>

        ) : null}


        {/* SCREEN */}
        <nav className="bg-custom-purple p-4 text-white fixed  w-full z-50 mt-3 md:flex hidden justify-between">
          <div className="uppercase flex gap-2"><i className="text-white text-3xl"><FaCameraRetro /></i>monogram</div>
          <ul className="flex gap-10 font-extralight px-3">
            <li className="hover:text-custom-pink uppercase"><a href="/">HOw it works</a></li>
            <li className="hover:text-custom-pink uppercase"><a href="/work">work flows</a></li>
            <li className="hover:text-custom-pink uppercase"><a href="/download">download</a></li>
            <li className="hover:text-custom-pink uppercase"><a href="/blog">blog</a></li>
            <li className="hover:text-custom-pink uppercase"><a href="/suport">support</a></li>
            <li className="hover:text-custom-pink uppercase"><a href="/shop">shop</a></li>
            <li className="hover:text-custom-pink uppercase"><a href="/gbp">gbp</a></li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
