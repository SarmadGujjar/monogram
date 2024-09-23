import Image from 'next/image'
import React from 'react'
import monocore from '@/app/asset/monocore.webp'
import slider from '@/app/asset/slider.webp'
import orbitor from '@/app/asset/orbitor.webp'
import dial from '@/app/asset/dial.webp'
import essential from '@/app/asset/essential.webp'

const Diff2 = () => {
     return (
          <div className='bg-custom-purple w-full tracking-widest   text-white'>
               <main className='items-center flex flex-col gap-8 py-20'>
                    <h2 className='text-3xl md:text-4xl text-center font-semibold uppercase'>Next level productivity starts here.</h2>
                    <h2 className='text-3xl md:text-4xl font-semibold uppercase'>Meet each module</h2>
               </main>
               <div className='flex md:hidden flex-col items-center gap-20'>

                    <main className='flex flex-col gap-10 items-center'>
                         <Image className='h-96 w-56' alt='img' width={500} height={500} src={monocore} />
                         <div className='flex flex-col gap-5 justify-center px-2'>
                              <h2 className='text-3xl font-semibold uppercase'>Monogram Core</h2>
                              <span className='w-full text-custom-pink'>The Core powers and connects Creative Console to your PC or Mac.
                                   Fast and smooth performance with two mechanical keys for switching and previewing the consoles functionality</span>
                         </div>
                    </main>

                    <main className='flex flex-col gap-10 items-center'>
                         <Image className='h-80 w-80' alt='img' width={500} height={500} src={orbitor} />
                         <div className='flex flex-col gap-5 justify-center px-2'>
                              <h2 className='text-3xl font-semibold uppercase'>Orbitor</h2>
                              <span className='w-full text-custom-pink'>The Core powers and connects Creative Console to your PC or Mac.
                                   Fast and smooth performance with two mechanical keys for switching and previewing the consoles functionality</span>
                         </div>
                    </main>

                    <main className='flex flex-col gap-10 items-center'>
                         <Image className='h-96 w-56' alt='img' width={500} height={500} src={dial} />
                         <div className='flex flex-col gap-5 justify-center px-2'>
                              <h2 className='text-3xl font-semibold uppercase'>Dial</h2>
                              <span className='w-full text-custom-pink'>The Core powers and connects Creative Console to your PC or Mac.
                                   Fast and smooth performance with two mechanical keys for switching and previewing the consoles functionality</span>
                         </div>
                    </main>

                    <main className='flex flex-col gap-10 items-center'>
                         <Image className='h-96 w-56' alt='img' width={500} height={500} src={slider} />
                         <div className='flex flex-col gap-5 justify-center px-2'>
                              <h2 className='text-3xl font-semibold uppercase'>slider</h2>
                              <span className='w-full text-custom-pink'>The Core powers and connects Creative Console to your PC or Mac.
                                   Fast and smooth performance with two mechanical keys for switching and previewing the consoles functionality</span>
                         </div>
                    </main>

                    <main className='flex flex-col gap-10 items-center'>
                         <Image className='h-96 w-56' alt='img' width={500} height={500} src={essential} />
                         <div className='flex flex-col gap-5 justify-center px-2'>
                              <h2 className='text-3xl font-semibold uppercase'>essential keys</h2>
                              <span className='w-full text-custom-pink'>The Core powers and connects Creative Console to your PC or Mac.
                                   Fast and smooth performance with two mechanical keys for switching and previewing the consoles functionality</span>
                         </div>
                    </main>
               </div>

               {/* SCREEN */}

               <div className='md:flex hidden flex-col items-center gap-20'>

                    <main className='flex gap-10'>
                         <Image className='h-96 w-56' alt='img' width={500} height={500} src={monocore} />
                         <div className='flex flex-col gap-5 justify-center'>
                              <h2 className='text-3xl font-semibold uppercase'>Monogram Core</h2>
                              <span className='w-[400px] text-custom-pink'>The Core powers and connects Creative Console to your PC or Mac.
                                   Fast and smooth performance with two mechanical keys for switching and previewing the consoles functionality</span>
                         </div>
                    </main>

                    <main className='flex gap-10 items-center'>
                         <div className='flex flex-col gap-5 justify-center'>
                              <h2 className='text-3xl font-semibold uppercase'>Orbitor</h2>
                              <span className='w-[400px] text-custom-pink'>The Core powers and connects Creative Console to your PC or Mac.
                                   Fast and smooth performance with two mechanical keys for switching and previewing the consoles functionality</span>
                         </div>
                         <Image className='h-80 w-80' alt='img' width={500} height={500} src={orbitor} />
                    </main>

                    <main className='flex gap-10 items-center'>
                         <Image className='h-96 w-56' alt='img' width={500} height={500} src={dial} />
                         <div className='flex flex-col gap-5 justify-center'>
                              <h2 className='text-3xl font-semibold uppercase'>Dial</h2>
                              <span className='w-[400px] text-custom-pink'>The Core powers and connects Creative Console to your PC or Mac.
                                   Fast and smooth performance with two mechanical keys for switching and previewing the consoles functionality</span>
                         </div>
                    </main>

                    <main className='flex gap-10 items-center'>
                         <div className='flex flex-col gap-5 justify-center'>
                              <h2 className='text-3xl font-semibold uppercase'>slider</h2>
                              <span className='w-[400px] text-custom-pink'>The Core powers and connects Creative Console to your PC or Mac.
                                   Fast and smooth performance with two mechanical keys for switching and previewing the consoles functionality</span>
                         </div>
                         <Image className='h-96 w-56' alt='img' width={500} height={500} src={slider} />
                    </main>

                    <main className='flex gap-10 items-center'>
                         <Image className='h-96 w-56' alt='img' width={500} height={500} src={essential} />
                         <div className='flex flex-col gap-5 justify-center'>
                              <h2 className='text-3xl font-semibold uppercase'>essential keys</h2>
                              <span className='w-[400px] text-custom-pink'>The Core powers and connects Creative Console to your PC or Mac.
                                   Fast and smooth performance with two mechanical keys for switching and previewing the consoles functionality</span>
                         </div>
                    </main>
               </div>


               <main className='flex items-center flex-col py-16'>
                    <div className='flex'>
                         <Image className='w-28 h-28 md:h-[370px] md:w-[370px]' alt='img' width={350} height={200} src={orbitor} />
                         <Image className='w-28 h-28 md:w-[230px] md:h-[370px]' alt='img' width={200} height={200} src={monocore} />
                         <div className='transform rotate-90 pr-4 flex'>
                              <Image className='w-28 h-24 md:w-[180px] md:h-[370px]' alt='img' width={180} height={200} src={dial} />
                              <Image className='w-28 h-24 md:w-[180px] md:h-[370px]' alt='img' width={180} height={200} src={essential} />
                         </div>
                         <Image className='w-28 h-28 md:h-[370px] md:w-[370px]' alt='img' width={350} height={200} src={slider} />
                    </div>
                    <div className='flex flex-col items-center text-center gap-5 py-20'>
                         <h2 className='md:text-3xl text-2xl font-semibold'>Trust the Quality, Love the Look</h2>
                         <p className='w-full md:w-[900px] text-custom-pink tracking-widest'>Creatives spend hours editing and their tools should withstand every minute. That’s why each module is made from the highest quality materials including CNC-machined aluminum,
                              neodymium magnets and gold-plated connections that will not only look beautiful on your desk but will also last.</p>
                         <button className='bg-custom-pink px-5 py-2 rounded-full'>SHOP NOW</button>
                    </div>
               </main>
          </div>
     )
}

export default Diff2