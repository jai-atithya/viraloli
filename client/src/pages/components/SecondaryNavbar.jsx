import React from 'react'

export const SecondaryNavbar = ({List, current, setCurrent}) => {
  return (
    <>
        <div className="flex w-full gap-[1rem]">
            {List.map((item, index) => (
                <div className={`w-full text-center p-[0.2rem] rounded-[0.2rem] ${index === current ? 'bg-slate-400 hover:bg-slate-100' : 'bg-slate-200 hover:bg-slate-100'}`} key={index} onClick={() => setCurrent(index)}>
                    {item}
                </div>
            ))}
        </div>
    </>
  )
}
