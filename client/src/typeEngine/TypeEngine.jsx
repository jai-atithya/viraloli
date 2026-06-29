import React, {useState} from 'react'
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
    const [allowNext] = useState(true);
  return (
    <>
      <div className='h-screen w-screen flex justify-center items-center'>
        <div className='h-[80%] w-[80%] flex justify-center items-center p-[1rem]'>
          <Engine lesson={lesson} allowNext={allowNext} />
        </div>
      </div>
    </>
  )
}
