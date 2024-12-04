import { eachDayOfInterval, endOfMonth, format, startOfMonth, getDay, isToday } from "date-fns";

const WEEKDAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

export default function ScheduleCalendar() {
  const currentDate = new Date();
  const firstDayofMonth = startOfMonth(currentDate);
  const lastDayofMonth = endOfMonth(currentDate);

  const daysInMonth = eachDayOfInterval({
    start: firstDayofMonth,
    end: lastDayofMonth,
  });

  const startingDayIndex = getDay(firstDayofMonth)

  return (
    <div className="flex flex-col gap-3">
      <h2>{format(currentDate, "MMMM yyyy")}</h2>
      <div className="grid grid-cols-7 gap-2">
        {WEEKDAYS.map((day) => {
          return (
            <div key={day} className="text-center">
              <p>{day}</p>
            </div>
          );
        })}
        {Array.from({ length: startingDayIndex}).map((_, idx) => {
            return (
                <div key={`emptyCell-${idx}`} className="text-center"/>
            );
        })}
        {daysInMonth.map((day, idx) => {
          return (
            <div key={idx} className={`text-center ${isToday(day) ? "bg-gray-200" : ""}`}>
              <p>{format(day, "d")}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
