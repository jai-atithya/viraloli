import React,{useState} from 'react'
import { Navbar } from '../components/Navbar'

export const Profile = () => {
    
    return (
        <>
            <div className='flex flex-col justify-center h-[100vh] w-[100vw] p-[1rem]'>
                <div className='h-[10vh]'>
                    <Navbar />
                </div>
                
                <div className='flex-1 w-full h-full p-[1rem]'>
                    Profile
                    <HeatMap />
                </div>
            </div>
        </>
    )
}
