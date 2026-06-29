import React, { useEffect, useState } from "react";

export const Engine = ({lesson}) => {

    const [currentUnit, setCurrentUnit] = useState(0);
    const [currentKey, setCurrentKey] = useState(0);


    const [allowNext] = useState(false);

    const [unitsState, setUnitsState] = useState(
        lesson.units.map(() => ({
            status: "pending",
            progress: 0,
        }))
    );
    // useEffect(() => {
    //     console.log("Current Unit changed:", currentUnit);
    // }, [currentUnit]);
    // useEffect(() => {
    //     console.log("Units State changed:", unitsState);
    // }, [unitsState]);
    useEffect(() => {
        const handleKeyDown = (e) => {
            e.preventDefault();

            if (e.code === "Backspace") {
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
                return;
            }

            if (currentUnit >= lesson.units.length) return;

            const unit = lesson.units[currentUnit];
            const expectedKey = unit.keys[currentKey];

            // console.log("Pressed :", e.code);
            // console.log("key: ", e.key);
            // console.log("Expected:", expectedKey);

            if (e.code === expectedKey) {
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
                };

                setUnitsState(updated);

                if (allowNext) {
                    setCurrentUnit((prev) => prev + 1);
                    setCurrentKey(0);
                } else {
                    setCurrentKey(updated[currentUnit].progress);
                }
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [currentUnit, currentKey, unitsState, allowNext]);

    const getColor = (index) => {
        if (unitsState[index].status === "correct") return "green";
        if (unitsState[index].status === "wrong") return "red";
        if (index === currentUnit) return "orange";
        return "#444";
    };

    return (
        <div
            style={{
                padding: 40,
                userSelect: "none",
                fontSize: 22,
            }}
        >
            {lesson.units.map((unit, index) => (
                <span
                    key={index}
                    style={{
                        color: getColor(index),
                        marginRight: 4,
                    }}
                >
                    {unit.text}
                </span>
            ))}

            <hr />

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