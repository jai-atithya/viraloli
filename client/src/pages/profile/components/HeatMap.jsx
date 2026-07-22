import React, { useEffect, useMemo, useState } from "react";
import axios from "../../../api/axios";

const MONTH_NAMES = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

const WEEKDAY_LABELS = ["S", "M", "T", "W", "T", "F", "S"];

const WEEKS_PER_MONTH = 6;

function getColorClass(count) {
  if (count == -1) return "bg-gray-100";
  if (count >= 0 && count <= 10) return "bg-green-200";
  if (count >= 11 && count <= 25) return "bg-green-400";
  if (count >= 26) return "bg-green-600";
  return "bg-green-800";
}

function formatDateKey(year, month, day) {
  const m = String(month + 1).padStart(2, "0");
  const d = String(day).padStart(2, "0");
  return `${year}-${m}-${d}`;
}

function buildMonthMatrix(year, month) {
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstWeekday = new Date(year, month, 1).getDay();

  const cells = [];

  for (let i = 0; i < firstWeekday; i++) cells.push(null);

  for (let day = 1; day <= daysInMonth; day++) {
    cells.push(day);
  }

  while (cells.length < WEEKS_PER_MONTH * 7) {
    cells.push(null);
  }

  const weeks = [];

  for (let i = 0; i < cells.length; i += 7) {
    weeks.push(cells.slice(i, i + 7));
  }

  return weeks;
}

function MonthCalendar({ year, month, dataMap, rangeStart, rangeEnd }) {
  const weeks = useMemo(
    () => buildMonthMatrix(year, month),
    [year, month]
  );

  return (
    <div className="flex flex-col items-center min-w-0">
      <span
        className="font-semibold text-gray-600 mb-[0.4vw] truncate"
        style={{ fontSize: "clamp(9px, 0.9vw, 13px)" }}
      >
        {MONTH_NAMES[month]}
      </span>

      <div
        className="flex w-full min-w-0"
        style={{ gap: "0.25vw" }}
      >
        <div
          className="flex flex-col flex-1 min-w-0"
          style={{ gap: "0.25vw" }}
        >
        </div>

        {weeks.map((week, wIdx) => (
          <div
            key={wIdx}
            className="flex flex-col flex-1 min-w-0"
            style={{ gap: "0.25vw" }}
          >
            {week.map((day, dIdx) => {
              if (day == null) {
                return (
                  <div
                    key={dIdx}
                    className="w-full"
                    style={{ aspectRatio: "1 / 1" }}
                  />
                );
              }

              // Rolling-window trim: outside the visible date range,
              // render as a blank cell (same as an out-of-month day).
              if (rangeStart && rangeEnd) {
                const cellDate = new Date(year, month, day);

                if (cellDate < rangeStart || cellDate > rangeEnd) {
                  return (
                    <div
                      key={dIdx}
                      className="w-full"
                      style={{ aspectRatio: "1 / 1" }}
                    />
                  );
                }
              }

              const dateKey = formatDateKey(year, month, day);

              const count = dataMap[dateKey] ?? -1;

              return (
                <div
                  key={dIdx}
                  title={`${dateKey}: ${count} XP`}
                  className={`w-full rounded-[2px] ${getColorClass(
                    count
                  )} hover:ring-1 hover:ring-inset hover:ring-gray-400 transition-shadow cursor-pointer`}
                  style={{ aspectRatio: "1 / 1" }}
                />
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

export const HeatMap = ({
  userId = "6a5fb9b869d49f810ab37b74",
  createdAt = "2025-07-21T10:35:42.123Z",
} = {}) => {
  const currentYear = new Date().getFullYear();

  const [selectedYear, setSelectedYear] = useState("current");
  const [data, setData] = useState([]);
  const [activeDays, setActiveDays] = useState(0);
  const [loading, setLoading] = useState(false);

  const yearOptions = useMemo(() => {
    const createdYear = new Date(createdAt).getFullYear();

    const years = ["current"];

    for (let y = currentYear - 1; y >= createdYear; y--) {
      years.push(y);
    }

    return years;
  }, [createdAt, currentYear]);

  useEffect(() => {
    if (!userId) return;

    const fetchHeatmap = async () => {
      try {
        setLoading(true);

        let response;

        if (selectedYear === "current") {
          response = await axios.get(`/session/year/${userId}`);
        } else {
          response = await axios.get(`/session/${userId}/${selectedYear}`);
        }

        setData(response.data.data ?? []);
        setActiveDays(response.data.activeDays ?? 0);
      } catch (err) {
        console.error(err);
        setData([]);
        setActiveDays(0);
      } finally {
        setLoading(false);
      }
    };

    fetchHeatmap();
  }, [userId, selectedYear]);

  const displayYear =
    selectedYear === "current"
      ? currentYear
      : Number(selectedYear);

  const dataMap = useMemo(() => {
    const map = {};

    data.forEach((item) => {
      map[item.sessionDate] = item.pointsXP;
    });

    return map;
  }, [data]);

  // Rolling window: today, and exactly "1 year + 1 day" before today.
  // e.g. today = 22/7/26  ->  rangeStart = 21/7/25, rangeEnd = 22/7/26
  const { rangeStart, rangeEnd } = useMemo(() => {
    if (selectedYear !== "current") {
      return { rangeStart: null, rangeEnd: null };
    }

    const end = new Date();
    end.setHours(0, 0, 0, 0);

    const start = new Date(
      end.getFullYear() - 1,
      end.getMonth(),
      end.getDate() + 1
    );

    return { rangeStart: start, rangeEnd: end };
  }, [selectedYear]);

  // NEW
  const monthsToRender = useMemo(() => {
    if (selectedYear !== "current") {
      return Array.from({ length: 12 }, (_, month) => ({
        year: displayYear,
        month,
      }));
    }

    const months = [];

    const cursor = new Date(rangeStart.getFullYear(), rangeStart.getMonth(), 1);
    const endCursor = new Date(rangeEnd.getFullYear(), rangeEnd.getMonth(), 1);

    while (cursor <= endCursor) {
      months.push({ year: cursor.getFullYear(), month: cursor.getMonth() });
      cursor.setMonth(cursor.getMonth() + 1);
    }

    return months;
  }, [selectedYear, displayYear, rangeStart, rangeEnd]);

  return (
    <div className="w-full max-w-full box-border rounded-lg border border-gray-200 bg-white p-[1.5vw] sm:p-4 overflow-hidden shadow-lg">

      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        <h2 className="text-sm sm:text-base font-semibold text-gray-800">
          {loading
            ? "Loading..."
            : `${activeDays} active day${activeDays === 1 ? "" : "s"} ${selectedYear === "current"
              ? "(Past 1 Year)"
              : `in ${displayYear}`
            }`}
        </h2>

        <select
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
          className="text-xs sm:text-sm border border-gray-300 rounded-md px-2 py-1 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          {yearOptions.map((year) => (
            <option key={year} value={year}>
              {year === "current" ? "Current" : year}
            </option>
          ))}
        </select>
      </div>

      <div
        className="grid w-full min-w-0"
        style={{
          gridTemplateColumns: `repeat(${monthsToRender.length}, minmax(0, 1fr))`,
          gap: "0.5vw",
        }}
      >
        {monthsToRender.map(({ year, month }) => (
          <MonthCalendar
            key={`${year}-${month}`}
            year={year}
            month={month}
            dataMap={dataMap}
            rangeStart={rangeStart}
            rangeEnd={rangeEnd}
          />
        ))}
      </div>

      <div className="flex items-center justify-end gap-1.5 mt-3 text-[10px] sm:text-xs text-gray-400">
        <span>Less</span>
        <div className="w-3 h-3 rounded-[2px] bg-gray-100" />
        <div className="w-3 h-3 rounded-[2px] bg-green-200" />
        <div className="w-3 h-3 rounded-[2px] bg-green-400" />
        <div className="w-3 h-3 rounded-[2px] bg-green-600" />
        <div className="w-3 h-3 rounded-[2px] bg-green-800" />
        <span>More</span>
      </div>
    </div>
  );
};