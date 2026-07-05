import React from 'react'
const fingers = {

    LeftRest: {
        left: true,
        right: false,
        pinky: { isActive: false, x1: 90, y1: 140, x2: 90, y2: 180 },
        ring: { isActive: false, x1: 135, y1: 120, x2: 135, y2: 180 },
        middle: { isActive: false, x1: 185, y1: 110, x2: 185, y2: 180 },
        index: { isActive: false, x1: 235, y1: 130, x2: 235, y2: 180 },
        thumb: { isActive: false, x1: 280, y1: 220, x2: 250, y2: 250 },
    },
    rightRest: {
        left: false,
        right: true,
        thumb: { isActive: false, x1: -30, y1: 220, x2: 0, y2: 250 },
        index: { isActive: false, x1: 20, y1: 130, x2: 20, y2: 180 },
        middle: { isActive: false, x1: 65, y1: 110, x2: 65, y2: 180 },
        ring: { isActive: false, x1: 115, y1: 120, x2: 115, y2: 180 },
        pinky: { isActive: false, x1: 165, y1: 140, x2: 165, y2: 180 }
    },
    Space: {
        left: false,
        right: true,
        thumb: { isActive: true, x1: -30, y1: 220, x2: 0, y2: 250 },
        index: { isActive: false, x1: 20, y1: 130, x2: 20, y2: 180 },
        middle: { isActive: false, x1: 65, y1: 110, x2: 65, y2: 180 },
        ring: { isActive: false, x1: 115, y1: 120, x2: 115, y2: 180 },
        pinky: { isActive: false, x1: 165, y1: 140, x2: 165, y2: 180 }
    },
    Enter: {
        left: false,
        right: true,
        fingersR: {
            thumb: { isActive: false, x1: -30, y1: 220, x2: 0, y2: 250 },
            index: { isActive: false, x1: 20, y1: 130, x2: 20, y2: 180 },
            middle: { isActive: false, x1: 65, y1: 110, x2: 65, y2: 180 },
            ring: { isActive: false, x1: 115, y1: 120, x2: 115, y2: 180 },
            pinky: { isActive: true, x1: 250, y1: 120, x2: 165, y2: 180 }
        }
    },    
    LeftShift: {
        left: true,
        right: false,
        pinky: { isActive: true, x1: 60, y1: 180, x2: 90, y2: 220 },
        ring: { isActive: false, x1: 135, y1: 120, x2: 135, y2: 180 },
        middle: { isActive: false, x1: 185, y1: 110, x2: 185, y2: 180 },
        index: { isActive: false, x1: 235, y1: 130, x2: 235, y2: 180 },
        thumb: { isActive: false, x1: 280, y1: 220, x2: 250, y2: 250 },
    },
    RightShift: {
        left: false,
        right: true,
        thumb: { isActive: false, x1: -30, y1: 220, x2: 0, y2: 250 },
        index: { isActive: false, x1: 20, y1: 130, x2: 20, y2: 180 },
        middle: { isActive: false, x1: 65, y1: 110, x2: 65, y2: 180 },
        ring: { isActive: false, x1: 115, y1: 120, x2: 115, y2: 180 },
        pinky: { isActive: true, x1: 225, y1: 165, x2: 165, y2: 220 }
    },
    
    KeyA: {
        left: true,
        right: false,
        pinky: { isActive: true, x1: 90, y1: 140, x2: 90, y2: 180 },
        ring: { isActive: false, x1: 135, y1: 120, x2: 135, y2: 180 },
        middle: { isActive: false, x1: 185, y1: 110, x2: 185, y2: 180 },
        index: { isActive: false, x1: 235, y1: 130, x2: 235, y2: 180 },
        thumb: { isActive: false, x1: 280, y1: 220, x2: 250, y2: 250 },
    },
    KeyS: {
        left: true,
        right: false,
        pinky: { isActive: false, x1: 90, y1: 140, x2: 90, y2: 180 },
        ring: { isActive: true, x1: 135, y1: 120, x2: 135, y2: 180 },
        middle: { isActive: false, x1: 185, y1: 110, x2: 185, y2: 180 },
        index: { isActive: false, x1: 235, y1: 130, x2: 235, y2: 180 },
        thumb: { isActive: false, x1: 280, y1: 220, x2: 250, y2: 250 },
    },
    KeyD: {
        left: true,
        right: false,
        pinky: { isActive: false, x1: 90, y1: 140, x2: 90, y2: 180 },
        ring: { isActive: false, x1: 135, y1: 120, x2: 135, y2: 180 },
        middle: { isActive: true, x1: 185, y1: 110, x2: 185, y2: 180 },
        index: { isActive: false, x1: 235, y1: 130, x2: 235, y2: 180 },
        thumb: { isActive: false, x1: 280, y1: 220, x2: 250, y2: 250 },
    },
    KeyF: {
        left: true,
        right: false,
        pinky: { isActive: false, x1: 90, y1: 140, x2: 90, y2: 180 },
        ring: { isActive: false, x1: 135, y1: 120, x2: 135, y2: 180 },
        middle: { isActive: false, x1: 185, y1: 110, x2: 185, y2: 180 },
        index: { isActive: true, x1: 235, y1: 130, x2: 235, y2: 180 },
        thumb: { isActive: false, x1: 280, y1: 220, x2: 250, y2: 250 },
    },
    KeyG: {
        left: true,
        right: false,
        pinky: { isActive: false, x1: 90, y1: 140, x2: 90, y2: 180 },
        ring: { isActive: false, x1: 135, y1: 120, x2: 135, y2: 180 },
        middle: { isActive: false, x1: 185, y1: 110, x2: 185, y2: 180 },
        index: { isActive: true, x1: 280, y1: 135, x2: 235, y2: 180 },
        thumb: { isActive: false, x1: 280, y1: 220, x2: 250, y2: 250 },
        
    },
    KeyH: {
        left: false,
        right: true,
        thumb: { isActive: false, x1: -30, y1: 220, x2: 0, y2: 250 },
        index: { isActive: true, x1: -20, y1: 130, x2: 20, y2: 180 },
        middle: { isActive: false, x1: 65, y1: 110, x2: 65, y2: 180 },
        ring: { isActive: false, x1: 115, y1: 120, x2: 115, y2: 180 },
        pinky: { isActive: false, x1: 165, y1: 140, x2: 165, y2: 180 }
    },
    KeyJ: {
        left: false,
        right: true,
        thumb: { isActive: false, x1: -30, y1: 220, x2: 0, y2: 250 },
        index: { isActive: true, x1: 20, y1: 130, x2: 20, y2: 180 },
        middle: { isActive: false, x1: 65, y1: 110, x2: 65, y2: 180 },
        ring: { isActive: false, x1: 115, y1: 120, x2: 115, y2: 180 },
        pinky: { isActive: false, x1: 165, y1: 140, x2: 165, y2: 180 }
    },
    KeyK: {
        left: false,
        right: true,
        thumb: { isActive: false, x1: -30, y1: 220, x2: 0, y2: 250 },
        index: { isActive: false, x1: 20, y1: 130, x2: 20, y2: 180 },
        middle: { isActive: true, x1: 65, y1: 110, x2: 65, y2: 180 },
        ring: { isActive: false, x1: 115, y1: 120, x2: 115, y2: 180 },
        pinky: { isActive: false, x1: 165, y1: 140, x2: 165, y2: 180 }
    },
    KeyL: {
        left: false,
        right: true,
        thumb: { isActive: false, x1: -30, y1: 220, x2: 0, y2: 250 },
        index: { isActive: false, x1: 20, y1: 130, x2: 20, y2: 180 },
        middle: { isActive: false, x1: 65, y1: 110, x2: 65, y2: 180 },
        ring: { isActive: true, x1: 115, y1: 120, x2: 115, y2: 180 },
        pinky: { isActive: false, x1: 165, y1: 140, x2: 165, y2: 180 }
    },
    Semicolon: {
        left: false,
        right: true,
        thumb: { isActive: false, x1: -30, y1: 220, x2: 0, y2: 250 },
        index: { isActive: false, x1: 20, y1: 130, x2: 20, y2: 180 },
        middle: { isActive: false, x1: 65, y1: 110, x2: 65, y2: 180 },
        ring: { isActive: false, x1: 115, y1: 120, x2: 115, y2: 180 },
        pinky: { isActive: true, x1: 165, y1: 140, x2: 165, y2: 180 }
    },
    Quote: {
        left: false,
        right: true,
        thumb: { isActive: false, x1: -30, y1: 220, x2: 0, y2: 250 },
        index: { isActive: false, x1: 20, y1: 130, x2: 20, y2: 180 },
        middle: { isActive: false, x1: 65, y1: 110, x2: 65, y2: 180 },
        ring: { isActive: false, x1: 115, y1: 120, x2: 115, y2: 180 },
        pinky: { isActive: true, x1: 205, y1: 135, x2: 165, y2: 180 }
    },


    KeyQ: {
        left:true,
        right:false,
        pinky: { isActive: true, x1: 70, y1: 90, x2: 90, y2: 180 },
        ring: { isActive: false, x1: 135, y1: 120, x2: 135, y2: 180 },
        middle: { isActive: false, x1: 185, y1: 110, x2: 185, y2: 180 },
        index: { isActive: false, x1: 235, y1: 130, x2: 235, y2: 180 },
        thumb: { isActive: false, x1: 280, y1: 220, x2: 250, y2: 250 },
    },
    KeyW: {
        left:true,
        right:false,
        pinky: { isActive: false, x1: 90, y1: 140, x2: 90, y2: 180 },
        ring: { isActive: true, x1: 115, y1: 90, x2: 135, y2: 180 },
        middle: { isActive: false, x1: 185, y1: 110, x2: 185, y2: 180 },
        index: { isActive: false, x1: 235, y1: 130, x2: 235, y2: 180 },
        thumb: { isActive: false, x1: 280, y1: 220, x2: 250, y2: 250 },
    },
    KeyE: {
        left:true,
        right:false,
        pinky: { isActive: false, x1: 90, y1: 140, x2: 90, y2: 180 },
        ring: { isActive: false, x1: 135, y1: 120, x2: 135, y2: 180 },
        middle: { isActive: true, x1: 170, y1: 90, x2: 185, y2: 180 },
        index: { isActive: false, x1: 235, y1: 130, x2: 235, y2: 180 },
        thumb: { isActive: false, x1: 280, y1: 220, x2: 250, y2: 250 },
    },
    KeyR: {
        left:true,
        right:false,
        pinky: { isActive: false, x1: 90, y1: 140, x2: 90, y2: 180 },
        ring: { isActive: false, x1: 135, y1: 120, x2: 135, y2: 180 },
        middle: { isActive: false, x1: 185, y1: 110, x2: 185, y2: 180 },
        index: { isActive: true, x1: 220, y1: 90, x2: 235, y2: 180 },
        thumb: { isActive: false, x1: 280, y1: 220, x2: 250, y2: 250 },
    },
    KeyT: {
        left:true,
        right:false,
        pinky: { isActive: false, x1: 90, y1: 140, x2: 90, y2: 180 },
        ring: { isActive: false, x1: 135, y1: 120, x2: 135, y2: 180 },
        middle: { isActive: false, x1: 185, y1: 110, x2: 185, y2: 180 },
        index: { isActive: true, x1: 250, y1: 90, x2: 235, y2: 180 },
        thumb: { isActive: false, x1: 280, y1: 220, x2: 250, y2: 250 },
    },
    KeyY: {
        left:false,
        right:true,
        thumb: { isActive: false, x1: -30, y1: 220, x2: 0, y2: 250 },
        index: { isActive: true, x1: -45, y1: 90, x2: 20, y2: 180 },
        middle: { isActive: false, x1: 65, y1: 110, x2: 65, y2: 180 },
        ring: { isActive: false, x1: 115, y1: 120, x2: 115, y2: 180 },
        pinky: { isActive: false, x1: 165, y1: 140, x2: 165, y2: 180 }
    },
    KeyU: {
        left:false,
        right:true,
        thumb: { isActive: false, x1: -30, y1: 220, x2: 0, y2: 250 },
        index: { isActive: true, x1: 0, y1: 90, x2: 20, y2: 180 },
        middle: { isActive: false, x1: 65, y1: 110, x2: 65, y2: 180 },
        ring: { isActive: false, x1: 115, y1: 120, x2: 115, y2: 180 },
        pinky: { isActive: false, x1: 165, y1: 140, x2: 165, y2: 180 }
    },
    KeyI: {
        left:false,
        right:true,
        thumb: { isActive: false, x1: -30, y1: 220, x2: 0, y2: 250 },
        index: { isActive: false, x1: 20, y1: 130, x2: 20, y2: 180 },
        middle: { isActive: true, x1: 50, y1: 90, x2: 65, y2: 180 },
        ring: { isActive: false, x1: 115, y1: 120, x2: 115, y2: 180 },
        pinky: { isActive: false, x1: 165, y1: 140, x2: 165, y2: 180 }
    },
    KeyO: {
        left:false,
        right:true,
        thumb: { isActive: false, x1: -30, y1: 220, x2: 0, y2: 250 },
        index: { isActive: false, x1: 20, y1: 130, x2: 20, y2: 180 },
        middle: { isActive: false, x1: 65, y1: 110, x2: 65, y2: 180 },
        ring: { isActive: true, x1: 100, y1: 90, x2: 115, y2: 180 },
        pinky: { isActive: false, x1: 165, y1: 140, x2: 165, y2: 180 }
    },
    KeyP: {
        left:false,
        right:true,
        thumb: { isActive: false, x1: -30, y1: 220, x2: 0, y2: 250 },
        index: { isActive: false, x1: 20, y1: 130, x2: 20, y2: 180 },
        middle: { isActive: false, x1: 65, y1: 110, x2: 65, y2: 180 },
        ring: { isActive: false, x1: 115, y1: 120, x2: 115, y2: 180 },
        pinky: { isActive: true, x1: 140, y1: 90, x2: 165, y2: 180 }
    },
    BracketLeft: {
        left: false,
        right: true,
        thumb: { isActive: false, x1: -30, y1: 220, x2: 0, y2: 250 },
        index: { isActive: false, x1: 20, y1: 130, x2: 20, y2: 180 },
        middle: { isActive: false, x1: 65, y1: 110, x2: 65, y2: 180 },
        ring: { isActive: false, x1: 115, y1: 120, x2: 115, y2: 180 },
        pinky: { isActive: true, x1: 190, y1: 90, x2: 165, y2: 180 }
    },
    BracketRight: {
        left: false,
        right: true,
        thumb: { isActive: false, x1: -30, y1: 220, x2: 0, y2: 250 },
        index: { isActive: false, x1: 20, y1: 130, x2: 20, y2: 180 },
        middle: { isActive: false, x1: 65, y1: 110, x2: 65, y2: 180 },
        ring: { isActive: false, x1: 115, y1: 120, x2: 115, y2: 180 },
        pinky: { isActive: true, x1: 230, y1: 90, x2: 165, y2: 180 }
    },


    KeyZ: {
        left:true,
        right:false,
        pinky: { isActive: true, x1: 110, y1: 180, x2: 110, y2: 220 },
        ring: { isActive: false, x1: 135, y1: 120, x2: 135, y2: 180 },
        middle: { isActive: false, x1: 185, y1: 110, x2: 185, y2: 180 },
        index: { isActive: false, x1: 235, y1: 130, x2: 235, y2: 180 },
        thumb: { isActive: false, x1: 280, y1: 220, x2: 250, y2: 250 },
    },
    KeyX: {
        left:true,
        right:false,
        pinky: { isActive: false, x1: 110, y1: 180, x2: 110, y2: 220 },
        ring: { isActive: true, x1: 155, y1: 160, x2: 155, y2: 220 },
        middle: { isActive: false, x1: 185, y1: 110, x2: 185, y2: 180 },
        index: { isActive: false, x1: 235, y1: 130, x2: 235, y2: 180 },
        thumb: { isActive: false, x1: 280, y1: 220, x2: 250, y2: 250 },
    },
    KeyC: {
        left:true,
        right:false,
        pinky: { isActive: false, x1: 90, y1: 140, x2: 90, y2: 180 },
        ring: { isActive: false, x1: 135, y1: 120, x2: 135, y2: 180 },
        middle: { isActive: true, x1: 210, y1: 160, x2: 195, y2: 230 },
        index: { isActive: false, x1: 250, y1: 180, x2: 235, y2: 230 },
        thumb: { isActive: false, x1: 280, y1: 270, x2: 250, y2: 300 },
    },
    KeyV: {
        left:true,
        right:false,
        pinky: { isActive: false, x1: 90, y1: 140, x2: 90, y2: 180 },
        ring: { isActive: false, x1: 135, y1: 120, x2: 135, y2: 180 },
        middle: { isActive: false, x1: 185, y1: 110, x2: 185, y2: 180 },
        index: { isActive: true, x1: 250, y1: 180, x2: 235, y2: 230 },
        thumb: { isActive: false, x1: 280, y1: 270, x2: 250, y2: 300 },
    },
    KeyB: {
        left:true,
        right:false,
        pinky: { isActive: false, x1: 90, y1: 140, x2: 90, y2: 180 },
        ring: { isActive: false, x1: 135, y1: 120, x2: 135, y2: 180 },
        middle: { isActive: false, x1: 185, y1: 110, x2: 185, y2: 180 },
        index: { isActive: true, x1: 300, y1: 180, x2: 235, y2: 230 },
        thumb: { isActive: false, x1: 280, y1: 270, x2: 250, y2: 300 },
    },
    KeyN: {
        left:false,
        right:true,
        thumb: { isActive: false, x1: -30, y1: 220, x2: 0, y2: 250 },
        index: { isActive: true, x1: 0, y1: 170, x2: 20, y2: 220 },
        middle: { isActive: false, x1: 65, y1: 110, x2: 65, y2: 180 },
        ring: { isActive: false, x1: 115, y1: 120, x2: 115, y2: 180 },
        pinky: { isActive: false, x1: 165, y1: 140, x2: 165, y2: 180 }
    },
    KeyM: {
        left:false,
        right:true,
        thumb: { isActive: false, x1: -30, y1: 250, x2: 0, y2: 280 },
        index: { isActive: true, x1: 35, y1: 180, x2: 45, y2: 220 },
        middle: { isActive: false, x1: 65, y1: 110, x2: 65, y2: 180 },
        ring: { isActive: false, x1: 115, y1: 120, x2: 115, y2: 180 },
        pinky: { isActive: false, x1: 165, y1: 140, x2: 165, y2: 180 }
    },
    Comma: {
        left:false,
        right:true,
        thumb: { isActive: false, x1: -30, y1: 250, x2: 0, y2: 280 },
        index: { isActive: false, x1: 35, y1: 180, x2: 45, y2: 220 },
        middle: { isActive: true, x1: 85, y1: 160, x2: 85, y2: 220 },
        ring: { isActive: false, x1: 115, y1: 120, x2: 115, y2: 180 },
        pinky: { isActive: false, x1: 165, y1: 140, x2: 165, y2: 180 }
    },
    Period: {
        left:false,
        right:true,
        thumb: { isActive: false, x1: -30, y1: 220, x2: 0, y2: 250 },
        index: { isActive: false, x1: 20, y1: 130, x2: 20, y2: 180 },
        middle: { isActive: false, x1: 65, y1: 110, x2: 65, y2: 180 },
        ring: { isActive: true, x1: 135, y1: 160, x2: 145, y2: 220 },
        pinky: { isActive: false, x1: 185, y1: 185, x2: 195, y2: 220 }
    },
    Slash: {
        left:false,
        right:true,
        thumb: { isActive: false, x1: -30, y1: 220, x2: 0, y2: 250 },
        index: { isActive: false, x1: 20, y1: 130, x2: 20, y2: 180 },
        middle: { isActive: false, x1: 65, y1: 110, x2: 65, y2: 180 },
        ring: { isActive: false, x1: 135, y1: 160, x2: 145, y2: 220 },
        pinky: { isActive: true, x1: 185, y1: 185, x2: 195, y2: 220 }

    },
}
export const Hand = ({ side, currentKey, leftShift, rightShift }) => {
    const currentFinger = fingers[currentKey];
    let leftHand=fingers.LeftRest;
    let rightHand=fingers.rightRest;

    if (currentFinger) {
        leftHand = currentFinger.left? currentFinger : (leftShift ? fingers.LeftShift : fingers.LeftRest);
        rightHand = currentFinger.right? currentFinger : (rightShift ? fingers.RightShift : fingers.rightRest);
    }

    const fingerNames = ["pinky", "ring", "middle", "index", "thumb"];
    const hand = side === "L" ? leftHand : rightHand;
    return (
        <svg
            viewBox="0 0 300 240"
            opacity={0.8}
            preserveAspectRatio="xMidYMax meet"
            style={{
                width: "100%",
                height: "100%",
                overflow: "visible",
            }}
        >
            {fingerNames.map((name) => {
                const finger = hand[name];

                return (
                    <g key={name}>
                        <line
                            x1={finger.x1}
                            y1={finger.y1}
                            x2={finger.x2}
                            y2={finger.y2}
                            stroke={finger.isActive ? "#2e6deb" : "#e8b894"}
                            strokeWidth={name === "thumb" ? 23 : 22}
                            strokeLinecap="round"
                        />
                    </g>
                );
            })}
        </svg>
    );
};
