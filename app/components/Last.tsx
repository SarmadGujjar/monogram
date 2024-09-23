import Image from 'next/image'
import React from 'react'
import last from '@/app/asset/last.webp'

const Last = () => {
  return (
    <div>
          <main className='flex items-center justify-center relative tracking-widest'>
                <Image className='w-full h-screen' alt='img' width={1000} height={900} src={last} />
                <div className='flex justify-center '>
                    <div className='absolute flex items-start right-5 md:right-40 gap-4 flex-col px-5 md:px-20'>
                        <h2 className='w-full md:text-3xl font-semibold uppercase text-custom-primary'>Experience it Yourself</h2>
                        <p className='md:w-[460px] w-full'>Level up your productivity with high-quality tools trusted by creative professionals.</p>
                        <button className='bg-custom-purple text-white rounded-full px-4 uppercase py-2 items-center flex'>Shop now</button>
                    </div>
                </div>
            </main>
    </div>
  )
}

export default Last