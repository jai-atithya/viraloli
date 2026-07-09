import React from 'react'
import { Navbar } from '../../components/Navbar'
import { SecondaryNavbar } from '../../components/SecondaryNavbar'

export const TypingTest = () => {
    const secondaryNavItems = ["Practice", "Test"];
    return (
        <>
            <div className='flex flex-col justify-center h-screen w-screen p-[1rem]'>
                <div className='h-[10vh]'>
                    <Navbar />
                </div>
                <div className='flex-1 bg-slate-200 p-[1rem]'>
                    <SecondaryNavbar List={secondaryNavItems} />
                </div>
            </div>
        </>
    )
}
