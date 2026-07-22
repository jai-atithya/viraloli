import React from 'react'
import SampleLogo from '../../../assets/tamilLogo.png' 

export const LeftPanel = () => {
    return (
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
    )
}
