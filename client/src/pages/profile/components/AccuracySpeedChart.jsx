import React, { useState, useEffect } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

// Static fallback/mock data, keyed by range — used until a real endpoint is wired up.
// Replace fetchStats() below with a real API call; this mock just simulates network delay.
const MOCK_DATA = {
  week: {
    subtitle: "கடந்த 7 நாட்களின் போக்கு",
    points: [
      { label: "Mon", accuracy: 28, speed: 18 },
      { label: "Tue", accuracy: 34, speed: 21 },
      { label: "Wed", accuracy: 30, speed: 19 },
      { label: "Thu", accuracy: 41, speed: 24 },
      { label: "Fri", accuracy: 38, speed: 26 },
      { label: "Sat", accuracy: 45, speed: 29 },
      { label: "Sun", accuracy: 32, speed: 27 },
    ],
  },
  // Month view: aggregate by week-of-month (W1–W5), not every single day —
  // keeps the X axis readable instead of cramming ~30 points on it.
  month: {
    subtitle: "இந்த மாதத்தின் போக்கு (வாரம் வாரியாக)",
    points: [
      { label: "W1", accuracy: 30, speed: 20 },
      { label: "W2", accuracy: 35, speed: 23 },
      { label: "W3", accuracy: 33, speed: 25 },
      { label: "W4", accuracy: 40, speed: 28 },
      { label: "W5", accuracy: 38, speed: 27 },
    ],
  },
  // Year view: aggregate by month.
  year: {
    subtitle: "இந்த ஆண்டின் போக்கு (மாதம் வாரியாக)",
    points: [
      { label: "Jan", accuracy: 20, speed: 14 },
      { label: "Feb", accuracy: 24, speed: 16 },
      { label: "Mar", accuracy: 27, speed: 18 },
      { label: "Apr", accuracy: 29, speed: 19 },
      { label: "May", accuracy: 31, speed: 21 },
      { label: "Jun", accuracy: 33, speed: 22 },
      { label: "Jul", accuracy: 32, speed: 27 },
      { label: "Aug", accuracy: 35, speed: 25 },
      { label: "Sep", accuracy: 37, speed: 26 },
      { label: "Oct", accuracy: 39, speed: 28 },
      { label: "Nov", accuracy: 42, speed: 30 },
      { label: "Dec", accuracy: 41, speed: 29 },
    ],
  },
};

const TABS = {
  week: "வாரம்",
  month: "மாதம்",
  year: "ஆண்டு",
};

/**
 * Swap this out for a real API call, e.g.:
 *   const res = await fetch(`/api/stats?range=${range}`, { signal });
 *   if (!res.ok) throw new Error("Failed to load stats");
 *   const json = await res.json();
 *   return { subtitle: json.subtitle, points: json.points };
 *
 * Must resolve to { subtitle: string, points: { label, accuracy, speed }[] }.
 */
async function fetchStats(range, { signal } = {}) {
  await new Promise((resolve) => setTimeout(resolve, 400)); // simulate latency
  if (signal?.aborted) throw new DOMException("Aborted", "AbortError");
  return MOCK_DATA[range];
}

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload || !payload.length) return null;
  return (
    <div className="rounded-xl border border-gray-100 bg-white px-4 py-3 shadow-lg">
      <p className="mb-1 text-sm font-semibold text-gray-700">{label}</p>
      {payload.map((entry) => (
        <p
          key={entry.dataKey}
          className="text-sm"
          style={{ color: entry.color }}
        >
          {entry.dataKey === "accuracy"
            ? `துல்லியம்: ${entry.value}%`
            : `வேகம்: ${entry.value} WPM`}
        </p>
      ))}
    </div>
  );
};

export const AccuracySpeedChart = () => {
  const [range, setRange] = useState("week"); // "week" | "month" | "year"
  const [points, setPoints] = useState([]);
  const [subtitle, setSubtitle] = useState("");
  const [status, setStatus] = useState("loading"); // "loading" | "success" | "error"
  const [retryTick, setRetryTick] = useState(0); // bump to re-run the fetch below without changing range

  useEffect(() => {
    const controller = new AbortController();
    setStatus("loading");

    fetchStats(range, { signal: controller.signal })
      .then((result) => {
        setPoints(result.points);
        setSubtitle(result.subtitle);
        setStatus("success");
      })
      .catch((err) => {
        if (err.name === "AbortError") return; // range changed again, ignore stale response
        setStatus("error");
      });

    return () => controller.abort();
  }, [range, retryTick]);

  return (
    <div className="w-full rounded-2xl border border-gray-100 bg-white p-4 shadow-sm sm:p-6">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h3 className="text-base font-semibold text-gray-800 sm:text-lg">
            துல்லியம் &amp; வேகம்
          </h3>
          <p className="text-xs text-gray-400 sm:text-sm">
            {status === "loading" ? "ஏற்றுகிறது…" : subtitle}
          </p>
        </div>

        <div className="flex items-center gap-1 rounded-full bg-gray-100 p-1">
          {Object.entries(TABS).map(([key, tab]) => (
            <button
              key={key}
              onClick={() => setRange(key)}
              className={`rounded-full px-3 py-1 text-xs font-medium transition-colors sm:text-sm ${
                range === key
                  ? "bg-white text-green-700 shadow-sm"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {status === "loading" ? (
        <div className="flex h-48 w-full items-center justify-center ">
          <div className="h-6 w-6 animate-spin rounded-full border-2 border-gray-200 border-t-green-600" />
        </div>
      ) : status === "error" ? (
        <div className="flex h-48 w-full flex-col items-center justify-center gap-2 text-gray-400 ">
          <span className="text-2xl">⚠️</span>
          <p className="text-sm">தரவை ஏற்ற முடியவில்லை</p>
          <button
            onClick={() => setRetryTick((t) => t + 1)}
            className="text-xs font-medium text-green-700 underline"
          >
            மீண்டும் முயற்சிக்கவும்
          </button>
        </div>
      ) : (
        <div className="h-48 w-full ">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={points}
              margin={{ top: 5, right: 10, left: -10, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis
                dataKey="label"
                tick={{ fontSize: 12, fill: "#94a3b8" }}
                axisLine={{ stroke: "#e2e8f0" }}
                tickLine={false}
              />
              <YAxis
                yAxisId="left"
                tick={{ fontSize: 12, fill: "#94a3b8" }}
                axisLine={false}
                tickLine={false}
                width={40}
                label={{
                  value: "%",
                  angle: -90,
                  position: "insideLeft",
                  fontSize: 11,
                  fill: "#94a3b8",
                }}
              />
              <YAxis
                yAxisId="right"
                orientation="right"
                tick={{ fontSize: 12, fill: "#94a3b8" }}
                axisLine={false}
                tickLine={false}
                width={40}
                label={{
                  value: "WPM",
                  angle: 90,
                  position: "insideRight",
                  fontSize: 11,
                  fill: "#94a3b8",
                }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend
                formatter={(value) =>
                  value === "accuracy" ? "துல்லியம் (%)" : "வேகம் (WPM)"
                }
                wrapperStyle={{ fontSize: 13 }}
              />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="accuracy"
                stroke="#f13602"
                strokeWidth={3}
                dot={{ r: 4, fill: "#f13602" }}
                activeDot={{ r: 6 }}
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="speed"
                stroke="#0725ac"
                strokeWidth={3}
                dot={{ r: 4, fill: "#0725ac" }}
                activeDot={{ r: 6 }}
                strokeDasharray="4 2"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
};

export default AccuracySpeedChart;