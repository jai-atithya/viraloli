import React, { useMemo, useState } from "react";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

// Generate random monthly values
const generateYearData = (year) => ({
  year,
  months: months.map((month) => ({
    month,
    value: Math.floor(Math.random() * 101), // 0-100
  })),
});

// Temporary JSON
const heatMapData = [
  generateYearData(2026),
  generateYearData(2025),
  generateYearData(2024),
  generateYearData(2023),
  generateYearData(2022),
];

const getColor = (value) => {
  if (value >= 90) return "bg-green-700";
  if (value >= 70) return "bg-green-600";
  if (value >= 50) return "bg-green-500";
  if (value >= 30) return "bg-green-400";
  if (value >= 10) return "bg-green-300";
  return "bg-gray-200";
};

export const HeatMap = () => {
  const years = useMemo(() => heatMapData.map((d) => d.year), []);

  const [selectedYear, setSelectedYear] = useState(years[0]);

  const data = heatMapData.find((d) => d.year === selectedYear);

  return (
    <div className="w-full h-full flex flex-col bg-white rounded-xl shadow p-6">
      {/* Header */}
      <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
        <h2 className="text-2xl font-semibold">Yearly Heatmap</h2>

        <select
          value={selectedYear}
          onChange={(e) => setSelectedYear(Number(e.target.value))}
          className="border rounded-lg px-4 py-2 outline-none"
        >
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      {/* Heatmap */}
      <div className="flex-1">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5 h-full">
          {data.months.map(({ month, value }) => (
            <div
              key={month}
              className={`${getColor(
                value
              )} rounded-xl flex flex-col justify-between p-4 min-h-[120px] transition hover:scale-105`}
            >
              <span className="text-lg font-semibold text-gray-800">
                {month}
              </span>

              <div>
                <p className="text-3xl font-bold text-gray-900">{value}</p>
                <p className="text-sm text-gray-700">Activity</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center gap-2 mt-6 text-sm text-gray-600 flex-wrap">
        <span>Low</span>

        <div className="w-5 h-5 rounded bg-gray-200" />
        <div className="w-5 h-5 rounded bg-green-300" />
        <div className="w-5 h-5 rounded bg-green-400" />
        <div className="w-5 h-5 rounded bg-green-500" />
        <div className="w-5 h-5 rounded bg-green-600" />
        <div className="w-5 h-5 rounded bg-green-700" />

        <span>High</span>
      </div>
    </div>
  );
};