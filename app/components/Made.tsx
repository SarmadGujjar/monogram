import Image from 'next/image'
import React from 'react'
import made1 from '@/app/asset/made1.webp'
import { FaLessThan } from "react-icons/fa6";
import { FaGreaterThan } from "react-icons/fa6";

const Made = () => {
    return (
        <div className='bg-custom-pink py-20 gap-10 flex flex-col'>
            <main className='flex flex-col items-center text-center gap-5 tracking-widest'>
                <h2 className='md:text-3xl text-2xl font-semibold uppercase text-custom-primary'>made just for you</h2>
                <p className='md:w-[800px] w-full'>Creative Console was designed with your workflow in mind. Pre-loaded functionality and direct software
                    integrations perfectly combine to improve editing and increase efficiency. Select your workflow below to explore now.
                </p>
            </main>
            <main className='flex items-center justify-center relative tracking-widest'>
                 <i className='rounded-full md:flex hidden p-4 text-lg bg-gray-200 text-custom-purple'><FaLessThan /></i>
                <Image className='md:w-[980px] w-full h-full md:h-[370px]' alt='img' width={1000} height={500} src={made1} />
                <i className='rounded-full p-4 md:flex hidden text-lg bg-gray-200 text-custom-purple'><FaGreaterThan /></i>
                <div className='flex justify-center items-center'>
                    <div className='absolute flex items-center right-2 md:left-72 left-2 md:right-[330px] gap-4 flex-col bg-white px-2 md:px-20 py-10'>
                        <h2 className='md:text-3xl text-2xl font-semibold uppercase text-custom-primary text-center'>video editing and color</h2>
                        <p className='md:w-[700px] w-full text-center'>Creative Console was designed with your workflow in mind. Pre-loaded functionality and direct software.  Select your workflow below to explore now.</p>
                        <button className='bg-custom-purple text-white rounded-full px-4 py-2 items-center flex'>Learn More</button>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Made