import React from 'react'
// dummy path nodes - top one active/unlocked, rest locked
const nodes = [1, 2, 3, 4, 5, 6, 7];

export const MiddlePanel = () => {
    return (
        <div className='w-full h-full flex flex-col items-center py-[1rem] overflow-hidden '>
            <p className='text-slate-400 text-xs mb-2 tracking-wide'>அடுத்த அலகு</p>

            <div className='relative w-full flex-1 min-h-0'>

                {(() => {
                    const gapWeights = [1, 2, 1, 1, 2, 1]; // extra space for 2-3 and 6-7
                    const totalWeight = gapWeights.reduce((a, b) => a + b, 0);
                    const range = 88; // matches old 6 -> 94 span
                    const tops = [6];
                    gapWeights.forEach((w) => {
                        tops.push(tops[tops.length - 1] + (w / totalWeight) * range);
                    });
                    const leftPattern = [50, 25, 25, 50, 75, 75, 50];

                    return (
                        <>
                            <svg
                                className='absolute inset-0 w-full h-full'
                                viewBox='0 0 100 100'
                                preserveAspectRatio='none'
                            >
                                <polyline
                                    points={nodes
                                        .map((_, idx) => `${leftPattern[idx % leftPattern.length]},${tops[idx]}`)
                                        .join(' ')}
                                    fill='none'
                                    stroke='#cbd5e1'
                                    strokeWidth='0.6'
                                    strokeDasharray='2,2'
                                    vectorEffect='non-scaling-stroke'
                                />
                            </svg>

                            {nodes.map((node, idx) => (
                                <div
                                    key={node}
                                    className={`absolute aspect-square w-[12%] max-w-[4.5rem] rounded-full flex items-center justify-center border-4 shadow-md -translate-x-1/2 -translate-y-1/2
                          ${idx === 0 ? 'bg-yellow-400 border-yellow-200' : 'bg-white border-slate-200'}
                        `}
                                    style={{ top: `${tops[idx]}%`, left: `${leftPattern[idx % leftPattern.length]}%` }}
                                >
                                    {idx === 0 ? (
                                        <div className='w-1/2 h-1/2 rounded-full bg-yellow-300' />
                                    ) : (

                                        <div className="w-1/2 h-1/2 flex items-center justify-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                                className="w-full h-full text-slate-500">
                                                <path d="M17 8h-1V6a4 4 0 10-8 0v2H7a2 2 0 00-2 2v8a2 2 0 002 2h10a2 2 0 002-2v-8a2 2 0 00-2-2zm-7-2a2 2 0 114 0v2h-4V6z" />
                                            </svg>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </>
                    );
                })()}
            </div>
        </div>
    )
}
