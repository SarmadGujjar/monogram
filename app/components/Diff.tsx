import Image from 'next/image'
import React from 'react'
import img1 from '@/app/asset/img1.webp'
import aside2 from '@/app/asset/aside2.webp'
import aside3 from '@/app/asset/aside3.webp'
import aside4 from '@/app/asset/aside4.webp'
import aside5 from '@/app/asset/aside5.webp'
import aside6 from '@/app/asset/aside6.webp'

const Diff = () => {
    return (
        <div className='flex'>
            <main className='flex flex-col w-full '>
                <div className='bg-custom-primary h-screen flex justify-end'>
                    <Image className='h-screen w-full' alt='img' height={500} width={500} src={img1} />
                </div>
                <div  className='bg-custom-pink flex flex-col gap-5 py-10 px-3 md:px-20 h-[320px]'>
                    <h2 data-aos="zoom-in" className='md:text-5xl text-3xl font-semibold text-custom-purple w-full md:w-80 leading-tight'>True Creative Freedom</h2>
                    <p data-aos="zoom-in" className='text-custom-primary w-full md:w-[500px] tracking-widest'>Combine modules in any shape or size and optimize for your personal workflow and style. Easily expand your console by adding or swapping modules as needed, without replacing the entire system.</p>
                </div>
                <div className='bg-custom-red  h-screen flex justify-end'>
                    <Image className='h-screen w-full' alt='img' height={500} width={500} src={aside3} />
                </div>
                <div className='bg-custom-pink flex flex-col gap-5 py-10 px-3 md:px-20 h-[320px]'>
                    <h2 data-aos="zoom-in" className='md:text-5xl text-3xl font-semibold text-custom-purple w-full md:w-80 leading-tight'>Plug & Play</h2>
                    <p data-aos="zoom-in" className='text-custom-primary w-full md:w-[500px] tracking-widest'>Creative Console comes pre-loaded with functionality for industry leading software. Plug in, select your app, and start creating. It’s that simple!</p>
                </div>
                <div className='bg-custom-green h-screen justify-end flex'>
                    <Image className='h-screen w-full' alt='img' height={500} width={500} src={aside2} />
                </div>
            </main>

            {/*  */}

            <main className='flex flex-col w-full'>
                <div className='bg-custom-red flex justify-start h-screen '>
                    <Image className='h-screen w-full' alt='img' height={500} width={500} src={aside4} />
                </div>
                <div  className='bg-custom-pink flex flex-col gap-5 py-10 px-3 md:px-20 h-[320px]'>
                    <h2 data-aos="zoom-in" className='md:text-5xl text-3xl font-semibold text-custom-purple w-full md:w-[500px] leading-tight'>Creative Expression Re-imagined</h2>
                    <p data-aos="zoom-in" className='text-custom-primary w-full md:w-[500px] tracking-widest'>Monograms tactile tools help you engage with your work in a more creative and expressive way. Immerse yourself in the creative process with intuitive control.</p>
                </div>
                <div className='bg-custom-green h-screen flex justify-start'>
                    <Image className='h-screen w-full' alt='img' height={500} width={500} src={aside5} />
                </div>
                <div className='bg-custom-pink flex flex-col gap-5 py-10 px-3 md:px-20 h-[320px]'>
                    <h2 data-aos="zoom-in" className='md:text-5xl text-3xl font-semibold text-custom-purple w-full md:w-96 leading-tight'>Faster and more Precise</h2>
                    <p data-aos="zoom-in" className='text-custom-primary w-full md:w-[500px] tracking-widest'>Creative Console puts your most used tools at your fingertips, cutting your editing time in half. Avoid wrist fatigue while gaining pinpoint precision.</p>
                </div>
                <div className='bg-custom-yellow h-screen flex justify-start'>
                    <Image className='h-screen w-full' alt='img' height={500} width={500} src={aside6} />
                </div>
            </main>
        </div>
    )
}

export default Diff