import React from "react";
import { Lock, ChevronLeft, ChevronRight } from "lucide-react";
import SampleLogo from "../../../assets/tamilLogo.png";

const BASE_URL = import.meta.env.VITE_SERVER_URL;

export const LeftPanel = ({
  progress,
  language,
  setPopupOpen,
}) => {
  if (!progress) {
    return (
      <div className="h-full border border-slate-200 shadow-lg rounded-2xl flex items-center justify-center">
        Loading...
      </div>
    );
  }

  const isTamil = language === "Tamil";

  const title = isTamil
    ? progress.unitNameTamil
    : progress.unitNameEnglish;

  const description = isTamil
    ? progress.unitDescriptionTamil
    : progress.unitDescriptionEnglish;

  const characters = Object.values(progress.characters);

  return (
    <div className="h-full border border-slate-200 shadow-lg rounded-2xl p-4 flex flex-col overflow-hidden">
      {/* Title */}
      <div className="flex items-center justify-between mb-3 gap-1">
        <button
          type="button"
          className="shrink-0 p-1.5 rounded-full hover:bg-slate-100 transition-colors"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-slate-600" />
        </button>

        <h2
          onClick={() => setPopupOpen(true)}
          className="flex-1 min-w-0 truncate whitespace-nowrap text-center text-base sm:text-lg font-bold px-2 py-1 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
        >
          {isTamil
            ? `அ${progress.unitNumber}: ${title}`
            : `U${progress.unitNumber}: ${title}`
          }
        </h2>

        <button
          type="button"
          className="shrink-0 p-1.5 rounded-full hover:bg-slate-100 transition-colors"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-slate-600" />
        </button>
      </div>

      {/* Unit Thumbnail */}
      <div className="flex-1 flex items-center justify-center min-h-[8vh] max-h-[22vh]">
        <img
          src={`${BASE_URL}/uploads/${progress.thumbnail}`}
          alt={title}
          className="max-w-full max-h-full object-contain border border-slate-200 rounded-2xl"
        />
      </div>

      {/* Description */}
      <div className="mt-3 mb-5 flex justify-center">
        <p className="max-w-md text-xs sm:text-sm leading-6 text-left text-slate-700">
          {description}
        </p>
      </div>

      {/* Characters */}
      <div className="flex-1 min-h-0">
        <div className="h-full w-full grid grid-cols-4 auto-rows-fr gap-2 sm:gap-3">
          {characters.map((character, index) => (
            <div
              key={index}
              className={`aspect-square h-full max-h-full rounded-full border shadow flex items-center justify-center overflow-hidden ${character.isUnlocked
                ? "bg-white border-slate-200"
                : "bg-slate-100 border-slate-300"
                }`}
            >
              {character.isUnlocked ? (
                <img
                  src={`${BASE_URL}/uploads/${character.url}`}
                  alt={
                    isTamil
                      ? character.nameTamil
                      : character.nameEnglish
                  }
                  className="w-auto h-2/3 object-contain"
                />
              ) : (
                <Lock className="w-4 h-4 sm:w-5 sm:h-5 text-slate-500" />
              )}
            </div>
          ))}

          <button className="col-span-4 mt-3 rounded-xl border border-slate-300 py-2 px-3 flex items-center justify-center gap-2 text-xs sm:text-sm font-medium text-slate-700 hover:bg-slate-50 transition">
            {isTamil ? "குறிப்புகள்" : "Notes"}
          </button>
        </div>
      </div>
    </div>
  );
};