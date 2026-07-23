import React from "react";
import { useNavigate } from "react-router-dom";

const nodes = [1, 2, 3, 4, 5, 6, 7];

export const MiddlePanel = ({
  progress,
  language,
  loading,
}) => {
  const navigate = useNavigate();

  if (loading) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <p className="text-slate-500">
          {language === "Tamil" ? "ஏற்றப்படுகிறது..." : "Loading..."}
        </p>
      </div>
    );
  }

  if (!progress) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <p className="text-slate-500">
          {language === "Tamil"
            ? "தரவு இல்லை"
            : "No progress available"}
        </p>
      </div>
    );
  }

  const isTamil = language === "Tamil";

  const unitNumber = progress.unitNumber;

  const unitTitle = isTamil
    ? progress.unitNameTamil
    : progress.unitNameEnglish;

  const unitDescription = isTamil
    ? progress.unitDescriptionTamil
    : progress.unitDescriptionEnglish;

  return (
    <div className="w-full h-full flex flex-col items-center py-4 overflow-hidden">
      <div className="flex flex-col items-center mb-5 px-6">
        <p className="text-slate-400 text-xs tracking-wide">
          {isTamil ? `அலகு ${progress.unitNumber}` : `Unit ${progress.unitNumber}`}
        </p>
      </div>

      <div className="relative w-full flex-1 min-h-0">
        {(() => {
          const gapWeights = [1, 2, 1, 1, 2, 1];
          const totalWeight = gapWeights.reduce((a, b) => a + b, 0);

          const range = 88;

          const tops = [6];

          gapWeights.forEach((w) => {
            tops.push(
              tops[tops.length - 1] +
                (w / totalWeight) * range
            );
          });

          const leftPattern = [50, 25, 25, 50, 75, 75, 50];

          return (
            <>
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <polyline
                  points={nodes
                    .map(
                      (_, idx) =>
                        `${leftPattern[idx]},${tops[idx]}`
                    )
                    .join(" ")}
                  fill="none"
                  stroke="#cbd5e1"
                  strokeWidth="0.6"
                  strokeDasharray="2,2"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>

              {nodes.map((lessonNo, idx) => {
                const lesson =
                  progress[`lesson${lessonNo}`] ?? {
                    stars: 0,
                  };

                const unlocked =
                  lessonNo === 1
                    ? true
                    : (progress[
                        `lesson${lessonNo - 1}`
                      ]?.stars ?? 0) >= 1;

                const character =
                  progress.characters?.[
                    `character${lessonNo}`
                  ];

                const characterName = character
                  ? isTamil
                    ? character.nameTamil
                    : character.nameEnglish
                  : "";

                return (
                  <React.Fragment key={lessonNo}>
                    <div
                      className={`absolute flex flex-col items-center -translate-x-1/2 -translate-y-1/2`}
                      style={{
                        top: `${tops[idx]}%`,
                        left: `${leftPattern[idx]}%`,
                      }}
                    >
                      <button
                        className={`aspect-square w-[12%] min-w-[48px] max-w-[72px] rounded-full flex items-center justify-center border-4 shadow-md transition-all
                          ${
                            unlocked
                              ? "cursor-pointer hover:scale-105 bg-yellow-400 border-yellow-200"
                              : "bg-white border-slate-200 cursor-default"
                          }`}
                        onClick={() => {
                          if (!unlocked) return;

                          navigate(
                            `/units/${unitNumber}/${lessonNo}`
                          );
                        }}
                      >
                        {unlocked ? (
                          <div className="w-1/2 h-1/2 rounded-full bg-yellow-300" />
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-6 text-slate-500"
                          >
                            <path d="M17 8h-1V6a4 4 0 10-8 0v2H7a2 2 0 00-2 2v8a2 2 0 002 2h10a2 2 0 002-2v-8a2 2 0 00-2-2zm-7-2a2 2 0 114 0v2h-4V6z" />
                          </svg>
                        )}
                      </button>
                    </div>

                    {lesson.stars > 0 && (
                      <div
                        className="absolute flex items-center gap-1"
                        style={{
                          top: `${tops[idx]}%`,
                          left: `${
                            leftPattern[idx] + 10
                          }%`,
                          transform:
                            "translateY(-50%)",
                        }}
                      >
                        {Array.from({
                          length: lesson.stars,
                        }).map((_, starIndex) => (
                          <svg
                            key={starIndex}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="#FBBF24"
                            className="w-4 h-4"
                          >
                            <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.784 1.401 8.169L12 19.296l-7.335 3.867 1.401-8.169L.132 9.21l8.2-1.192z" />
                          </svg>
                        ))}
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </>
          );
        })()}
      </div>
    </div>
  );
};