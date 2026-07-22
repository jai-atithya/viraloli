import React from "react";
import { ProfileCard } from "./ProfileCard";
import { StatsCard } from "./StatsCard";
export const DasdBoard = () => {
  return (
    <div className="w-full max-w-full box-border rounded-lg bg-white px-0 py-4 m-0 overflow-hidden">
      <div className="flex gap-6">
        <ProfileCard />
        <StatsCard
          icon="📖"
          title="பாடங்கள் முடித்தது"
          value={46}
          label="மொத்தம்"
        />

        <StatsCard
          icon="🎓"
          title="கோர்ஸ்கள் முடித்தது"
          value="8"
          label="மொத்தம்"
        />

        <StatsCard icon="🔥" title="தினசரி தொடர்" value="16" label="நாட்கள்" />

        <StatsCard icon="🎯" title="துல்லியம்" value="32%" label="சராசரி" />
      </div>
    </div>
  );
};
