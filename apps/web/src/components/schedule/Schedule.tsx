import { Filter } from "lucide-react";
import SignIn from "../SignIn";
import FullCalendar from "../FullCalendar";
import ScheduleBook from "./ScheduleBook";
import { scheduleData } from "@/apis/schedule";
import React from "react";
import {
  startOfMonth,
  addWeeks,
  format,
  eachWeekOfInterval,
  addDays,
} from "date-fns";

export default function Schedule() {
  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;

  const formatter = new Intl.DateTimeFormat("en-US", {
    day: "2-digit",
    month: "long",
    weekday: "long",
  });
  const fullDate = formatter.format(new Date());

  const currentDate = new Date();
  const currentMonth = startOfMonth(currentDate);
  const weeksOfMonth = eachWeekOfInterval({
    start: currentMonth,
    end: addWeeks(currentMonth, 1),
  });
  //
  const daycurrent = currentDate.getDate();
  const [date, setDate] = React.useState<Date | undefined>(
    new Date(year, month - 1, daycurrent)
  );
  const day_schedule = (daystring: string) => {
    const day = new Date(daystring);
    if (day?.toDateString() === date?.toDateString()) {
      return true;
    } else {
      return false;
    }
  };
  //
  console.log("date", date?.getDate());

  return (
    <div className="flex flex-col w-5/6 md:w-1/2 m-auto justify-center text-center">
      <div>
        <h2 className="text-fourth text-3xl md:text-4xl font-bold relative z-20 mt-3">
          <span className="inline-block z-20 after:content-['']  mr-2 md:m-2 after:block after:relative after:-top-4 after:-z-10 after:h-3 md:after:h-4 after:w-full after:bg-gradient-to-r after:from-thirdary after:to-secondary ">
            DAILY
          </span>
          CLASS SCHEDULE
        </h2>
      </div>
      <div className="w-4/5 m-auto w-full">
        <div className="flex flex-row justify-between w-11/12 m-auto mt-5 mb-1 md:mb-5">
          <div>
            <Filter className="text-gray-500 border-spacing-1 border-r-2 border-gray-400 w-14" />
          </div>
          <div>
            <SignIn />
          </div>
        </div>
        <div className="bg-white py-8 w-full">
          <table className="w-full text-center text-gray-700 text-xs font-thin">
            <tr className="h-10">
              <th>S</th>
              <th>M</th>
              <th>T</th>
              <th>W</th>
              <th>T</th>
              <th>F</th>
              <th>S</th>
            </tr>
            {weeksOfMonth.map((week, index) => (
              <tr key={index} className="h-10">
                {eachWeekOfInterval({ start: week, end: addDays(week, 6) }).map(
                  (day) =>
                    Array.from({ length: 7 }).map((_, index) => (
                      <td key={index} className="min-w-10">
                        {date?.getDate() + "" ===
                        format(addDays(day, index), "d") ? (
                          <span className="text-white m-auto h-6 w-6 items-center flex justify-center  bg-black rounded-full">
                            {format(addDays(day, index), "dd")}
                          </span>
                        ) : (
                          <span
                            onClick={() =>
                              setDate(
                                new Date(
                                  year,
                                  month - 1,
                                  addDays(day, index).getDate()
                                )
                              )
                            }
                            className={`${
                              currentDate &&
                              currentDate.getDate() <=
                                parseInt(
                                  format(addDays(day, index), "d"),
                                  10
                                ) &&
                                currentDate.getMonth() <= addDays(day, index).getMonth()
                                ? "text-black pointer-events:auto cursor-pointer z-40}"
                                : "text-gray-400 pointer-events:none cursor-not-allowed  z-40"
                            }`}
                          >
                            {format(addDays(day, index), "d")}
                          </span>
                        )}
                      </td>
                    ))
                )}
              </tr>
            ))}
          </table>
          <div>
            <FullCalendar />
          </div>
        </div>
      </div>
      {/*  */}
      <div className="flex justify-left text-black font-bold text-xl">
        {fullDate}
      </div>
      {/*  */}
      <div>
        {scheduleData.filter((data) => day_schedule(data.date)).length > 0 ? (
          scheduleData
            .filter((data) => day_schedule(data.date))
            .map((filteredData, index) => (
              <ScheduleBook key={index} isBooking={true} {...filteredData} />
            ))
        ) : (
          <ScheduleBook isBooking={false} />
        )}
      </div>
    </div>
  );
}
