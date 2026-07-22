import React from 'react'
import SampleLogo from '../../../assets/tamilLogo.png' 

export const RightPanel = () => {
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
        <div className='h-full border border-slate-200 shadow-lg rounded-2xl p-5 md:p-6 flex flex-col '>

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
    )
}
