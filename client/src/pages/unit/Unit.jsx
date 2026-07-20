import React, { useState } from 'react'
import { Navbar } from '../components/Navbar'
import SampleLogo from '../../assets/tamilLogo.png'

export const Unit = () => {
  const [isOdd, setIsOdd] = useState(false);

  // dummy path nodes - top one active/unlocked, rest locked
  const nodes = [1, 2, 3, 4, 5, 6, 7];

  // dummy calendar days for the current week
  const weekDays = [
    { day: 'Mo', date: 13, done: true },
    { day: 'Tu', date: 14, done: true },
    { day: 'We', date: 15, done: true },
    { day: 'Th', date: 16, done: true },
    { day: 'Fr', date: 17, done: false },
    { day: 'Sa', date: 18, done: false },
    { day: 'Su', date: 19, done: false },
  ];

  return (
    <>
      <div className='flex flex-col h-[100vh] w-[100vw] p-[1rem] gap-[1rem] bg-white'>
        <div className='h-[10vh]'>
          <Navbar />
        </div>
        <div className='w-full h-full flex gap-[1rem]'>

          {/* LEFT PANEL */}
          <div className='bg-white border border-slate-200 shadow-sm w-[25%] rounded-[0.3rem] p-[1rem] flex flex-col justify-center items-center gap-[0.75rem]'>
            <div>
              <p className='text-slate-800 font-bold text-lg tracking-wide'>TITLE</p>
            </div>
            <div className='w-24 h-24 flex items-center justify-center'>
              <img src={SampleLogo} className='w-full h-full object-contain' />
            </div>
            <div>
              <p className='text-slate-500 text-sm text-center leading-relaxed'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem obcaecati pariatur repellendus laudantium ratione corrupti voluptatum distinctio minus, nam odit sit cum, officia ab enim. Dignissimos sit fuga delectus deleniti?
              </p>
            </div>
            <div className='grid grid-cols-3 gap-3 mt-2'>
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className='w-10 h-10 rounded-full border border-slate-200 bg-slate-50 flex items-center justify-center p-1 shadow-sm'
                >
                  <img src={SampleLogo} className='w-full h-full object-contain rounded-full' />
                </div>
              ))}
            </div>
            <button className='w-full mt-2 flex items-center justify-center gap-2 border border-slate-200 rounded-[0.4rem] py-2 text-sm text-slate-600 hover:bg-slate-50'>
              <img src={SampleLogo} className='w-4 h-4 object-contain' />
              குறிப்புகள்
            </button>
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
                          <img src={SampleLogo} className='w-1/2 h-1/2 object-contain opacity-70' />
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