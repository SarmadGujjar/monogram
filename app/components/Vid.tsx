import Image from 'next/image'
import React from 'react'
import vid from '@/app/asset/vid.webp'

const Vid = () => {
    return (
        <div>
            <div className='bg-custom-purple '>
                <main className='flex flex-col items-center text-center text-custom-pink pt-40 gap-5'>
                    <h2 className='md:text-3xl text-2xl font-semibold'>Powerful Native Integrations</h2>
                    <p className='md:w-[900px] w-full text-custom-pink'>Integrates directly to your favorite software for the highest level of precision and control.                </p>
                </main>
                <div className='py-20 flex justify-center'>
                    <video controls width="600">
                        <source src="/video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

            </div>
            <main className='flex justify-center'>
               
                <Image className='w-full' alt='img' width={980} height={700} src={vid} />
            </main>
        </div>
    )
}

export default Vid