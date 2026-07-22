import React,{useState} from 'react'
import { Navbar } from '../components/Navbar'
import { HeatMap } from './components/HeatMap'
import { ProfileCard } from './components/ProfileCard'
export const Profile = () => {
    
    return (
        <>
            <div className='flex flex-col justify-center h-[100vh] w-[100vw] p-[1rem]'>
                <div className='h-[10vh]'>
                    <Navbar />
                </div>
                
                <div className='flex-1 w-full h-full p-[1rem] flex flex-col gap-[1rem]'>
                    <div className='w-full flex gap-[1rem]'>
                        <ProfileCard />
                    </div>
                    <HeatMap />
                </div>
            </div>
        </>
    )
}
