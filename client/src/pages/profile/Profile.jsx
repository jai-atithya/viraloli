import React,{useState} from 'react'
import { Navbar } from '../components/Navbar'
import { HeatMap } from './components/HeatMap'
import { DasdBoard} from './components/DashBoard'
export const Profile = () => {
    
    return (
        <>
            <div className='flex flex-col justify-center h-[100vh] w-[100vw] p-[1rem]'>
                <div className='h-[10vh]'>
                    <Navbar />
                </div>
                
                <div className='flex-1 w-full h-full p-[1rem]'>
                    <DasdBoard/>
                    <HeatMap />
                </div>
            </div>
        </>
    )
}
