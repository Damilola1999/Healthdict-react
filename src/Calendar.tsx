import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CalendarProps {
  value: Date | null;
  onChange: (date: Date) => void;
}

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const startOfDay = (d: Date) => new Date(d.getFullYear(), d.getMonth(), d.getDate());
const sameDay = (a: Date, b: Date) => a.getTime() === b.getTime();

export default function Calendar({ value, onChange }: CalendarProps) {
  // Frozen at mount so the available-date window cannot shift mid-session.
  const [today] = useState(() => startOfDay(new Date()));
  const [view, setView] = useState(() => {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), 1);
  });

  const year = view.getFullYear();
  const month = view.getMonth();
  const leadingBlanks = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const cells: (Date | null)[] = [
    ...Array<null>(leadingBlanks).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => new Date(year, month, i + 1)),
  ];

  // Available = today or later, Monday to Friday
  const isAvailable = (d: Date) => d >= today && d.getDay() !== 0 && d.getDay() !== 6;

  const atCurrentMonth = year === today.getFullYear() && month === today.getMonth();
  const shift = (n: number) => setView(new Date(year, month + n, 1));

  return (
    <div className="cal">
      <div className="cal__head">
        <button type="button" onClick={() => shift(-1)} disabled={atCurrentMonth} aria-label="Previous month">
          <ChevronLeft size={16} />
        </button>
        <strong>{view.toLocaleDateString("en-US", { month: "long", year: "numeric" })}</strong>
        <button type="button" onClick={() => shift(1)} aria-label="Next month">
          <ChevronRight size={16} />
        </button>
      </div>

      <div className="cal__grid">
        {WEEKDAYS.map((w) => (
          <span key={w} className="cal__dow">{w}</span>
        ))}
        {cells.map((d, i) =>
          d ? (
            <button
              type="button"
              key={i}
              disabled={!isAvailable(d)}
              onClick={() => onChange(d)}
              aria-pressed={value ? sameDay(d, value) : false}
              className={[
                "cal__day",
                isAvailable(d) ? "is-available" : "",
                value && sameDay(d, value) ? "is-selected" : "",
              ].join(" ")}
            >
              {d.getDate()}
            </button>
          ) : (
            <span key={i} />
          )
        )}
      </div>
    </div>
  );
}