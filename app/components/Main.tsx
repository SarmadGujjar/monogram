import Image from 'next/image'
import React from 'react'
import mainbg from '@/app/asset/mainbg.webp'



const Main = () => {
  return (
    <div>
      <main className='w-full relative'>
        <Image className='h-screen w-full' alt='bg' height={900} width={1000} src={mainbg} />
        <main className='flex items-center justify-center animate-in fade-in-200'>
          <div className='flex flex-col absolute top-56 items-center gap-5 justify-center'>
            <h2 className='md:text-4xl text-3xl font-semibold text-custom-pink uppercase '>Monogram</h2>
            <h1 className='md:text-6xl text-5xl font-semibold text-custom-pink text-center uppercase'>Creative Console</h1>
            <span className='text-lg text-custom-pink tracking-widest text-center px-2'>Simple. Powerful. Adaptable. A better way to create.</span>
            <div className='flex md:flex-row flex-col gap-2'>
              <button className='bg-custom-pink uppercase px-5 py-2 rounded-full'>watch the video</button>
              <button className='bg-custom-pink uppercase px-10 py-2 rounded-full'>shop now</button>
            </div>
          </div>
        </main>
      </main>
    </div>
  )
}

export default Main