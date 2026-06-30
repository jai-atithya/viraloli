import React, { useEffect, useState } from "react";

export const Engine = ({ 
    lesson, 
    allowNext, 
    pressedKey, 
    setPressedKey,
    currentUnit,
    setCurrentUnit,
    currentKey,
    setCurrentKey,
    unitsState,
    setUnitsState
}) => {


    useEffect(() => {
        if (!pressedKey) return;
        if (currentUnit >= lesson.units.length) return;

        if (pressedKey.code === "Backspace") {
            if (!allowNext) return;

            let newCurrentUnit = currentUnit;
            if (unitsState[currentUnit].progress === 0) {
                newCurrentUnit = Math.max(0, currentUnit - 1);
                setCurrentUnit(newCurrentUnit);
            }

            const updated = [...unitsState];
            updated[newCurrentUnit] = {
                ...updated[newCurrentUnit],
                status: "pending",
                progress: updated[newCurrentUnit].progress === 0 ? 0 : updated[newCurrentUnit].progress - 1,
            };

            setUnitsState(updated);
            setCurrentKey(updated[newCurrentUnit].progress);
            setPressedKey(null);
            return;
        }


        const unit = lesson.units[currentUnit];
        const expectedKey = unit.keys[currentKey];


        if (pressedKey.code === expectedKey) {
            const updated = [...unitsState];

            updated[currentUnit] = {
                ...updated[currentUnit],
                progress: currentKey + 1,
            };

            if (currentKey + 1 === unit.keys.length) {
                updated[currentUnit].status = "correct";

                setUnitsState(updated);
                setCurrentUnit((prev) => prev + 1);
                setCurrentKey(0);
            } else {
                setUnitsState(updated);
                setCurrentKey((prev) => prev + 1);
            }
        }

        else {
            const updated = [...unitsState];

            updated[currentUnit] = {
                ...updated[currentUnit],
                status: "wrong",
                progress: currentKey + 1,
            };

            setUnitsState(updated);

            if (allowNext) {
                setCurrentUnit((prev) => prev + 1);
                setCurrentKey(0);
            } 
        }
        setPressedKey(null);
    }, [pressedKey]);

    const getColor = (index) => {
        if (unitsState[index].status === "correct") return "#d9ffd9";
        if (unitsState[index].status === "wrong") return "#ffd4d4";
        if (index === currentUnit) return "#ffa500";
        return "#ffffff";
    };

    const getTextColor = (index) => {
        if (unitsState[index].status === "correct") return "#3ed000";
        if (unitsState[index].status === "wrong") return "#950000";
        if (index === currentUnit) return "#000000";
        return "#000000";
    }

    return (
        <div style={{ userSelect: "none" }} className="w-full bg-yellow-200">
            <div className="flex flex-wrap">
                {lesson.units.map((unit, index) => (
                    <div key={index} className={`p-[0.2rem] text-[3rem] min-w-[2rem]`} style={{ backgroundColor: getColor(index), color: getTextColor(index) }}>
                        {unit.text}
                    </div>
                    // <span
                    //     key={index}
                    //     style={{
                    //         color: getColor(index),
                    //         marginRight: 4,
                    //     }}
                    // >
                    //     {unit.text}
                    // </span>
                ))}
            </div>

            <p>
                <b>Current Character:</b>{" "}
                {lesson.units[currentUnit]?.text === " "
                    ? "Space"
                    : lesson.units[currentUnit]?.text ?? "Finished"}
            </p>

            <p>
                <b>Expected Key:</b>{" "}
                {lesson.units[currentUnit]?.keys?.[currentKey] ?? "-"}
            </p>

        </div>
    );
};