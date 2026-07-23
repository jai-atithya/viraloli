import React from "react";
import { TypeEngine } from "../../../typeEngine/TypeEngine";

export const Lesson4 = ({ lesson }) => {
  if (!lesson) return null;

  return (
    <div className="w-full h-full p-[1rem] flex flex-col justify-center items-center">
      <TypeEngine lesson={lesson.characters} />
    </div>
  );
};