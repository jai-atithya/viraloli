import React from 'react'

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
        if (currentUnit >= lesson.units.length) return "#e5e7eb";
        if (lesson.units[currentUnit].keys[currentKey] === key) {
            return "#2b93fb"; 
        }
        return "#e5e7eb";
    };
    return (
        <div className='flex-1 w-full grid grid-cols-30 grid-rows-10 gap-[0.2rem]'>
            <div className='col-span-2 row-span-2 flex justify-center items-center border-radius-[5rem]' style={{ backgroundColor: getColor("Key`") }}>`</div>
            <div className='col-span-2 row-span-2 flex justify-center items-center' style={{ backgroundColor: getColor("Key1") }}>1</div>
            <div className='col-span-2 row-span-2 flex justify-center items-center' style={{ backgroundColor: getColor("Key2") }}>2</div>
            <div className='col-span-2 row-span-2 flex justify-center items-center' style={{ backgroundColor: getColor("Key3") }}>3</div>
            <div className='col-span-2 row-span-2 flex justify-center items-center' style={{ backgroundColor: getColor("Key4") }}>4</div>
            <div className='col-span-2 row-span-2 flex justify-center items-center' style={{ backgroundColor: getColor("Key5") }}>5</div>
            <div className='col-span-2 row-span-2 flex justify-center items-center' style={{ backgroundColor: getColor("Key6") }}>6</div>
            <div className='col-span-2 row-span-2 flex justify-center items-center' style={{ backgroundColor: getColor("Key7") }}>7</div>
            <div className='col-span-2 row-span-2 flex justify-center items-center' style={{ backgroundColor: getColor("Key8") }}>8</div>
            <div className='col-span-2 row-span-2 flex justify-center items-center' style={{ backgroundColor: getColor("Key9") }}>9</div>
            <div className='col-span-2 row-span-2 flex justify-center items-center' style={{ backgroundColor: getColor("Key0") }}>0</div>
            <div className='col-span-2 row-span-2 flex justify-center items-center ' style={{ backgroundColor: getColor("KeyMinus") }}>-</div>
            <div className='col-span-2 row-span-2 flex justify-center items-center' style={{ backgroundColor: getColor("KeyEqual") }}>=</div>
            <div className='col-span-4 row-span-2 flex justify-center items-center' style={{ backgroundColor: getColor("KeyBackspace") }}>back</div>
            <div className='col-span-3 row-span-2 flex justify-center items-center' style={{ backgroundColor: getColor("KeyTab") }}>tab</div>

            <div className='col-span-2 row-span-2 flex justify-center items-center' style={{ backgroundColor: getColor("KeyQ") }}>q</div>
            <div className='col-span-2 row-span-2 flex justify-center items-center' style={{ backgroundColor: getColor("KeyW") }}>w</div>
            <div className='col-span-2 row-span-2 flex justify-center items-center' style={{ backgroundColor: getColor("KeyE") }}>e</div>
            <div className='col-span-2 row-span-2 flex justify-center items-center' style={{ backgroundColor: getColor("KeyR") }}>r</div>
            <div className='col-span-2 row-span-2 flex justify-center items-center' style={{ backgroundColor: getColor("KeyT") }}>t</div>
            <div className='col-span-2 row-span-2 flex justify-center items-center' style={{ backgroundColor: getColor("KeyY") }}>y</div>
            <div className='col-span-2 row-span-2 flex justify-center items-center' style={{ backgroundColor: getColor("KeyU") }}>u</div>
            <div className='col-span-2 row-span-2 flex justify-center items-center' style={{ backgroundColor: getColor("KeyI") }}>i</div>
            <div className='col-span-2 row-span-2 flex justify-center items-center' style={{ backgroundColor: getColor("KeyO") }}>o</div>
            <div className='col-span-2 row-span-2 flex justify-center items-center' style={{ backgroundColor: getColor("KeyP") }}>p</div>
            <div className='col-span-2 row-span-2 flex justify-center items-center' style={{ backgroundColor: getColor("KeyLeftBracket") }}>[</div>
            <div className='col-span-2 row-span-2 flex justify-center items-center' style={{ backgroundColor: getColor("KeyRightBracket") }}>]</div>
            <div className='col-span-3 row-span-2 flex justify-center items-center' style={{ backgroundColor: getColor("KeyBackslash") }}>\</div>

            <div className='col-span-4 row-span-2 flex justify-center items-center' style={{ backgroundColor: getColor("KeyCapsLock") }}>caps</div>
            <div className='col-span-2 row-span-2 flex justify-center items-center' style={{ backgroundColor: getColor("KeyA") }}>a</div>
            <div className='col-span-2 row-span-2 flex justify-center items-center' style={{ backgroundColor: getColor("KeyS") }}>s</div>
            <div className='col-span-2 row-span-2 flex justify-center items-center' style={{ backgroundColor: getColor("KeyD") }}>d</div>
            <div className='col-span-2 row-span-2 flex justify-center items-center' style={{ backgroundColor: getColor("KeyF") }}>f</div>
            <div className='col-span-2 row-span-2 flex justify-center items-center' style={{ backgroundColor: getColor("KeyG") }}>g</div>
            <div className='col-span-2 row-span-2 flex justify-center items-center' style={{ backgroundColor: getColor("KeyH") }}>h</div>
            <div className='col-span-2 row-span-2 flex justify-center items-center' style={{ backgroundColor: getColor("KeyJ") }}>j</div>
            <div className='col-span-2 row-span-2 flex justify-center items-center' style={{ backgroundColor: getColor("KeyK") }}>k</div>
            <div className='col-span-2 row-span-2 flex justify-center items-center' style={{ backgroundColor: getColor("KeyL") }}>l</div>
            <div className='col-span-2 row-span-2 flex justify-center items-center' style={{ backgroundColor: getColor("KeySemicolon") }}>; </div>
            <div className='col-span-2 row-span-2 flex justify-center items-center' style={{ backgroundColor: getColor("KeyQuote") }}>'</div>
            <div className='col-span-4 row-span-2 flex justify-center items-center' style={{ backgroundColor: getColor("KeyEnter") }}>enter</div>

            <div className='col-span-5 row-span-2 flex justify-center items-center' style={{ backgroundColor: getColor("KeyShift") }}>shift</div>
            <div className='col-span-2 row-span-2 flex justify-center items-center' style={{ backgroundColor: getColor("KeyZ") }}>z</div>
            <div className='col-span-2 row-span-2 flex justify-center items-center' style={{ backgroundColor: getColor("KeyX") }}>x</div>
            <div className='col-span-2 row-span-2 flex justify-center items-center' style={{ backgroundColor: getColor("KeyC") }}>c</div>
            <div className='col-span-2 row-span-2 flex justify-center items-center' style={{ backgroundColor: getColor("KeyV") }}>v</div>
            <div className='col-span-2 row-span-2 flex justify-center items-center' style={{ backgroundColor: getColor("KeyB") }}>b</div>
            <div className='col-span-2 row-span-2 flex justify-center items-center' style={{ backgroundColor: getColor("KeyN") }}>n</div>
            <div className='col-span-2 row-span-2 flex justify-center items-center' style={{ backgroundColor: getColor("KeyM") }}>m</div>
            <div className='col-span-2 row-span-2 flex justify-center items-center' style={{ backgroundColor: getColor("KeyComma") }}>,</div>
            <div className='col-span-2 row-span-2 flex justify-center items-center' style={{ backgroundColor: getColor("KeyPeriod") }}>.</div>
            <div className='col-span-2 row-span-2 flex justify-center items-center' style={{ backgroundColor: getColor("Slash") }}>/</div>
            <div className='col-span-5 row-span-2 flex justify-center items-center' style={{ backgroundColor: getColor("KeyShift") }}>shift</div>

            <div className='col-span-2 row-span-2 flex justify-center items-center' style={{ backgroundColor: getColor("KeyCtrl") }}>ctrl</div>
            <div className='col-span-2 row-span-2 flex justify-center items-center' style={{ backgroundColor: getColor("KeyFn") }}>fn</div>
            <div className='col-span-2 row-span-2 flex justify-center items-center' style={{ backgroundColor: getColor("KeyWin") }}>win</div>
            <div className='col-span-2 row-span-2 flex justify-center items-center' style={{ backgroundColor: getColor("KeyAlt") }}>alt</div>
            <div className='col-span-12 row-span-2 flex justify-center items-center' style={{ backgroundColor: getColor("Space") }}>space</div>
            <div className='col-span-2 row-span-2 flex justify-center items-center' style={{ backgroundColor: getColor("KeyAlt") }}>alt</div>
            <div className='col-span-2 row-span-2 flex justify-center items-center' style={{ backgroundColor: getColor("KeyCtrl") }}>ctrl</div>

            <div className='col-span-2 row-span-1 flex justify-center items-center' style={{ backgroundColor: getColor("KeyPgUp") }}>pg up</div>
            <div className='col-span-2 row-span-1 flex justify-center items-center' style={{ backgroundColor: getColor("KeyUp") }}>↑</div>
            <div className='col-span-2 row-span-1 flex justify-center items-center' style={{ backgroundColor: getColor("KeyPgDn") }}>pg dn</div>
            <div className='col-span-2 row-span-1 flex justify-center items-center' style={{ backgroundColor: getColor("KeyLeft") }}>←</div>
            <div className='col-span-2 row-span-1 flex justify-center items-center' style={{ backgroundColor: getColor("KeyDown") }}>↓</div>
            <div className='col-span-2 row-span-1 flex justify-center items-center' style={{ backgroundColor: getColor("KeyRight") }}>→</div>

        </div>
    )
}
