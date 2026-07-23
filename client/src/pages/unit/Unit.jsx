import React, { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import { LeftPanel } from "./components/LeftPanel";
import { MiddlePanel } from "./components/MiddlePanel";
import { RightPanel } from "./components/RightPanel";
import { useLanguage } from "../../context/LanguageContext";
import axios from "../../api/axios";

export const Unit = () => {
  const { language } = useLanguage();

  const [progress, setProgress] = useState(null);
  const [loading, setLoading] = useState(true);
  const [popupOpen,setPopupOpen] = useState(false);

  useEffect(() => {
    const fetchCurrentProgress = async () => {
      try {
        setLoading(true);

        const response = await axios.get("/progress/current");

        setProgress(response.data.data);
      } catch (error) {
        console.error("Failed to fetch current progress:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCurrentProgress();
  }, []);

  return (
    <div className="flex flex-col h-[100vh] w-[100vw] p-[1rem] gap-[1rem] bg-white">
      <div className="h-[10vh]">
        <Navbar />
      </div>

      <div className="flex-1 flex gap-4 min-h-0">
        <div className="w-full lg:w-1/4 h-full">
          <LeftPanel
            progress={progress}
            loading={loading}
            language={language}
            setPopupOpen={setPopupOpen}
          />
        </div>

        <div className="flex-1 h-full">
          <MiddlePanel
            progress={progress}
            loading={loading}
            language={language}
          />
        </div>

        <div className="w-full lg:w-1/4 h-full">
          <RightPanel
            progress={progress}
            loading={loading}
            language={language}
          />
        </div>
      </div>
    </div>
  );
};