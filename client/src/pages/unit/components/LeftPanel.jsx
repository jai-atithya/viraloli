import React from "react";
import SampleLogo from "../../../assets/tamilLogo.png";

export const LeftPanel = () => {
    return (
        <div className="h-full border border-slate-200 shadow-lg rounded-2xl p-5 md:p-6 flex flex-col ">
            {/* Title */}
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center mb-4">
                CHERA DYNASTY
            </h2>

            {/* Image */}
            <div className="flex-1 flex items-center justify-center min-h-[10vh]">
                <img
                    src={SampleLogo}
                    alt="Chera Dynasty"
                    className="max-w-full max-h-full object-contain"
                />
            </div>

            {/* Description */}
            <p className="text-sm md:text-base text-center leading-6 mt-4">
                The Chera dynasty was one of the three great Tamil royal lineages. They ruled
                the western regions of ancient Tamil Nadu and excelled in maritime trade and
                cultural development.
            </p>

            {/* Bottom */}
            <div className="flex-1 min-h-0">
                <div className="h-full w-full grid grid-cols-3 grid-rows-3 gap-3">

                    {[...Array(7)].map((_, i) => (
                        <div
                            key={i}
                            className="aspect-square h-full max-h-full rounded-full bg-white border border-slate-200 shadow flex items-center justify-center overflow-hidden"
                        >
                            <img
                                src={SampleLogo}
                                alt=""
                                className="w-1/2 h-1/2 rounded-full object-contain"
                            />
                        </div>
                    ))}

                    <button className="col-span-2 rounded-xl border border-slate-300 py-2 px-3 flex items-center justify-center gap-2 text-sm md:text-base font-medium text-slate-700 hover:bg-slate-50 transition">
                        <img
                            src={SampleLogo}
                            alt=""
                            className="w-5 h-5 object-contain"
                        />
                        குறிப்புகள்
                    </button>
                </div>
            </div>
        </div>
    );
};