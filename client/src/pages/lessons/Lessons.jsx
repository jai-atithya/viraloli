import React from 'react'
import { useParams } from 'react-router-dom'
import { useLanguage } from "../../context/LanguageContext";
import { Lesson1 } from "./components/Lesson1";
import { Lesson2 } from "./components/Lesson2";
import { Lesson3 } from "./components/Lesson3";
import { Lesson4 } from "./components/Lesson4";
import { Lesson5 } from "./components/Lesson5";
import { Lesson6 } from "./components/Lesson6";
import { Lesson7 } from "./components/Lesson7";
import { Navbar } from '../components/Navbar';

export const Lessons = () => {
  const { unitId, lessonNumber } = useParams();
  const { language } = useLanguage();
  console.log(unitId, lessonNumber)
  return (
    <>

      <div className='flex flex-col h-[100vh] w-[100vw] p-[1rem] gap-[1rem] bg-white'>
        <div className='h-[10vh]'>
          <Navbar />
        </div>
        <div>
          {lessonNumber == 1 && (<Lesson1 />)}
          {lessonNumber == 2 && (<Lesson2 />)}
          {lessonNumber == 3 && (<Lesson3 />)}
          {lessonNumber == 4 && (<Lesson4 />)}
          {lessonNumber == 5 && (<Lesson5 />)}
          {lessonNumber == 6 && (<Lesson6 />)}
          {lessonNumber == 7 && (<Lesson7 />)}

        </div>
      </div>
    </>

  )
}
