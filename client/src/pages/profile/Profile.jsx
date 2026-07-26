import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { HeatMap } from "./components/HeatMap";
import { ProfileCard } from "./components/ProfileCard";
import { StatsCard } from "./components/StatsCard";
import AccuracySpeedChart from "./components/AccuracySpeedChart";
import { useLanguage } from "../../context/LanguageContext";
import axios from "../../api/axios";

export const Profile = () => {
  const { language } = useLanguage();
  const { username } = useParams();

  const [selectedYear, setSelectedYear] = useState("Current");
  const [loading, setLoading] = useState(true);

  const [profileData, setProfileData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        setLoading(true);

        const endpoint =
          selectedYear === "Current"
            ? `/session/year/${username}`
            : `/session/${username}/${selectedYear}`;

        const { data } = await axios.get(endpoint);

        setProfileData(data);
      } catch (err) {
        if (err.response?.status === 404) {
          setError("User not found");
        } else {
          setError("Something went wrong");
        }

        setProfileData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [username, selectedYear]);

  const text =
    language === "Tamil"
      ? {
        lessons: "பாடங்கள் முடித்தது",
        units: "அலகுகள் முடித்தது",
        streak: "தினசரி தொடர்",
        accuracy: "துல்லியம்",
        total: "மொத்தம்",
        days: "நாட்கள்",
        average: "சராசரி",
      }
      : {
        lessons: "Lessons Completed",
        units: "Units Completed",
        streak: "Current Streak",
        accuracy: "Accuracy",
        total: "Total",
        days: "Days",
        average: "Average",
      };

  if (error) {
    return (
      <div className="flex flex-col min-h-screen w-full p-4">
        <div className="h-[10vh]">
          <Navbar />
        </div>

        <div className="flex-1 flex items-center justify-center text-xl font-semibold text-red-600">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen w-full p-4">
      <div className="h-[10vh]">
        <Navbar />
      </div>

      {loading || !profileData ? null : (
        <div className="flex-1 w-full h-full p-4 flex flex-col gap-4">
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            <ProfileCard user={profileData.user} />

            <StatsCard
              title={text.lessons}
              value={profileData.lessonsCompleted}
              label={text.total}
            />

            <StatsCard
              title={text.units}
              value={profileData.unitsCompleted}
              label={text.total}
            />

            <StatsCard
              title={text.streak}
              value={profileData.currentStreak}
              label={text.days}
            />

            <StatsCard
              title={text.accuracy}
              value={`${Number(profileData.accuracy).toFixed(1)}%`}
              label={text.average}
            />
          </div>

          <HeatMap
            language={language}
            selectedYear={selectedYear}
            setSelectedYear={setSelectedYear}
            years={profileData.years}
            activeDays={profileData.activeDays}
            data={profileData.data}
          />

          <AccuracySpeedChart />
        </div>
      )}
    </div>
  );
}