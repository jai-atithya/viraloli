import React, { useState } from 'react'
import { Navbar } from '../components/Navbar'
import SampleLogo from '../../assets/tamilLogo.png'
import { Lock } from "lucide-react";
import { LeftPanel } from './components/LeftPanel';
import { MiddlePanel } from './components/MiddlePanel';
import { RightPanel } from './components/RightPanel';
import { useLanguage } from "../../context/LanguageContext";


export const Unit = () => {
  const [isOdd, setIsOdd] = useState(false);
  const { language } = useLanguage();
  console.log(language)

  return (
    <>
      <div className='flex flex-col h-[100vh] w-[100vw] p-[1rem] gap-[1rem] bg-white'>
        <div className='h-[10vh]'>
          <Navbar />
        </div>
        <div className="flex-1 flex gap-4 min-h-0">
          <div className="w-full lg:w-1/4 h-full">
            <LeftPanel />
          </div>

          <div className="flex-1 h-full">
            <MiddlePanel />
          </div>

          <div className="w-full lg:w-1/4 h-full">
            <RightPanel />
          </div>
        </div>
      </div>
    </>
  )
}