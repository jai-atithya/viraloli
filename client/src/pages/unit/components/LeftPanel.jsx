import React from "react";
import { Lock, ChevronLeft, ChevronRight } from "lucide-react";
import SampleLogo from "../../../assets/tamilLogo.png";

const dynastyData = {
  title: "CHERA DYNASTY",
  logo: SampleLogo,
  description:
    "The Chera dynasty was one of the three great Tamil royal lineages. They ruled the western regions of ancient Tamil Nadu and excelled in maritime trade and cultural development.",

  topics: [
    { id: 1, image: SampleLogo, isUnlocked: true },
    { id: 2, image: SampleLogo, isUnlocked: false },
    { id: 3, image: SampleLogo, isUnlocked: false },
    { id: 4, image: SampleLogo, isUnlocked: true },
    { id: 5, image: SampleLogo, isUnlocked: false },
    { id: 6, image: SampleLogo, isUnlocked: true },
    { id: 7, image: SampleLogo, isUnlocked: false },
  ],
};

export const LeftPanel = ({ setPopupOpen }) => {
  return (
    <div className="h-full border border-slate-200 shadow-lg rounded-2xl p-5 md:p-6 flex flex-col">
      {/* Title with arrows on either side */}
      <div className="flex items-center justify-between mb-4">
        <button
          type="button"
          aria-label="Previous dynasty"
          className="p-2 rounded-full hover:bg-slate-100 transition-colors"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-slate-600" />
        </button>

        <h2
          onClick={() => setPopupOpen(true)}
          className="text-xl md:text-2xl lg:text-3xl font-bold text-center px-3 py-1 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
        >
          {dynastyData.title}
        </h2>

        <button
          type="button"
          aria-label="Next dynasty"
          className="p-2 rounded-full hover:bg-slate-100 transition-colors"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-slate-600" />
        </button>
      </div>

      {/* Image */}
      <div className="flex-1 flex items-center justify-center min-h-[10vh]">
        <img
          src={dynastyData.logo}
          alt={dynastyData.title}
          className="max-w-full max-h-full object-contain"
        />
      </div>

      {/* Description */}
      <p className="text-sm md:text-base text-center leading-6 mt-4">
        {dynastyData.description}
      </p>

      {/* Bottom */}
      <div className="flex-1 min-h-0">
        <div className="h-full w-full grid grid-cols-3 grid-rows-3 gap-3">
          {dynastyData.topics.map((topic) => (
            <div
              key={topic.id}
              className={`aspect-square h-full max-h-full rounded-full border shadow flex items-center justify-center overflow-hidden transition-all ${
                topic.isUnlocked
                  ? "bg-white border-slate-200"
                  : "bg-slate-100 border-slate-300"
              }`}
            >
              {topic.isUnlocked ? (
                <img
                  src={topic.image}
                  alt={`Topic ${topic.id}`}
                  className="w-1/2 h-1/2 object-contain"
                />
              ) : (
                <Lock className="w-6 h-6 text-slate-500" />
              )}
            </div>
          ))}

          <button className="col-span-2 rounded-xl border border-slate-300 py-2 px-3 flex items-center justify-center gap-2 text-sm md:text-base font-medium text-slate-700 hover:bg-slate-50 transition">
            <img
              src={dynastyData.logo}
              alt="Notes"
              className="w-5 h-5 object-contain"
            />
            குறிப்புகள்
          </button>
        </div>
      </div>
    </div>
  );
};