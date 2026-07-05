import React from 'react'
import { Hand } from './Hand'
export const Keyboard = ({
    lesson,
    allowNext,
    pressedKey,
    setPressedKey,
    currentUnit,
    setCurrentUnit,
    currentKey,
    setCurrentKey
}) => {
    const getColor = (key) => {
        if (currentUnit < lesson.units.length && lesson.units[currentUnit].keys[currentKey] === key) {
            return "#2b93fb";
        }
        return "#e5e7eb";
    };
    return (
        <div className='relative w-full aspect-[30/10] flex justify-center items-center'>
            <div className='w-full aspect-[30/10] grid grid-cols-30 grid-rows-5 gap-[0.2rem]'>

                <div className='col-span-2 flex flex-col justify-center items-center text-[1vw]' style={{ backgroundColor: getColor("Backquote") }}>
                    <div className='flex justify-center items-center w-full flex-1'>~</div>
                    <div className='flex justify-center items-center w-full flex-1'>`</div>
                </div>
                <div className='col-span-2 flex flex-col justify-center items-center text-[1vw]' style={{ backgroundColor: getColor("Digit1") }}>
                    <div className='flex justify-center items-center w-full flex-1'>!</div>
                    <div className='flex justify-center items-center w-full flex-1'>1</div>
                </div>
                <div className='col-span-2 flex flex-col justify-center items-center text-[1vw]' style={{ backgroundColor: getColor("Digit2") }}>
                    <div className='flex justify-center items-center w-full flex-1'>@</div>
                    <div className='flex justify-center items-center w-full flex-1'>2</div>
                </div>
                <div className='col-span-2 flex flex-col justify-center items-center text-[1vw]' style={{ backgroundColor: getColor("Digit3") }}>
                    <div className='flex justify-center items-center w-full flex-1'>#</div>
                    <div className='flex justify-center items-center w-full flex-1'>3</div>
                </div>
                <div className='col-span-2 flex flex-col justify-center items-center text-[1vw]' style={{ backgroundColor: getColor("Digit4") }}>
                    <div className='flex justify-center items-center w-full flex-1'>$</div>
                    <div className='flex justify-center items-center w-full flex-1'>4</div>
                </div>
                <div className='col-span-2 flex flex-col justify-center items-center text-[1vw]' style={{ backgroundColor: getColor("Digit5") }}>
                    <div className='flex justify-center items-center w-full flex-1'>%</div>
                    <div className='flex justify-center items-center w-full flex-1'>5</div>
                </div>
                <div className='col-span-2 flex flex-col justify-center items-center text-[1vw]' style={{ backgroundColor: getColor("Digit6") }}>
                    <div className='flex justify-center items-center w-full flex-1'>^</div>
                    <div className='flex justify-center items-center w-full flex-1'>6</div>
                </div>
                <div className='col-span-2 flex flex-col justify-center items-center text-[1vw]' style={{ backgroundColor: getColor("Digit7") }}>
                    <div className='flex justify-center items-center w-full flex-1'>&</div>
                    <div className='flex justify-center items-center w-full flex-1'>7</div>
                </div>
                <div className='col-span-2 flex flex-col justify-center items-center text-[1vw]' style={{ backgroundColor: getColor("Digit8") }}>
                    <div className='flex justify-center items-center w-full flex-1'>*</div>
                    <div className='flex justify-center items-center w-full flex-1'>8</div>
                </div>
                <div className='col-span-2 flex flex-col justify-center items-center text-[1vw]' style={{ backgroundColor: getColor("Digit9") }}>
                    <div className='flex justify-center items-center w-full flex-1'>(</div>
                    <div className='flex justify-center items-center w-full flex-1'>9</div>
                </div>
                <div className='col-span-2 flex flex-col justify-center items-center text-[1vw]' style={{ backgroundColor: getColor("Digit0") }}>
                    <div className='flex justify-center items-center w-full flex-1'>)</div>
                    <div className='flex justify-center items-center w-full flex-1'>0</div>
                </div>
                <div className='col-span-2 flex flex-col justify-center items-center text-[1vw]' style={{ backgroundColor: getColor("Minus") }}>
                    <div className='flex justify-center items-center w-full flex-1'>_</div>
                    <div className='flex justify-center items-center w-full flex-1'>-</div>
                </div>
                <div className='col-span-2 flex flex-col justify-center items-center text-[1vw]' style={{ backgroundColor: getColor("Equal") }}>
                    <div className='flex justify-center items-center w-full flex-1'>+</div>
                    <div className='flex justify-center items-center w-full flex-1'>=</div>
                </div>
                <div className='col-span-4 flex justify-center items-center text-[1vw]' style={{ backgroundColor: getColor("Backspace") }}>backspace</div>




                <div className='col-span-3 flex justify-center items-center text-[1vw]' style={{ backgroundColor: getColor("Tab") }}>tab</div>
                <div className='col-span-2 flex justify-center items-center text-[1vw]' style={{ backgroundColor: getColor("KeyQ") }}>
                    <div className='flex justify-center items-center flex-1 opacity-[0.6]'>Q</div>
                    <div className='flex flex-col justify-between items-center w-full h-full flex-1'>
                        <div className='flex justify-center items-center flex-1'>ஸ</div>
                        <div className='flex justify-center items-center flex-1'>ஆ</div>
                    </div>
                </div>
                <div className='col-span-2 flex justify-center items-center text-[1vw]' style={{ backgroundColor: getColor("KeyW") }}>
                    <div className='flex justify-center items-center flex-1 opacity-[0.6]'>W</div>
                    <div className='flex flex-col justify-between items-center w-full h-full flex-1'>
                        <div className='flex justify-center items-center flex-1'>ஷ</div>
                        <div className='flex justify-center items-center flex-1'>ஈ</div>
                    </div>
                </div>
                <div className='col-span-2 flex justify-center items-center text-[1vw]' style={{ backgroundColor: getColor("KeyE") }}>
                    <div className='flex justify-center items-center flex-1 opacity-[0.6]'>E</div>
                    <div className='flex flex-col justify-between items-center w-full h-full flex-1'>
                        <div className='flex justify-center items-center flex-1'>ஜ</div>
                        <div className='flex justify-center items-center flex-1'>ஊ</div>
                    </div>
                </div>
                <div className='col-span-2 flex justify-center items-center text-[1vw]' style={{ backgroundColor: getColor("KeyR") }}>
                    <div className='flex justify-center items-center flex-1 opacity-[0.6]'>R</div>
                    <div className='flex flex-col justify-between items-center w-full h-full flex-1'>
                        <div className='flex justify-center items-center flex-1'>ஹ</div>
                        <div className='flex justify-center items-center flex-1'>ஐ</div>
                    </div>
                </div>
                <div className='col-span-2 flex justify-center items-center text-[1vw]' style={{ backgroundColor: getColor("KeyT") }}>
                    <div className='flex justify-center items-center flex-1 opacity-[0.6]'>T</div>
                    <div className='flex flex-col justify-between items-center w-full h-full flex-1'>
                        <div className='flex justify-center items-center flex-1'>க்ஷ</div>
                        <div className='flex justify-center items-center flex-1'>ஏ</div>
                    </div>
                </div>
                <div className='col-span-2 flex justify-center items-center text-[1vw]' style={{ backgroundColor: getColor("KeyY") }}>
                    <div className='flex justify-center items-center flex-1 opacity-[0.6]'>Y</div>
                    <div className='flex flex-col justify-between items-center w-full h-full flex-1'>
                        <div className='flex justify-center items-center flex-1'>ஶ்ரீ</div>
                        <div className='flex justify-center items-center flex-1'>ள</div>
                    </div>
                </div>
                <div className='col-span-2 flex justify-center items-center text-[1vw]' style={{ backgroundColor: getColor("KeyU") }}>
                    <div className='flex justify-center items-center flex-1 opacity-[0.6]'>U</div>
                    <div className='flex flex-col justify-between items-center w-full h-full flex-1'>
                        <div className='flex justify-center items-center flex-1'>ஶ</div>
                        <div className='flex justify-center items-center flex-1'>ற</div>
                    </div>
                </div>
                <div className='col-span-2 flex justify-center items-center text-[1vw]' style={{ backgroundColor: getColor("KeyI") }}>
                    <div className='flex justify-center items-center flex-1 opacity-[0.6]'>I</div>
                    <div className='flex flex-col justify-between items-center w-full h-full flex-1'>
                        <div className='flex justify-center items-center flex-1'></div>
                        <div className='flex justify-center items-center flex-1'>ன</div>
                    </div>
                </div>
                <div className='col-span-2 flex justify-center items-center text-[1vw]' style={{ backgroundColor: getColor("KeyO") }}>
                    <div className='flex justify-center items-center flex-1 opacity-[0.6]'>O</div>
                    <div className='flex flex-col justify-between items-center w-full h-full flex-1'>
                        <div className='flex justify-center items-center flex-1'>[</div>
                        <div className='flex justify-center items-center flex-1'>ட</div>
                    </div>
                </div>
                <div className='col-span-2 flex justify-center items-center text-[1vw]' style={{ backgroundColor: getColor("KeyP") }}>
                    <div className='flex justify-center items-center flex-1 opacity-[0.6]'>P</div>
                    <div className='flex flex-col justify-between items-center w-full h-full flex-1'>
                        <div className='flex justify-center items-center flex-1'>]</div>
                        <div className='flex justify-center items-center flex-1'>ண</div>
                    </div>
                </div>
                <div className='col-span-2 flex justify-center items-center text-[1vw]' style={{ backgroundColor: getColor("BracketLeft") }}>
                    <div className='flex justify-center items-center flex-1 opacity-[0.6]'>[</div>
                    <div className='flex flex-col justify-between items-center w-full h-full flex-1'>
                        <div className='flex justify-center items-center flex-1'>{'{'}</div>
                        <div className='flex justify-center items-center flex-1'>ச</div>
                    </div>
                </div>
                <div className='col-span-2 flex justify-center items-center text-[1vw]' style={{ backgroundColor: getColor("BracketRight") }}>
                    <div className='flex justify-center items-center flex-1 opacity-[0.6]'>]</div>
                    <div className='flex flex-col justify-between items-center w-full h-full flex-1'>
                        <div className='flex justify-center items-center flex-1'>{'}'}</div>
                        <div className='flex justify-center items-center flex-1'>ஞ</div>
                    </div>
                </div>
                <div className='col-span-3 flex flex-col justify-center items-center text-[1vw]' style={{ backgroundColor: getColor("Backslash") }}>
                    <div className='flex justify-center items-center w-full flex-1'>|</div>
                    <div className='flex justify-center items-center w-full flex-1'>\</div>
                </div>




                <div className='col-span-4 flex justify-center items-center text-[1vw]' style={{ backgroundColor: getColor("CapsLock") }}>caps lock</div>
                <div className='col-span-2 flex justify-center items-center text-[1vw]' style={{ backgroundColor: getColor("KeyA") }}>
                    <div className='flex justify-center items-center flex-1 opacity-[0.6]'>A</div>
                    <div className='flex flex-col justify-between items-center w-full h-full flex-1'>
                        <div className='flex justify-center items-center flex-1'>௹</div>
                        <div className='flex justify-center items-center flex-1'>அ</div>
                    </div>
                </div>
                <div className='col-span-2 flex justify-center items-center text-[1vw]' style={{ backgroundColor: getColor("KeyS") }}>
                    <div className='flex justify-center items-center flex-1 opacity-[0.6]'>S</div>
                    <div className='flex flex-col justify-between items-center w-full h-full flex-1'>
                        <div className='flex justify-center items-center flex-1'>௺</div>
                        <div className='flex justify-center items-center flex-1'>இ</div>
                    </div>
                </div>
                <div className='col-span-2 flex justify-center items-center text-[1vw]' style={{ backgroundColor: getColor("KeyD") }}>
                    <div className='flex justify-center items-center flex-1 opacity-[0.6]'>D</div>
                    <div className='flex flex-col justify-between items-center w-full h-full flex-1'>
                        <div className='flex justify-center items-center flex-1'>௸</div>
                        <div className='flex justify-center items-center flex-1'>உ</div>
                    </div>
                </div>
                <div className='col-span-2 flex justify-center items-center text-[1vw]' style={{ backgroundColor: getColor("KeyF") }}>
                    <div className='flex justify-center items-center flex-1 opacity-[0.6]'>F</div>
                    <div className='flex flex-col justify-between items-center w-full h-full flex-1'>
                        <div className='flex justify-center items-center flex-1'>ஃ</div>
                        <div className='flex justify-center items-center flex-1'>்</div>
                    </div>
                </div>
                <div className='col-span-2 flex justify-center items-center text-[1vw]' style={{ backgroundColor: getColor("KeyG") }}>
                    <div className='flex justify-center items-center flex-1 opacity-[0.6]'>G</div>
                    <div className='flex flex-col justify-between items-center w-full h-full flex-1'>
                        <div className='flex justify-center items-center flex-1'></div>
                        <div className='flex justify-center items-center flex-1'>எ</div>
                    </div>
                </div>
                <div className='col-span-2 flex justify-center items-center text-[1vw]' style={{ backgroundColor: getColor("KeyH") }}>
                    <div className='flex justify-center items-center flex-1 opacity-[0.6]'>H</div>
                    <div className='flex flex-col justify-between items-center w-full h-full flex-1'>
                        <div className='flex justify-center items-center flex-1'></div>
                        <div className='flex justify-center items-center flex-1'>க</div>
                    </div>
                </div>
                <div className='col-span-2 flex justify-center items-center text-[1vw]' style={{ backgroundColor: getColor("KeyJ") }}>
                    <div className='flex justify-center items-center flex-1 opacity-[0.6]'>J</div>
                    <div className='flex flex-col justify-between items-center w-full h-full flex-1'>
                        <div className='flex justify-center items-center flex-1'></div>
                        <div className='flex justify-center items-center flex-1'>ப</div>
                    </div>
                </div>
                <div className='col-span-2 flex justify-center items-center text-[1vw]' style={{ backgroundColor: getColor("KeyK") }}>
                    <div className='flex justify-center items-center flex-1 opacity-[0.6]'>K</div>
                    <div className='flex flex-col justify-between items-center w-full h-full flex-1'>
                        <div className='flex justify-center items-center flex-1'>"</div>
                        <div className='flex justify-center items-center flex-1'>ம</div>
                    </div>
                </div>
                <div className='col-span-2 flex justify-center items-center text-[1vw]' style={{ backgroundColor: getColor("KeyL") }}>
                    <div className='flex justify-center items-center flex-1 opacity-[0.6]'>L</div>
                    <div className='flex flex-col justify-between items-center w-full h-full flex-1'>
                        <div className='flex justify-center items-center flex-1'>:</div>
                        <div className='flex justify-center items-center flex-1'>த</div>
                    </div>
                </div>
                <div className='col-span-2 flex justify-center items-center text-[1vw]' style={{ backgroundColor: getColor("Semicolon") }}>
                    <div className='flex justify-center items-center flex-1 opacity-[0.6]'>;</div>
                    <div className='flex flex-col justify-between items-center w-full h-full flex-1'>
                        <div className='flex justify-center items-center flex-1'>;</div>
                        <div className='flex justify-center items-center flex-1'>ந</div>
                    </div>
                </div>
                <div className='col-span-2 flex justify-center items-center text-[1vw]' style={{ backgroundColor: getColor("Quote") }}>
                    <div className='flex justify-center items-center flex-1 opacity-[0.6]'>'</div>
                    <div className='flex flex-col justify-between items-center w-full h-full flex-1'>
                        <div className='flex justify-center items-center flex-1'>'</div>
                        <div className='flex justify-center items-center flex-1'>ய</div>
                    </div>
                </div>
                <div className='col-span-4 flex justify-center items-center text-[1vw]' style={{ backgroundColor: getColor("Enter") }}>enter</div>




                <div className='col-span-5 flex justify-center items-center text-[1vw]' style={{ backgroundColor: getColor("ShiftLeft") }}>shift</div>
                <div className='col-span-2 flex justify-center items-center text-[1vw]' style={{ backgroundColor: getColor("KeyZ") }}>
                    <div className='flex justify-center items-center flex-1 opacity-[0.6]'>Z</div>
                    <div className='flex flex-col justify-between items-center w-full h-full flex-1'>
                        <div className='flex justify-center items-center flex-1'>௳</div>
                        <div className='flex justify-center items-center flex-1'>ஔ</div>
                    </div>
                </div>
                <div className='col-span-2 flex justify-center items-center text-[1vw]' style={{ backgroundColor: getColor("KeyX") }}>
                    <div className='flex justify-center items-center flex-1 opacity-[0.6]'>X</div>
                    <div className='flex flex-col justify-between items-center w-full h-full flex-1'>
                        <div className='flex justify-center items-center flex-1'>௴</div>
                        <div className='flex justify-center items-center flex-1'>ஓ</div>
                    </div>
                </div>
                <div className='col-span-2 flex justify-center items-center text-[1vw]' style={{ backgroundColor: getColor("KeyC") }}>
                    <div className='flex justify-center items-center flex-1 opacity-[0.6]'>C</div>
                    <div className='flex flex-col justify-between items-center w-full h-full flex-1'>
                        <div className='flex justify-center items-center flex-1'>௵</div>
                        <div className='flex justify-center items-center flex-1'>ஒ</div>
                    </div>
                </div>
                <div className='col-span-2 flex justify-center items-center text-[1vw]' style={{ backgroundColor: getColor("KeyV") }}>
                    <div className='flex justify-center items-center flex-1 opacity-[0.6]'>V</div>
                    <div className='flex flex-col justify-between items-center w-full h-full flex-1'>
                        <div className='flex justify-center items-center flex-1'>௶</div>
                        <div className='flex justify-center items-center flex-1'>வ</div>
                    </div>
                </div>
                <div className='col-span-2 flex justify-center items-center text-[1vw]' style={{ backgroundColor: getColor("KeyB") }}>
                    <div className='flex justify-center items-center flex-1 opacity-[0.6]'>B</div>
                    <div className='flex flex-col justify-between items-center w-full h-full flex-1'>
                        <div className='flex justify-center items-center flex-1'>௷</div>
                        <div className='flex justify-center items-center flex-1'>ங</div>
                    </div>
                </div>
                <div className='col-span-2 flex justify-center items-center text-[1vw]' style={{ backgroundColor: getColor("KeyN") }}>
                    <div className='flex justify-center items-center flex-1 opacity-[0.6]'>N</div>
                    <div className='flex flex-col justify-between items-center w-full h-full flex-1'>
                        <div className='flex justify-center items-center flex-1'>ௐ</div>
                        <div className='flex justify-center items-center flex-1'>ல</div>
                    </div>
                </div>
                <div className='col-span-2 flex justify-center items-center text-[1vw]' style={{ backgroundColor: getColor("KeyM") }}>
                    <div className='flex justify-center items-center flex-1 opacity-[0.6]'>M</div>
                    <div className='flex flex-col justify-between items-center w-full h-full flex-1'>
                        <div className='flex justify-center items-center flex-1'>/</div>
                        <div className='flex justify-center items-center flex-1'>ர</div>
                    </div>
                </div>
                <div className='col-span-2 flex flex-col justify-center items-center text-[1vw]' style={{ backgroundColor: getColor("Comma") }}>
                    <div className='flex justify-center items-center w-full flex-1'>{'<'}</div>
                    <div className='flex justify-center items-center w-full flex-1'>,</div>
                </div>
                <div className='col-span-2 flex flex-col justify-center items-center text-[1vw]' style={{ backgroundColor: getColor("Period") }}>
                    <div className='flex justify-center items-center w-full flex-1'>{'>'}</div>
                    <div className='flex justify-center items-center w-full flex-1'>.</div>
                </div>
                <div className='col-span-2 flex justify-center items-center text-[1vw]' style={{ backgroundColor: getColor("Slash") }}>
                    <div className='flex justify-center items-center flex-1 opacity-[0.6]'>/</div>
                    <div className='flex flex-col justify-between items-center w-full h-full flex-1'>
                        <div className='flex justify-center items-center flex-1'>?</div>
                        <div className='flex justify-center items-center flex-1'>ழ</div>
                    </div>
                </div>
                <div className='col-span-5 flex justify-center items-center text-[1vw]' style={{ backgroundColor: getColor("ShiftRight") }}>shift</div>




                <div className='col-span-2 flex justify-center items-center text-[1vw]' style={{ backgroundColor: getColor("ControlLeft") }}>ctrl</div>
                <div className='col-span-2 flex justify-center items-center text-[1vw]' style={{ backgroundColor: getColor("Keyfn") }}>fn</div>
                <div className='col-span-2 flex justify-center items-center text-[1vw]' style={{ backgroundColor: getColor("MetaLeft") }}>win</div>
                <div className='col-span-2 flex justify-center items-center text-[1vw]' style={{ backgroundColor: getColor("AltLeft") }}>alt</div>
                <div className='col-span-14 flex justify-center items-center text-[1vw]' style={{ backgroundColor: getColor("Space") }}>space</div>
                <div className='col-span-2 flex justify-center items-center text-[1vw]' style={{ backgroundColor: getColor("AltRight") }}>alt</div>
                <div className='col-span-2 flex justify-center items-center text-[1vw]' style={{ backgroundColor: getColor("Keyfn") }}>fn</div>
                <div className='col-span-2 flex justify-center items-center text-[1vw]' style={{ backgroundColor: getColor("MetaRight") }}>win</div>
                <div className='col-span-2 flex justify-center items-center text-[1vw]' style={{ backgroundColor: getColor("ControlRight") }}>ctrl</div>

            </div>
            {/* <div className='absolute inset-0 grid grid-cols-30 grid-rows-5 pointer-events-none'>
                <div style={{ gridColumn: '1 / 16', gridRow: '1 / 6' }} className="">
                    <Hand side="L" currentKey={currentUnit < lesson.units.length && lesson.units[currentUnit].keys[currentKey]} />
                </div>
                <div style={{ gridColumn: '16 / 31', gridRow: '1 / 6' }} className="">
                    <Hand side="R" currentKey={currentUnit < lesson.units.length && lesson.units[currentUnit].keys[currentKey]} />
                </div>
            </div> */}
        </div>
    )
}