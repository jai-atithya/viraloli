import React, { useState, useEffect } from 'react'
import { Engine } from './components/Engine'
import { Keyboard } from './components/Keyboard'

const MODIFIER_CODES = ["ShiftLeft", "ShiftRight", "ControlLeft", "ControlRight", "AltLeft", "AltRight", "MetaLeft", "MetaRight"];
export const TypeEngine = ({lesson}) => {
  const [allowNext] = useState(true);
  const [showKeyboard, setShowKeyboard] = useState(true); 
  const [pressedKey, setPressedKey] = useState(null);
  const [currentUnit, setCurrentUnit] = useState(0);
  const [currentKey, setCurrentKey] = useState(0);
  
  const [startTime, setStartTime] = useState(null);
  const [correctKeyStrokes, setCorrectKeyStrokes] = useState(0);
  const [incorrectKeyStrokes, setIncorrectKeyStrokes] = useState(0);
  const [ , setReRender] = useState(0);

  const [unitsState, setUnitsState] = useState(
    lesson.units.map(() => ({
      status: "pending",
      progress: 0,
    }))
  );

  const totalKeyStrokes = correctKeyStrokes + incorrectKeyStrokes;
  const minutes = startTime ? (Date.now() - startTime) / 60000: 0;
  const cpm = minutes>0?Math.round(correctKeyStrokes/minutes):0;
  const wpm = minutes>0?Math.round((correctKeyStrokes/5)/minutes):0;
  const accuracy = totalKeyStrokes>0?Math.round((correctKeyStrokes/totalKeyStrokes)*100):100;
  
  useEffect(()=>{
    if(!startTime) return;
    if(currentUnit >= lesson.units.length) return; 
    const interval=setInterval(()=>{
      setReRender(prev=>prev+1);
    },1000);
    return()=> clearInterval(interval);
  },[startTime, currentUnit]);

  useEffect(() => {
    if(currentUnit >= lesson.units.length) return; 
    const handleKeyDown = (e) => {
      if (MODIFIER_CODES.includes(e.code)) return;
      e.preventDefault();
      setPressedKey({
        code: e.code,
        altKey: e.altKey,
        ctrlKey: e.ctrlKey,
        metaKey: e.metaKey,
        shiftKey: e.shiftKey,
      });
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [startTime, currentUnit]);

  useEffect(() => {
    if (pressedKey) {
      console.log("Pressed Key:", pressedKey);

    }
  }, [pressedKey]);
  return (
    <>
      <div className='flex justify-center items-center'>
        <div className='w-[70vw] flex flex-col justify-center items-center p-[1rem]'>
          <Engine
            lesson={lesson}
            allowNext={allowNext}
            pressedKey={pressedKey}
            setPressedKey={setPressedKey}
            currentUnit={currentUnit}
            setCurrentUnit={setCurrentUnit}
            currentKey={currentKey}
            setCurrentKey={setCurrentKey}
            unitsState={unitsState}
            setUnitsState={setUnitsState}
            startTime={startTime}
            setStartTime={setStartTime}
            setCorrectKeyStrokes={setCorrectKeyStrokes}
            setIncorrectKeyStrokes={setIncorrectKeyStrokes}
          />
          <div className='flex w-full justify-between'>
            <div>WPM:  {wpm}</div>
            <div>CPM:  {cpm}</div>
            <div>Accuracy:  {accuracy}</div>
          </div>
          {showKeyboard && (
            <Keyboard
              lesson={lesson}
              allowNext={allowNext}
              pressedKey={pressedKey}
              setPressedKey={setPressedKey}
              currentUnit={currentUnit}
              setCurrentUnit={setCurrentUnit}
              currentKey={currentKey}
              setCurrentKey={setCurrentKey}
            />
          )}
        </div>

      </div>
    </>
  )
}
