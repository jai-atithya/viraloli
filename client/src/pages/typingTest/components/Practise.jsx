import React, { useState, useEffect, useRef } from 'react'
import { TypeEngine } from '../../../typeEngine/TypeEngine'
const lesson = {
    sentence: "பாகம் தமிழ்",
    units: [
        {
            text: "பா", keys: [{ code: "KeyJ", altKey: false, ctrlKey: false, metaKey: false, shiftKey: false },
            { code: "KeyQ", altKey: false, ctrlKey: false, metaKey: false, shiftKey: false }]
        },
        { text: "க", keys: [{ code: "KeyH", altKey: false, ctrlKey: false, metaKey: false, shiftKey: false }] },
        {
            text: "ம்", keys: [{ code: "KeyK", altKey: false, ctrlKey: false, metaKey: false, shiftKey: false },
            { code: "KeyF", altKey: false, ctrlKey: false, metaKey: false, shiftKey: false }]
        },
        { text: " ", keys: [{ code: "Space", altKey: false, ctrlKey: false, metaKey: false, shiftKey: false }] },
        { text: "த", keys: [{ code: "KeyL", altKey: false, ctrlKey: false, metaKey: false, shiftKey: false }] },
        {
            text: "மி", keys: [{ code: "KeyK", altKey: false, ctrlKey: false, metaKey: false, shiftKey: false },
            { code: "KeyS", altKey: false, ctrlKey: false, metaKey: false, shiftKey: false }]
        },
        {
            text: "ழ்", keys: [{ code: "Slash", altKey: false, ctrlKey: false, metaKey: false, shiftKey: false },
            { code: "KeyF", altKey: false, ctrlKey: false, metaKey: false, shiftKey: false }]
        },
        { text: "ஃ", keys: [{ code: "KeyF", altKey: false, ctrlKey: false, metaKey: false, shiftKey: true }] },
    ],
};
export const Practise = () => {
    const inputRef = useRef(null);
    const [input, setInput] = useState("");
    useEffect(() => {
        console.log("Input changed:", input);
    }, [input]);
    return (
        <>
            <div className='w-full h-full p-[1rem] flex flex-col justify-center items-center'>
                <div className='flex justify-center items-center w-full gap-[1rem]'>
                    <input ref={inputRef} className='bg-white p-[0.5rem] border border-gray-300 rounded-[0.2rem] focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1' placeholder="Enter the text you want to practise..." />
                    <button className='bg-blue-500 text-white p-[0.5rem] rounded-[0.2rem] hover:bg-blue-600' onClick={() => setInput(inputRef.current.value)}>Start Practise</button>
                </div>
                <TypeEngine lesson={lesson} />
            </div>
        </>
    )
}
