import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import { Navbar } from "../components/Navbar";
import axios from "../../api/axios";

import { Lesson1 } from "./components/Lesson1";
import { Lesson2 } from "./components/Lesson2";
import { Lesson3 } from "./components/Lesson3";
import { Lesson4 } from "./components/Lesson4";
import { Lesson5 } from "./components/Lesson5";
import { Lesson6 } from "./components/Lesson6";
import { Lesson7 } from "./components/Lesson7";

const BASE_URL = import.meta.env.VITE_SERVER_URL;

export const Lessons = () => {
  const { unitNumber, lessonNumber } = useParams();
  const navigate = useNavigate();
  const { language } = useLanguage();

  const [lesson, setLesson] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [nextLessonUnlocked, setNextLessonUnlocked] = useState(true);

  useEffect(() => {
    setNextLessonUnlocked(false);

    const fetchLesson = async () => {
      try {
        setLoading(true);
        setError("");

        const { data } = await axios.get(
          `/lesson/${unitNumber}/${lessonNumber}`
        );

        setLesson(data.data);
      } catch (err) {
        if (err.response?.status === 404) {
          setError("Lesson not found");
        } else {
          setError("Failed to load lesson");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchLesson();
  }, [unitNumber, lessonNumber]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col h-screen w-screen p-4">
        <div className="h-[10vh]">
          <Navbar />
        </div>

        <div className="flex-1 flex items-center justify-center text-xl font-semibold text-red-500">
          {error}
        </div>
      </div>
    );
  }

  const title =
    language === "Tamil"
      ? lesson.headingTamil
      : lesson.headingEnglish;

  const description =
    language === "Tamil"
      ? lesson.descriptionTamil
      : lesson.descriptionEnglish;

  const video =
    language === "Tamil"
      ? `${BASE_URL}/uploads/${lesson.videoUrlTamil}`
      : `${BASE_URL}/uploads/${lesson.videoUrlEnglish}`;

  return (
    <div className="flex flex-col h-screen w-screen p-4 gap-4 bg-white overflow-hidden">
      <div className="h-[10vh]">
        <Navbar />
      </div>

      <div className="flex-1 min-h-0 overflow-hidden">
        {lessonNumber === "1" && (
          <Lesson1
            title={title}
            description={description}
            video={video}
            onComplete={() => setNextLessonUnlocked(true)}
          />
        )}

        {lessonNumber === "2" && (
          <Lesson2
            lesson={lesson}
            onComplete={() => setNextLessonUnlocked(true)}
          />
        )}

        {lessonNumber === "3" && (
          <Lesson3
            lesson={lesson}
            onComplete={() => setNextLessonUnlocked(true)}
          />
        )}

        {lessonNumber === "4" && (
          <Lesson4
            lesson={lesson}
            onComplete={() => setNextLessonUnlocked(true)}
          />
        )}

        {lessonNumber === "5" && (
          <Lesson5
            lesson={lesson}
            onComplete={() => setNextLessonUnlocked(true)}
          />
        )}

        {lessonNumber === "6" && (
          <Lesson6
            lesson={lesson}
            onComplete={() => setNextLessonUnlocked(true)}
          />
        )}

        {lessonNumber === "7" && (
          <Lesson7
            lesson={lesson}
            onComplete={() => setNextLessonUnlocked(true)}
          />
        )}
      </div>

      <div className="flex justify-end">
        <button
          className="px-6 py-3 rounded-lg font-medium bg-blue-600 text-white hover:bg-blue-700 transition"
          onClick={() => {
            navigate(`/units/${unitNumber}/${Number(lessonNumber) + 1}`);
            setTimeout(() => {
              window.location.reload();
            }, 0);
          }}
        >
          Next Lesson →
        </button>
      </div>
    </div>
  );
};