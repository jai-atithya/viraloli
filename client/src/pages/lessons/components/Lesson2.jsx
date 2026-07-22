import React from 'react'
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
export const Lesson2 = () => {
  return (
    <div className="w-full h-full p-[1rem] flex flex-col justify-center items-center">

      {lesson && <TypeEngine lesson={lesson} />}
    </div>
  )
}
