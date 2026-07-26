import React, { useMemo } from "react";

const ENGLISH_MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

const TAMIL_MONTHS = [
  "ஜன",
  "பிப்",
  "மார்",
  "ஏப்",
  "மே",
  "ஜூன்",
  "ஜூலை",
  "ஆக",
  "செப்",
  "அக்",
  "நவ",
  "டிச",
];

const WEEKS_PER_MONTH = 6;

function getColorClass(count) {
  if (count === -1) return "bg-gray-100";
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

function MonthCalendar({
  year,
  month,
  dataMap,
  rangeStart,
  rangeEnd,
  monthNames,
}) {
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
        {monthNames[month]}
      </span>

      <div
        className="flex w-full min-w-0"
        style={{ gap: "0.25vw" }}
      >
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

              if (rangeStart && rangeEnd) {
                const cellDate = new Date(year, month, day);

                if (
                  cellDate < rangeStart ||
                  cellDate > rangeEnd
                ) {
                  return (
                    <div
                      key={dIdx}
                      className="w-full"
                      style={{ aspectRatio: "1 / 1" }}
                    />
                  );
                }
              }

              const dateKey = formatDateKey(
                year,
                month,
                day
              );

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
  selectedYear,
  setSelectedYear,
  years = [],
  activeDays = 0,
  data = [],
  language,
}) => {
  const currentYear = new Date().getFullYear();

  const text =
    language === "Tamil"
      ? {
          activeDay: "செயல்பட்ட நாள்",
          activeDays: "செயல்பட்ட நாட்கள்",
          pastYear: "(கடந்த 1 ஆண்டு)",
          in: "ஆண்டு",
          current: "தற்போது",
          less: "குறைவு",
          more: "அதிகம்",
          monthNames: TAMIL_MONTHS,
        }
      : {
          activeDay: "active day",
          activeDays: "active days",
          pastYear: "(Past 1 Year)",
          in: "in",
          current: "Current",
          less: "Less",
          more: "More",
          monthNames: ENGLISH_MONTHS,
        };

  const displayYear =
    selectedYear === "Current"
      ? currentYear
      : Number(selectedYear);

  const dataMap = useMemo(() => {
    const map = {};

    data.forEach((item) => {
      map[item.sessionDate] = item.pointsXP;
    });

    return map;
  }, [data]);

  const { rangeStart, rangeEnd } = useMemo(() => {
    if (selectedYear !== "Current") {
      return {
        rangeStart: null,
        rangeEnd: null,
      };
    }

    const end = new Date();
    end.setHours(0, 0, 0, 0);

    const start = new Date(
      end.getFullYear() - 1,
      end.getMonth(),
      end.getDate() + 1
    );

    return {
      rangeStart: start,
      rangeEnd: end,
    };
  }, [selectedYear]);

  const monthsToRender = useMemo(() => {
    if (selectedYear !== "Current") {
      return Array.from(
        { length: 12 },
        (_, month) => ({
          year: displayYear,
          month,
        })
      );
    }

    const months = [];

    const cursor = new Date(
      rangeStart.getFullYear(),
      rangeStart.getMonth(),
      1
    );

    const endCursor = new Date(
      rangeEnd.getFullYear(),
      rangeEnd.getMonth(),
      1
    );

    while (cursor <= endCursor) {
      months.push({
        year: cursor.getFullYear(),
        month: cursor.getMonth(),
      });

      cursor.setMonth(cursor.getMonth() + 1);
    }

    return months;
  }, [
    selectedYear,
    displayYear,
    rangeStart,
    rangeEnd,
  ]);

  return (
    <div className="w-full max-w-full box-border rounded-lg border border-gray-200 bg-white p-[1.5vw] sm:p-4 overflow-hidden shadow-lg">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        <h2 className="text-sm sm:text-base font-semibold text-gray-800">
          {selectedYear === "Current"
            ? `${activeDays} ${
                activeDays === 1
                  ? text.activeDay
                  : text.activeDays
              } ${text.pastYear}`
            : `${activeDays} ${
                activeDays === 1
                  ? text.activeDay
                  : text.activeDays
              } ${
                language === "Tamil"
                  ? `${displayYear} ${text.in}`
                  : `${text.in} ${displayYear}`
              }`}
        </h2>

        <select
          value={selectedYear}
          onChange={(e) =>
            setSelectedYear(e.target.value)
          }
          className="text-xs sm:text-sm border border-gray-300 rounded-md px-2 py-1 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          {years.map((year) => (
            <option key={year} value={year}>
              {year === "Current"
                ? text.current
                : year}
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
            monthNames={text.monthNames}
          />
        ))}
      </div>

      <div className="flex items-center justify-end gap-1.5 mt-3 text-[10px] sm:text-xs text-gray-400">
        <span>{text.less}</span>
        <div className="w-3 h-3 rounded-[2px] bg-gray-100" />
        <div className="w-3 h-3 rounded-[2px] bg-green-200" />
        <div className="w-3 h-3 rounded-[2px] bg-green-400" />
        <div className="w-3 h-3 rounded-[2px] bg-green-600" />
        <div className="w-3 h-3 rounded-[2px] bg-green-800" />
        <span>{text.more}</span>
      </div>
    </div>
  );
};