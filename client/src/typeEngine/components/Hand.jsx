import React from 'react'
const fingers = {
    Rest: {
        activeFinger: "R-index",
        fingersL: {
            pinky: { isActive: false, x1: 90, y1: 140, x2: 90, y2: 180 },
            ring: { isActive: false, x1: 135, y1: 120, x2: 135, y2: 180 },
            middle: { isActive: false, x1: 185, y1: 110, x2: 185, y2: 180 },
            index: { isActive: false, x1: 235, y1: 130, x2: 235, y2: 180 },
            thumb: { isActive: false, x1: 280, y1: 220, x2: 250, y2: 250 },
        },
        fingersR: {
            thumb: { isActive: false, x1: -30, y1: 220, x2: 0, y2: 250 },
            index: { isActive: false, x1: 20, y1: 130, x2: 20, y2: 180 },
            middle: { isActive: false, x1: 65, y1: 110, x2: 65, y2: 180 },
            ring: { isActive: false, x1: 115, y1: 120, x2: 115, y2: 180 },
            pinky: { isActive: false, x1: 165, y1: 140, x2: 165, y2: 180 }
        }
    },
    Space: {
        activeFinger: "R-index",
        fingersL: {
            pinky: { isActive: false, x1: 90, y1: 140, x2: 90, y2: 180 },
            ring: { isActive: false, x1: 135, y1: 120, x2: 135, y2: 180 },
            middle: { isActive: false, x1: 185, y1: 110, x2: 185, y2: 180 },
            index: { isActive: false, x1: 235, y1: 130, x2: 235, y2: 180 },
            thumb: { isActive: false, x1: 280, y1: 220, x2: 250, y2: 250 },
        },
        fingersR: {
            thumb: { isActive: true, x1: -30, y1: 220, x2: 0, y2: 250 },
            index: { isActive: false, x1: 20, y1: 130, x2: 20, y2: 180 },
            middle: { isActive: false, x1: 65, y1: 110, x2: 65, y2: 180 },
            ring: { isActive: false, x1: 115, y1: 120, x2: 115, y2: 180 },
            pinky: { isActive: false, x1: 165, y1: 140, x2: 165, y2: 180 }
        }
    },
    KeyA: {
        activeFinger: "R-index",
        fingersL: {
            pinky: { isActive: true, x1: 90, y1: 140, x2: 90, y2: 180 },
            ring: { isActive: false, x1: 135, y1: 120, x2: 135, y2: 180 },
            middle: { isActive: false, x1: 185, y1: 110, x2: 185, y2: 180 },
            index: { isActive: false, x1: 235, y1: 130, x2: 235, y2: 180 },
            thumb: { isActive: false, x1: 280, y1: 220, x2: 250, y2: 250 },
        },
        fingersR: {
            thumb: { isActive: false, x1: -30, y1: 220, x2: 0, y2: 250 },
            index: { isActive: false, x1: 20, y1: 130, x2: 20, y2: 180 },
            middle: { isActive: false, x1: 65, y1: 110, x2: 65, y2: 180 },
            ring: { isActive: false, x1: 115, y1: 120, x2: 115, y2: 180 },
            pinky: { isActive: false, x1: 165, y1: 140, x2: 165, y2: 180 }
        }
    },
    KeyS: {
        activeFinger: "R-index",
        fingersL: {
            pinky: { isActive: false, x1: 90, y1: 140, x2: 90, y2: 180 },
            ring: { isActive: true, x1: 135, y1: 120, x2: 135, y2: 180 },
            middle: { isActive: false, x1: 185, y1: 110, x2: 185, y2: 180 },
            index: { isActive: false, x1: 235, y1: 130, x2: 235, y2: 180 },
            thumb: { isActive: false, x1: 280, y1: 220, x2: 250, y2: 250 },
        },
        fingersR: {
            thumb: { isActive: false, x1: -30, y1: 220, x2: 0, y2: 250 },
            index: { isActive: false, x1: 20, y1: 130, x2: 20, y2: 180 },
            middle: { isActive: false, x1: 65, y1: 110, x2: 65, y2: 180 },
            ring: { isActive: false, x1: 115, y1: 120, x2: 115, y2: 180 },
            pinky: { isActive: false, x1: 165, y1: 140, x2: 165, y2: 180 }
        }
    },
    KeyD: {
        activeFinger: "R-index",
        fingersL: {
            pinky: { isActive: false, x1: 90, y1: 140, x2: 90, y2: 180 },
            ring: { isActive: false, x1: 135, y1: 120, x2: 135, y2: 180 },
            middle: { isActive: true, x1: 185, y1: 110, x2: 185, y2: 180 },
            index: { isActive: false, x1: 235, y1: 130, x2: 235, y2: 180 },
            thumb: { isActive: false, x1: 280, y1: 220, x2: 250, y2: 250 },
        },
        fingersR: {
            thumb: { isActive: false, x1: -30, y1: 220, x2: 0, y2: 250 },
            index: { isActive: false, x1: 20, y1: 130, x2: 20, y2: 180 },
            middle: { isActive: false, x1: 65, y1: 110, x2: 65, y2: 180 },
            ring: { isActive: false, x1: 115, y1: 120, x2: 115, y2: 180 },
            pinky: { isActive: false, x1: 165, y1: 140, x2: 165, y2: 180 }
        }
    },
    KeyF: {
        activeFinger: "R-index",
        fingersL: {
            pinky: { isActive: false, x1: 90, y1: 140, x2: 90, y2: 180 },
            ring: { isActive: false, x1: 135, y1: 120, x2: 135, y2: 180 },
            middle: { isActive: false, x1: 185, y1: 110, x2: 185, y2: 180 },
            index: { isActive: true, x1: 235, y1: 130, x2: 235, y2: 180 },
            thumb: { isActive: false, x1: 280, y1: 220, x2: 250, y2: 250 },
        },
        fingersR: {
            thumb: { isActive: false, x1: -30, y1: 220, x2: 0, y2: 250 },
            index: { isActive: false, x1: 20, y1: 130, x2: 20, y2: 180 },
            middle: { isActive: false, x1: 65, y1: 110, x2: 65, y2: 180 },
            ring: { isActive: false, x1: 115, y1: 120, x2: 115, y2: 180 },
            pinky: { isActive: false, x1: 165, y1: 140, x2: 165, y2: 180 }
        }
    },
    KeyG: {
        activeFinger: "R-index",
        fingersL: {
            pinky: { isActive: false, x1: 90, y1: 140, x2: 90, y2: 180 },
            ring: { isActive: false, x1: 135, y1: 120, x2: 135, y2: 180 },
            middle: { isActive: false, x1: 185, y1: 110, x2: 185, y2: 180 },
            index: { isActive: true, x1: 280, y1: 135, x2: 235, y2: 180 },
            thumb: { isActive: false, x1: 280, y1: 220, x2: 250, y2: 250 },
        },
        fingersR: {
            thumb: { isActive: false, x1: -30, y1: 220, x2: 0, y2: 250 },
            index: { isActive: false, x1: 20, y1: 130, x2: 20, y2: 180 },
            middle: { isActive: false, x1: 65, y1: 110, x2: 65, y2: 180 },
            ring: { isActive: false, x1: 115, y1: 120, x2: 115, y2: 180 },
            pinky: { isActive: false, x1: 165, y1: 140, x2: 165, y2: 180 }
        }
    },
    KeyH: {
        activeFinger: "R-index",
        fingersL: {
            pinky: { isActive: false, x1: 90, y1: 140, x2: 90, y2: 180 },
            ring: { isActive: false, x1: 135, y1: 120, x2: 135, y2: 180 },
            middle: { isActive: false, x1: 185, y1: 110, x2: 185, y2: 180 },
            index: { isActive: false, x1: 235, y1: 130, x2: 235, y2: 180 },
            thumb: { isActive: false, x1: 280, y1: 220, x2: 250, y2: 250 },
        },
        fingersR: {
            thumb: { isActive: false, x1: -30, y1: 220, x2: 0, y2: 250 },
            index: { isActive: true, x1: -20, y1: 130, x2: 20, y2: 180 },
            middle: { isActive: false, x1: 65, y1: 110, x2: 65, y2: 180 },
            ring: { isActive: false, x1: 115, y1: 120, x2: 115, y2: 180 },
            pinky: { isActive: false, x1: 165, y1: 140, x2: 165, y2: 180 }
        }
    },
    KeyJ: {
        activeFinger: "R-index",
        fingersL: {
            pinky: { isActive: false, x1: 90, y1: 140, x2: 90, y2: 180 },
            ring: { isActive: false, x1: 135, y1: 120, x2: 135, y2: 180 },
            middle: { isActive: false, x1: 185, y1: 110, x2: 185, y2: 180 },
            index: { isActive: false, x1: 235, y1: 130, x2: 235, y2: 180 },
            thumb: { isActive: false, x1: 280, y1: 220, x2: 250, y2: 250 },
        },
        fingersR: {
            thumb: { isActive: false, x1: -30, y1: 220, x2: 0, y2: 250 },
            index: { isActive: true, x1: 20, y1: 130, x2: 20, y2: 180 },
            middle: { isActive: false, x1: 65, y1: 110, x2: 65, y2: 180 },
            ring: { isActive: false, x1: 115, y1: 120, x2: 115, y2: 180 },
            pinky: { isActive: false, x1: 165, y1: 140, x2: 165, y2: 180 }
        }
    },
    KeyK: {
        activeFinger: "R-index",
        fingersL: {
            pinky: { isActive: false, x1: 90, y1: 140, x2: 90, y2: 180 },
            ring: { isActive: false, x1: 135, y1: 120, x2: 135, y2: 180 },
            middle: { isActive: false, x1: 185, y1: 110, x2: 185, y2: 180 },
            index: { isActive: false, x1: 235, y1: 130, x2: 235, y2: 180 },
            thumb: { isActive: false, x1: 280, y1: 220, x2: 250, y2: 250 },
        },
        fingersR: {
            thumb: { isActive: false, x1: -30, y1: 220, x2: 0, y2: 250 },
            index: { isActive: false, x1: 20, y1: 130, x2: 20, y2: 180 },
            middle: { isActive: true, x1: 65, y1: 110, x2: 65, y2: 180 },
            ring: { isActive: false, x1: 115, y1: 120, x2: 115, y2: 180 },
            pinky: { isActive: false, x1: 165, y1: 140, x2: 165, y2: 180 }
        }
    },
    KeyL: {
        activeFinger: "R-index",
        fingersL: {
            pinky: { isActive: false, x1: 90, y1: 140, x2: 90, y2: 180 },
            ring: { isActive: false, x1: 135, y1: 120, x2: 135, y2: 180 },
            middle: { isActive: false, x1: 185, y1: 110, x2: 185, y2: 180 },
            index: { isActive: false, x1: 235, y1: 130, x2: 235, y2: 180 },
            thumb: { isActive: false, x1: 280, y1: 220, x2: 250, y2: 250 },
        },
        fingersR: {
            thumb: { isActive: false, x1: -30, y1: 220, x2: 0, y2: 250 },
            index: { isActive: false, x1: 20, y1: 130, x2: 20, y2: 180 },
            middle: { isActive: false, x1: 65, y1: 110, x2: 65, y2: 180 },
            ring: { isActive: true, x1: 115, y1: 120, x2: 115, y2: 180 },
            pinky: { isActive: false, x1: 165, y1: 140, x2: 165, y2: 180 }
        }
    },
    Semicolon: {
        activeFinger: "R-index",
        fingersL: {
            pinky: { isActive: false, x1: 90, y1: 140, x2: 90, y2: 180 },
            ring: { isActive: false, x1: 135, y1: 120, x2: 135, y2: 180 },
            middle: { isActive: false, x1: 185, y1: 110, x2: 185, y2: 180 },
            index: { isActive: false, x1: 235, y1: 130, x2: 235, y2: 180 },
            thumb: { isActive: false, x1: 280, y1: 220, x2: 250, y2: 250 },
        },
        fingersR: {
            thumb: { isActive: false, x1: -30, y1: 220, x2: 0, y2: 250 },
            index: { isActive: false, x1: 20, y1: 130, x2: 20, y2: 180 },
            middle: { isActive: false, x1: 65, y1: 110, x2: 65, y2: 180 },
            ring: { isActive: false, x1: 115, y1: 120, x2: 115, y2: 180 },
            pinky: { isActive: true, x1: 165, y1: 140, x2: 165, y2: 180 }
        }
    },
}
export const Hand = ({ side, currentKey }) => {
    if(!fingers[currentKey]) {
        currentKey="Rest"
    }
    return (
        <svg viewBox="0 0 300 240" opacity={0.8} preserveAspectRatio="xMidYMax meet" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
            {/* pinky */}
            <g>
                <line
                    x1={fingers[currentKey][side === 'L' ? 'fingersL' : 'fingersR'].pinky.x1} y1={fingers[currentKey][side === 'L' ? 'fingersL' : 'fingersR'].pinky.y1}
                    x2={fingers[currentKey][side === 'L' ? 'fingersL' : 'fingersR'].pinky.x2} y2={fingers[currentKey][side === 'L' ? 'fingersL' : 'fingersR'].pinky.y2}
                    stroke={fingers[currentKey][side === 'L' ? 'fingersL' : 'fingersR'].pinky.isActive ? "#2e6deb" : "#e8b894"}
                    strokeWidth="22"
                    strokeLinecap="round"
                />
            </g>
            {/* ring */}
            <g>
                <line
                    x1={fingers[currentKey][side === 'L' ? 'fingersL' : 'fingersR'].ring.x1} y1={fingers[currentKey][side === 'L' ? 'fingersL' : 'fingersR'].ring.y1}
                    x2={fingers[currentKey][side === 'L' ? 'fingersL' : 'fingersR'].ring.x2} y2={fingers[currentKey][side === 'L' ? 'fingersL' : 'fingersR'].ring.y2}
                    stroke={fingers[currentKey][side === 'L' ? 'fingersL' : 'fingersR'].ring.isActive ? "#2e6deb" : "#e8b894"}
                    strokeWidth="22"
                    strokeLinecap="round"
                />
            </g>
            {/* middle */}
            <g>
                <line
                    x1={fingers[currentKey][side === 'L' ? 'fingersL' : 'fingersR'].middle.x1} y1={fingers[currentKey][side === 'L' ? 'fingersL' : 'fingersR'].middle.y1}
                    x2={fingers[currentKey][side === 'L' ? 'fingersL' : 'fingersR'].middle.x2} y2={fingers[currentKey][side === 'L' ? 'fingersL' : 'fingersR'].middle.y2}
                    stroke={fingers[currentKey][side === 'L' ? 'fingersL' : 'fingersR'].middle.isActive ? "#2e6deb" : "#e8b894"}
                    strokeWidth="22"
                    strokeLinecap="round"
                />
            </g>
            {/* index */}
            <g>
                <line
                    x1={fingers[currentKey][side === 'L' ? 'fingersL' : 'fingersR'].index.x1} y1={fingers[currentKey][side === 'L' ? 'fingersL' : 'fingersR'].index.y1}
                    x2={fingers[currentKey][side === 'L' ? 'fingersL' : 'fingersR'].index.x2} y2={fingers[currentKey][side === 'L' ? 'fingersL' : 'fingersR'].index.y2}
                    stroke={fingers[currentKey][side === 'L' ? 'fingersL' : 'fingersR'].index.isActive ? "#2e6deb" : "#e8b894"}
                    strokeWidth="22"
                    strokeLinecap="round"
                />
            </g>
            {/* thumb */}
            <g>
                <line
                    x1={fingers[currentKey][side === 'L' ? 'fingersL' : 'fingersR'].thumb.x1} y1={fingers[currentKey][side === 'L' ? 'fingersL' : 'fingersR'].thumb.y1}
                    x2={fingers[currentKey][side === 'L' ? 'fingersL' : 'fingersR'].thumb.x2} y2={fingers[currentKey][side === 'L' ? 'fingersL' : 'fingersR'].thumb.y2}
                    stroke={fingers[currentKey][side === 'L' ? 'fingersL' : 'fingersR'].thumb.isActive ? "#2e6deb" : "#e8b894"}
                    strokeWidth="23"
                    strokeLinecap="round"
                />
            </g>
        </svg>
    )
}
