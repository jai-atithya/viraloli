import React, { useState } from "react";
import { Navbar } from "../components/Navbar";
import { HeatMap } from "./components/HeatMap";
import { DashBoard } from "./components/DashBoard";
import { ProfileCard } from "./components/ProfileCard";
import { StatsCard } from "./components/StatsCard";
import AccuracySpeedChart from "./components/AccuracySpeedChart";

export const Profile = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen w-full p-4">
        <div className="h-[10vh]">
          <Navbar />
        </div>

        <div className="flex-1 w-full h-full p-4 flex flex-col gap-4">
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            <ProfileCard />

            <StatsCard
              icon="📖"
              title="பாடங்கள் முடித்தது"
              value={46}
              label="மொத்தம்"
            />

            <StatsCard
              icon="🎓"
              title="அலகுகள் முடித்தது"
              value="8"
              label="மொத்தம்"
            />

            <StatsCard
              icon="🔥"
              title="தினசரி தொடர்"
              value="16"
              label="நாட்கள்"
            />

            <StatsCard icon="🎯" title="துல்லியம்" value="32%" label="சராசரி" />
            {/* <DashBoard/> */}
          </div>

          <HeatMap />
          <AccuracySpeedChart/>
        </div>
      </div>
    </>
  );
};