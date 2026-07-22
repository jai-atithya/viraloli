import React, { useState } from 'react'
import { Navbar } from '../components/Navbar'
import SampleLogo from '../../assets/tamilLogo.png'
import { Lock } from "lucide-react";
import { LeftPanel } from './components/LeftPanel';
import { MiddlePanel } from './components/MiddlePanel';
import { RightPanel } from './components/RightPanel';
export const Unit = () => {
  const [isOdd, setIsOdd] = useState(false);





  return (
    <>
      <div className='flex flex-col h-[100vh] w-[100vw] p-[1rem] gap-[1rem] bg-white'>
        <div className='h-[10vh]'>
          <Navbar />
        </div>
        <div className='w-full h-full flex  gap-[1rem]'>

          {/* LEFT PANEL */}
          <LeftPanel />

          {/* MIDDLE PANEL - path */}
          <MiddlePanel />


          {/* RIGHT PANEL */}
          <RightPanel />

        </div>
      </div>
    </>
  )
}