import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Dummy unitId (later this will come as a prop)
const dummyUnitId = "6a60e9883b3bd51377ab958b";

// Dummy API Response
const progress = {
    _id: "6a60f4c03535d61927bf1f79",
    userId: "6a60f4c03535d61927bf1f78",
    unitId: "6a60e9883b3bd51377ab958b",
    unitNumber: 1,
    unitNameEnglish: "Tamil Teachers",
    unitNameTamil: "தமிழ் ஆசிரியர்கள்",
    unitDescriptionEnglish:
        "Meet inspiring Tamil teachers and scholars who have dedicated their lives to preserving, teaching, and enriching the Tamil language and its rich literary heritage.",
    unitDescriptionTamil:
        "தமிழ் மொழியையும் அதன் செழுமையான இலக்கிய மரபையும் காத்து, கற்பித்து, வளர்த்த சிறந்த தமிழ் ஆசிரியர்கள் மற்றும் அறிஞர்களைப் பற்றி அறிந்து கொள்ளுங்கள்.",
    thumbnail: "units/U1/thumbnail.webp",

    characters: {
        character1: {
            isUnlocked: true,
            nameEnglish: "Tholkappiyar",
            nameTamil: "தொல்காப்பியர்",
            descriptionEnglish:
                "Wrote the Tolkappiyam, the oldest surviving Tamil grammar.",
            descriptionTamil:
                "தமிழின் மிகப் பழமையான இலக்கண நூலான தொல்காப்பியத்தை இயற்றினார்.",
            url: "units/U1/1.webp",
        },
        character2: { isUnlocked: false },
        character3: { isUnlocked: false },
        character4: { isUnlocked: false },
        character5: { isUnlocked: false },
        character6: { isUnlocked: false },
        character7: { isUnlocked: false },
    },

    lesson1: { wpm: 0, cpm: 0, accuracy: 0, stars: 0 },
    lesson2: { wpm: 0, cpm: 0, accuracy: 0, stars: 0 },
    lesson3: { wpm: 0, cpm: 0, accuracy: 0, stars: 0 },
    lesson4: { wpm: 0, cpm: 0, accuracy: 0, stars: 0 },
    lesson5: { wpm: 0, cpm: 0, accuracy: 0, stars: 0 },
    lesson6: { wpm: 0, cpm: 0, accuracy: 0, stars: 0 },
    lesson7: { wpm: 0, cpm: 0, accuracy: 0, stars: 0 },
};

const nodes = [1, 2, 3, 4, 5, 6, 7];

export const MiddlePanel = () => {
    const navigate = useNavigate();

    const [unitId] = useState(dummyUnitId);

    return (
        <div className="w-full h-full flex flex-col items-center py-[1rem] overflow-hidden">
            <p className="text-slate-400 text-xs mb-2 tracking-wide">
                அடுத்த அலகு
            </p>

            <div className="relative w-full flex-1 min-h-0">
                {(() => {
                    const gapWeights = [1, 2, 1, 1, 2, 1];
                    const totalWeight = gapWeights.reduce((a, b) => a + b, 0);
                    const range = 88;
                    const tops = [6];

                    gapWeights.forEach((w) => {
                        tops.push(
                            tops[tops.length - 1] + (w / totalWeight) * range
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
                                    progress[`lesson${lessonNo}`];

                                const unlocked =
                                    lessonNo === 1
                                        ? true
                                        : progress[`lesson${lessonNo - 1}`]
                                              .stars >= 1;

                                return (
                                    <React.Fragment key={lessonNo}>
                                        <div
                                            className={`absolute aspect-square w-[12%] max-w-[4.5rem] rounded-full flex items-center justify-center border-4 shadow-md -translate-x-1/2 -translate-y-1/2 transition-all
                                                ${
                                                    unlocked
                                                        ? "cursor-pointer hover:scale-105 bg-yellow-400 border-yellow-200"
                                                        : "bg-white border-slate-200 cursor-default"
                                                }`}
                                            style={{
                                                top: `${tops[idx]}%`,
                                                left: `${
                                                    leftPattern[
                                                        idx %
                                                            leftPattern.length
                                                    ]
                                                }%`,
                                            }}
                                            onClick={() => {
                                                if (!unlocked) return;

                                                navigate(
                                                    `/units/${unitId}/${lessonNo}`
                                                );
                                            }}
                                        >
                                            {unlocked ? (
                                                <div className="w-1/2 h-1/2 rounded-full bg-yellow-300" />
                                            ) : (
                                                <div className="w-1/2 h-1/2 flex items-center justify-center">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        fill="currentColor"
                                                        className="w-full h-full text-slate-500"
                                                    >
                                                        <path d="M17 8h-1V6a4 4 0 10-8 0v2H7a2 2 0 00-2 2v8a2 2 0 002 2h10a2 2 0 002-2v-8a2 2 0 00-2-2zm-7-2a2 2 0 114 0v2h-4V6z" />
                                                    </svg>
                                                </div>
                                            )}
                                        </div>

                                        {lesson.stars > 0 && (
                                            <div
                                                className="absolute flex items-center gap-1 -translate-y-1/2"
                                                style={{
                                                    top: `${tops[idx]}%`,
                                                    left: `${
                                                        leftPattern[
                                                            idx %
                                                                leftPattern
                                                                    .length
                                                        ] + 10
                                                    }%`,
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