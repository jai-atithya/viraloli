import React, { useState } from 'react'
import { Navbar } from '../components/Navbar'
import { SecondaryNavbar } from '../components/SecondaryNavbar';
import { Login } from './components/Login';
import { Signup } from './components/Signup';

export const Auth = () => {
    const [current, setCurrent] = useState(0);
    const secondaryNavItems = ["Login", "Signup"];
    return (
        <>
            <div className='flex flex-col justify-center h-[100vh] w-[100vw] p-[1rem]'>
                <div className='h-[10vh]'>
                    <Navbar />
                </div>
                <div className='p-[1rem]'>
                    <SecondaryNavbar List={secondaryNavItems} current={current} setCurrent={setCurrent} />
                </div>
                <div className='flex-1 w-full h-full p-[1rem]'>
                    {current === 0 && (
                        <Login />
                    )}
                    {current === 1 && (
                        <Signup />
                    )}
                </div>
            </div>
        </>
    )
}
