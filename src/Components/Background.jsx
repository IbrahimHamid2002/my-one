import React from 'react'

function Background() {
  return (
    <div className='fixed z-[2] w-full h-screen bg-zinc-800'>
        <div className='absolute flex justify-center top-10 w-full py-10 text-zinc-600 font-semibold'>Documents</div>
      <h1 className='absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] text-[10vw] text-zinc-900 leading-none tracking-tight font-semibold'>Docs.</h1>
    </div>
  )
}

export default Background
