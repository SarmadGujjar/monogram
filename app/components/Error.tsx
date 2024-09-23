import React from 'react'

const Error = () => {
  return (
    <div>
        <main className='bg-gray-200 md:p-40 p-10 h-screen'>
<div className='flex flex-col items-center gap-10'>
    <h2 className='md:text-5xl text-3xl font-bold'>error!</h2>
    <span className='md:text-5xl text-3xl font-semibold uppercase'>Something went wrong.</span>
    <p className='text-gray-500 text-lg'>This page didnot load Google Maps correctly. See the JavaScript console for technical details.</p>
</div>
        </main>
    </div>
  )
}

export default Error