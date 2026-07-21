import React, { useState } from 'react'
import { Navbar } from '../components/Navbar'
import SampleLogo from '../../assets/tamilLogo.png'
import { Lock } from "lucide-react";
export const Unit = () => {
  const [isOdd, setIsOdd] = useState(false);

  // dummy path nodes - top one active/unlocked, rest locked
  const nodes = [1, 2, 3, 4, 5, 6, 7];

  // dummy calendar days for the current week
  const weekDays = [
    { day: 'Su', date: 12, done: true },
    { day: 'Mo', date: 13, done: true },
    { day: 'Tu', date: 14, done: true },
    { day: 'We', date: 15, done: true },
    { day: 'Th', date: 16, done: true },
    { day: 'Fr', date: 17, done: false },
    { day: 'Sa', date: 18, done: false },
  ];

  return (
    <>
      <div className='flex flex-col h-[100vh] w-[100vw] p-[1rem] gap-[1rem] bg-white'>
        <div className='h-[10vh]'>
          <Navbar />
        </div>
        <div className='w-full h-full flex  gap-[1rem]'>

          {/* LEFT PANEL */}
          <div className="bg-white border border-slate-200 shadow-lg w-[25%] rounded-2xl p-8 flex flex-col justify-between items-center gap-6">
            <h2 className="text-3xl font-bold text-slate-800 tracking-wide">CHERA DYNASTY</h2>
            <div className="w-36 h-36 flex items-center justify-center">
              <img
                src={SampleLogo}
                className="w-full h-full object-contain"
                alt="Chera Dynasty"
              />
            </div>
            <p className="text-slate-600 text-base text-center leading-8 px-2">The Chera dynasty was one of the three great Tamil royal lineages;They ruled the western regions of ancient Tamil Nadu and excelled in maritime trade and cultural development.</p>
            <div className="w-full grid grid-cols-3 gap-5 mt-2">
              {[...Array(7)].map((_, i) => (
                <div
                  key={i}
                  className="w-16 h-16 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center">
                  <img
                    src={SampleLogo}
                    className="w-12 h-12 object-contain rounded-full blur-[1px]"
                    alt=""
                  />
                </div>

              ))}
              <button className="w-full col-span-2 flex items-center justify-center gap-3 border border-slate-300 rounded-xl py-4 text-lg font-medium text-slate-700 hover:bg-slate-50 transition-all duration-200">
              <img
                src={SampleLogo}
                className="w-5 h-5 object-contain"
                alt=""
              />
              குறிப்புகள்
            </button>
            </div>
          </div>

          {/* MIDDLE PANEL - path */}

          <div className='w-[50%] h-full flex flex-col items-center py-[1rem] overflow-hidden'>
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
                              <path d="M17 8h-1V6a4 4 0 10-8 0v2H7a2 2 0 00-2 2v8a2 2 0 002 2h10a2 2 0 002-2v-8a2 2 0 00-2-2zm-7-2a2 2 0 114 0v2h-4V6z"/>
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

          {/* RIGHT PANEL */}
          <div className='bg-white border border-slate-200 shadow-sm w-[25%] rounded-[0.3rem] p-[1rem] flex flex-col gap-[1rem]'>

            {/* streak header */}
            <div className='flex items-center justify-between border-b border-slate-100 pb-3'>
              <div className='flex items-center gap-2'>
                <span className='text-orange-500 text-xl'>🔥</span>
                <span className='font-bold text-slate-800 text-lg'>4</span>
              </div>
              <div className='text-slate-600 text-sm font-medium'>
                அதிகபட்சம் <span className='text-slate-800 font-bold'>120</span>
              </div>
            </div>

            {/* calendar */}
            <div>
              <p className='text-slate-700 font-semibold text-sm mb-2'>2026 June</p>
              <div className='grid grid-cols-7 gap-1 text-center text-xs'>
                {weekDays.map((d) => (
                  <div key={d.date} className='flex flex-col items-center gap-1'>
                    <span className='text-slate-400'>{d.day}</span>
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px]
                        ${d.done
                          ? 'bg-green-100 text-green-600'
                          : d.date === 17
                            ? 'bg-blue-500 text-white'
                            : 'text-slate-500'}
                      `}
                    >
                      {d.done ? '✓' : d.date}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* chat bubble + mascot */}
            <div className='mt-auto flex items-end gap-2'>
              <div className='bg-slate-50 border border-slate-200 rounded-[0.5rem] p-3 text-xs text-slate-600 leading-relaxed'>
                என் நாட்டில் விலையற்ற திரவும் விட்டு வந்தான்.
              </div>
              <img src={SampleLogo} className='w-14 h-14 object-contain shrink-0' />
            </div>
          </div>

        </div>
      </div>
    </>
  )
}