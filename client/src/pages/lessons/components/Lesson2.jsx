import React, { useMemo } from "react";
import { TypeEngine } from "../../../typeEngine/TypeEngine";

export const Lesson2 = ({ lesson }) => {
  const parsedLesson = useMemo(() => {
    if (!lesson) return null;

    return {
      sentence: lesson.characters.map((char) => char.name).join(" "),
      units: lesson.characters.flatMap((char, index) => {
        const unit = {
          text: char.name,
          keys: char.keyMap.flat(),
        };

        // Add a space between characters except after the last one
        if (index !== lesson.characters.length - 1) {
          return [
            unit,
            {
              text: " ",
              keys: [
                {
                  code: "Space",
                  altKey: false,
                  ctrlKey: false,
                  metaKey: false,
                  shiftKey: false,
                },
              ],
            },
          ];
        }

        return [unit];
      }),
    };
  }, [lesson]);

  return (
    <div className="w-full h-full p-[1rem] flex flex-col justify-center items-center">
      {parsedLesson && <TypeEngine lesson={parsedLesson} />}
    </div>
  );
};