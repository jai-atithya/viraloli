import React, { useMemo, useState } from 'react'

// ---------------------------------------------------------------------------
// SAMPLE DATA — only days that were "active" appear here.
// Any date NOT in this array is treated as no-data and rendered as a grey box.
// Shape: { date: 'YYYY-MM-DD', count: number }
// ---------------------------------------------------------------------------
const SAMPLE_DATA = [
  { date: '2026-01-02', count: 2 }, { date: '2026-01-03', count: 5 },
  { date: '2026-01-05', count: 1 }, { date: '2026-01-09', count: 8 },
  { date: '2026-01-14', count: 3 }, { date: '2026-01-20', count: 11 },
  { date: '2026-01-27', count: 4 },
  { date: '2026-02-02', count: 6 }, { date: '2026-02-03', count: 6 },
  { date: '2026-02-04', count: 9 }, { date: '2026-02-11', count: 2 },
  { date: '2026-02-18', count: 1 }, { date: '2026-02-25', count: 7 },
  { date: '2026-03-01', count: 3 }, { date: '2026-03-06', count: 12 },
  { date: '2026-03-07', count: 10 }, { date: '2026-03-15', count: 1 },
  { date: '2026-03-22', count: 5 }, { date: '2026-03-29', count: 2 },
  { date: '2026-04-03', count: 4 }, { date: '2026-04-04', count: 4 },
  { date: '2026-04-05', count: 4 }, { date: '2026-04-12', count: 9 },
  { date: '2026-04-19', count: 2 },
  { date: '2026-05-01', count: 1 }, { date: '2026-05-08', count: 6 },
  { date: '2026-05-15', count: 13 }, { date: '2026-05-16', count: 8 },
  { date: '2026-05-23', count: 3 }, { date: '2026-05-30', count: 5 },
  { date: '2026-06-02', count: 2 }, { date: '2026-06-09', count: 7 },
  { date: '2026-06-10', count: 7 }, { date: '2026-06-17', count: 1 },
  { date: '2026-06-24', count: 10 },
  { date: '2026-07-01', count: 3 }, { date: '2026-07-08', count: 6 },
  { date: '2026-07-15', count: 2 }, { date: '2026-07-20', count: 9 },
  { date: '2026-07-21', count: 4 },
  { date: '2026-08-05', count: 5 }, { date: '2026-08-12', count: 1 },
  { date: '2026-08-19', count: 8 }, { date: '2026-08-26', count: 3 },
  { date: '2026-09-02', count: 6 }, { date: '2026-09-09', count: 11 },
  { date: '2026-09-16', count: 2 }, { date: '2026-09-23', count: 4 },
  { date: '2026-10-01', count: 7 }, { date: '2026-10-07', count: 3 },
  { date: '2026-10-14', count: 9 }, { date: '2026-10-21', count: 1 },
  { date: '2026-10-28', count: 5 },
  { date: '2026-11-04', count: 2 }, { date: '2026-11-11', count: 6 },
  { date: '2026-11-18', count: 12 }, { date: '2026-11-25', count: 3 },
  { date: '2026-12-02', count: 1 }, { date: '2026-12-09', count: 8 },
  { date: '2026-12-16', count: 4 }, { date: '2026-12-23', count: 6 },
  { date: '2026-12-30', count: 2 },
]

const MONTH_NAMES = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
]
const WEEKDAY_LABELS = ['S', 'M', 'T', 'W', 'T', 'F', 'S']
const WEEKS_PER_MONTH = 6 // every month is padded to 6 week-columns so cell size stays identical across all 12 months

// Value -> tailwind color class. 0 and "no data" both render the same grey box.
function getColorClass(count) {
  if (!count || count === 0) return 'bg-gray-100'
  if (count <= 2) return 'bg-green-200'
  if (count <= 5) return 'bg-green-400'
  if (count <= 9) return 'bg-green-600'
  return 'bg-green-800'
}

function formatDateKey(year, month, day) {
  const m = String(month + 1).padStart(2, '0')
  const d = String(day).padStart(2, '0')
  return `${year}-${m}-${d}`
}

// Builds a week-column matrix for a single month, padded with nulls so the
// first day lines up under the correct weekday (Sun-Sat rows), and always
// padded out to WEEKS_PER_MONTH columns so every month renders the same width.
function buildMonthMatrix(year, month) {
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const firstWeekday = new Date(year, month, 1).getDay() // 0 = Sun

  const cells = []
  for (let i = 0; i < firstWeekday; i++) cells.push(null)
  for (let day = 1; day <= daysInMonth; day++) cells.push(day)
  while (cells.length < WEEKS_PER_MONTH * 7) cells.push(null)

  const weeks = []
  for (let i = 0; i < cells.length; i += 7) {
    weeks.push(cells.slice(i, i + 7))
  }
  return weeks
}

function MonthCalendar({ year, month, dataMap }) {
  const weeks = useMemo(() => buildMonthMatrix(year, month), [year, month])

  return (
    <div className="flex flex-col items-center min-w-0">
      <span
        className="font-semibold text-gray-600 mb-[0.4vw] truncate"
        style={{ fontSize: 'clamp(9px, 0.9vw, 13px)' }}
      >
        {MONTH_NAMES[month]}
      </span>

      {/* weekday label col + week columns, each an equal fraction of this month's width */}
      <div className="flex w-full min-w-0" style={{ gap: '0.25vw' }}>
        <div className="flex flex-col flex-1 min-w-0" style={{ gap: '0.25vw' }}>
          {WEEKDAY_LABELS.map((label, i) => (
            <div key={i} className="w-full" style={{ aspectRatio: '1 / 1' }}>
              <span
                className="w-full h-full flex items-center justify-center text-gray-400 select-none"
                style={{ fontSize: 'clamp(5px, 0.5vw, 8px)' }}
              >
                {i % 2 === 1 ? label : ''}
              </span>
            </div>
          ))}
        </div>

        {weeks.map((week, wIdx) => (
          <div key={wIdx} className="flex flex-col flex-1 min-w-0" style={{ gap: '0.25vw' }}>
            {week.map((day, dIdx) => {
              if (day == null) {
                return (
                  <div key={dIdx} className="w-full" style={{ aspectRatio: '1 / 1' }} />
                )
              }
              const dateKey = formatDateKey(year, month, day)
              const count = dataMap[dateKey] ?? 0
              return (
                <div
                  key={dIdx}
                  title={`${dateKey}: ${count} ${count === 1 ? 'activity' : 'activities'}`}
                  className={`w-full rounded-[2px] ${getColorClass(
                    count
                  )} hover:ring-1 hover:ring-inset hover:ring-gray-400 transition-shadow cursor-pointer`}
                  style={{ aspectRatio: '1 / 1' }}
                />
              )
            })}
          </div>
        ))}
      </div>
    </div>
  )
}

export const HeatMap = ({ data = SAMPLE_DATA }) => {
  const currentYear = new Date().getFullYear()
  const [year, setYear] = useState(currentYear)

  const yearOptions = useMemo(() => {
    const years = []
    for (let y = currentYear; y >= currentYear - 4; y--) years.push(y)
    return years
  }, [currentYear])

  const dataMap = useMemo(() => {
    const map = {}
    for (const { date, count } of data) map[date] = count
    return map
  }, [data])

  const totalCount = useMemo(
    () =>
      data
        .filter((d) => d.date.startsWith(String(year)))
        .reduce((sum, d) => sum + d.count, 0),
    [data, year]
  )

  return (
    <div className="w-full max-w-full box-border rounded-lg border border-gray-200 bg-white p-[1.5vw] sm:p-4 overflow-hidden">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        <h2 className="text-sm sm:text-base font-semibold text-gray-800">
          {totalCount} activities in {year}
        </h2>

        <select
          value={year}
          onChange={(e) => setYear(Number(e.target.value))}
          className="text-xs sm:text-sm border border-gray-300 rounded-md px-2 py-1 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          {yearOptions.map((y) => (
            <option key={y} value={y}>
              {y}
            </option>
          ))}
        </select>
      </div>

      {/* 12 months, each pinned to an equal 1/12 share of the container width
          — no horizontal scroll at any viewport size */}
      <div
        className="grid w-full min-w-0"
        style={{
          gridTemplateColumns: 'repeat(12, minmax(0, 1fr))',
          gap: '0.5vw',
        }}
      >
        {MONTH_NAMES.map((_, monthIdx) => (
          <MonthCalendar
            key={monthIdx}
            year={year}
            month={monthIdx}
            dataMap={dataMap}
          />
        ))}
      </div>

      {/* Legend */}
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
  )
}
