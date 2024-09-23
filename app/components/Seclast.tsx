import Image from 'next/image'
import React from 'react'
import prsn from '@/app/asset/prsn.webp'
import { FaLessThan } from "react-icons/fa6";
import { FaGreaterThan } from "react-icons/fa6";
import sl1 from '@/app/asset/sl1.webp'
import sl2 from '@/app/asset/sl2.webp'
import sl3 from '@/app/asset/sl3.webp'
import sl4 from '@/app/asset/sl4.webp'
import sl5 from '@/app/asset/sl5.webp'
import sl6 from '@/app/asset/sl6.webp'
import sl7 from '@/app/asset/sl7.webp'
import sl8 from '@/app/asset/sl8.webp'



const Seclast = () => {
  return (
    <div className='bg-custom-pink py-20'>
        <main className='flex flex-col gap-5 items-center text-center tracking-widest'>
            <h2 className='md:text-3xl text-2xl font-semibold text-custom-purple uppercase w-full md:w-[480px]'>Trusted by Photo and Video Professionals</h2>
            <div className='flex items-center gap-10 md:gap-32'>
                <i className='rounded-full p-4 text-lg bg-gray-200 text-custom-purple'><FaLessThan /></i>
                <Image className='rounded-full w-[150px] h-[150px]' alt='img' height={200} width={200} src={prsn} />
                <i className='rounded-full p-4 text-lg bg-gray-200 text-custom-purple'><FaGreaterThan /></i>
            </div>
            <p className='md:w-[900px] w-full text-custom-purple text-xl font-semibold leading-tight'>Tactile tools like Monogram will help us pave the way for new and interactive experiences where both technical and non-technical 
                crew members can easily and actively participate in the filmmaking process thereby streamlining production time.</p>
                <span className='text-sm px-2 text-gray-500'>Gary Marshall, Creative Technology Supervisor, Visual Effects Designer</span>
        </main>
        
        <main className='flex md:hidden flex-col justify-center items-center gap-2'>
          <h2 className='text-3xl font-bold py-5 text-custom-purple uppercase pt-20'>as seen on</h2>
          <div className='grid  grid-cols-2 gap-2 px-5'>
                <Image alt='img' width={300} height={270} src={sl1} />
                <Image alt='img' width={300} height={270} src={sl2} />
                <Image alt='img' width={300} height={270} src={sl3} />
                <Image alt='img' width={300} height={270} src={sl4} />
                <Image alt='img' width={300} height={270} src={sl5} />
                <Image alt='img' width={300} height={270} src={sl6} />
                <Image alt='img' width={452} height={250} src={sl7} />
                <Image alt='img' width={452} height={250} src={sl8} />
          </div>
        </main>
{/* SCREEN */}
        <main className='md:flex hidden flex-col justify-center items-center gap-2'>
          <h2 className='text-3xl font-bold py-5 text-custom-purple uppercase pt-20'>as seen on</h2>
          <div className='grid grid-cols-3 gap-2'>
                <Image alt='img' width={300} height={270} src={sl1} />
                <Image alt='img' width={300} height={270} src={sl2} />
                <Image alt='img' width={300} height={270} src={sl3} />
                <Image alt='img' width={300} height={270} src={sl4} />
                <Image alt='img' width={300} height={270} src={sl5} />
                <Image alt='img' width={300} height={270} src={sl6} />
          </div>
          <div className='flex gap-3'>
                <Image alt='img' width={452} height={250} src={sl7} />
                <Image alt='img' width={452} height={250} src={sl8} />
                </div>
        </main>
    </div>
  )
}

export default Seclast