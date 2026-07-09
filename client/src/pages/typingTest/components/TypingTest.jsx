import React from 'react'
import { Navbar } from '../../components/Navbar'

export const TypingTest = () => {
  return (
    <>
        <div className='flex flex-col justify-center h-screen w-screen p-[1rem]'>
            <div className='h-[10vh]'>
                <Navbar />
            </div>
            <div className='flex-1'>TypingTest</div>
        </div>
    </>
  )
}
