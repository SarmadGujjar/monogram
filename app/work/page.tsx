import Image from 'next/image'
import React from 'react'
import work1 from '@/app/asset/work1.webp'
import Last from '../components/Last'
import Footer from '../components/Footer'
import sl7 from '@/app/asset/sl7.webp'
import sl8 from '@/app/asset/sl8.webp'

const page = () => {
  return (
    <div>
        <main>
            <Image className='w-full h-[700px]' alt='img' height={600} width={1000} src={work1} />
            <div className='flex flex-col items-center text-center bg-custom-purple text-white py-32 gap-10'>
                <h2 className='text-3xl font-semibold uppercase'>get started in 3 easy steps</h2>
               
                <span className='md:w-[700px] w-full'>Creative Console provides a fast and simple set up with magnetically connecting modules and a user-friendly app.</span>
                <Image className='w-96 h-72' alt='img' height={700} width={800} src={sl7} />
                <Image className='w-96 h-72' alt='img' height={700} width={800} src={sl8} />
            </div>
        </main>
        <Last />
        <Footer />
    </div>
  )
}

export default page