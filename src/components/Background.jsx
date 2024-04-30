import React from 'react'

function Background() {
    return (
        <>
            <div className='absolute w-full h-full z-10'>
                <div className='text-zinc-600 flex justify-center py-10 text-2xl'>Documents.</div>
                <div className='text-zinc-900 text-[30vh] font-semibold tracking-tight leading-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 '>Docs.</div>
            </div>
        </>
    )
}

export default Background