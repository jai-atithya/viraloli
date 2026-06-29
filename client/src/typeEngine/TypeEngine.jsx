import React, { useState, useEffect } from 'react'
import { Engine } from './components/Engine'
import { Keyboard } from './components/Keyboard'
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
  const [pressedKey, setPressedKey] = useState(null);
  useEffect(() => {
    const handleKeyDown = (e) => {
      e.preventDefault();
      setPressedKey(e);
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  },[]);
  useEffect(() => {
    if (pressedKey) {
      console.log("Pressed Key:", pressedKey);

    }
  }, [pressedKey]);
  return (
    <>
      <div className='h-screen w-screen flex justify-center items-center'>
        <div className='h-[80%] w-[80%] flex flex-col justify-center items-center p-[1rem]'>
          <Engine lesson={lesson} allowNext={allowNext} pressedKey={pressedKey} setPressedKey={setPressedKey} />
          <Keyboard />
        </div>

      </div>
    </>
  )
}
