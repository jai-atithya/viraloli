import React from 'react'
import { Engine } from './components/Engine'
const lesson = {
    sentence: "பாகம் தமிழ்",
    units: [
        { text: "பா", keys: ["KeyJ", "KeyQ"] },
        { text: "க", keys: ["KeyH"] },
        { text: "ம்", keys: ["KeyK", "KeyF"] },
        { text: " ", keys: ["Space"] },
        { text: "த", keys: ["KeyL"] },
        { text: "மி", keys: ["KeyK", "KeyS"] },
        { text: "ழ்", keys: ["Slash", "KeyF"] },
    ],
};
export const TypeEngine = () => {
  return (
    <>
      <div className='h-screen w-screen flex justify-center items-center'>
        <div className='h-[50%] w-[50%] flex justify-center items-center bg-yellow-500'>
          <Engine lesson={lesson} />
        </div>
      </div>
    </>
  )
}
