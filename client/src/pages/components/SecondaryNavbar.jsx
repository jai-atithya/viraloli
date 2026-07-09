import React from 'react'

export const SecondaryNavbar = ({List}) => {
  return (
    <>
        <div className="flex w-full gap-[1rem]">
            {List.map((item) => (
                <div className="w-full bg-slate-400 text-center p-[0.2rem] rounded-[0.2rem]">
                    {item}
                </div>
            ))}
        </div>
    </>
  )
}
