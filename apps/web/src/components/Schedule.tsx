import React from "react";
import { Filter } from "lucide-react";
import SignIn from "./SignIn";
import FullCalendar from "./FullCalendar";

export default function Schedule() {
  const daycurrent = new Date().getDate();
  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;
  const [date, setDate] = React.useState<Date | undefined>(
    new Date(year, month - 1, daycurrent)
  );

  const getFirstSunday = (year: number, month: number) => {
    // Create a new Date object for the first day of the month
    const firstDayOfMonth = new Date(year, month - 1, daycurrent );
    // Calculate the day of the week for the first day (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
    const dayOfWeek = firstDayOfMonth.getDay();
    console.log("dayOfWeek", dayOfWeek);
    // Calculate the number of days to add to reach the first Sunday
    const daysToAdd =
      dayOfWeek === 0 ? firstDayOfMonth.getDate() - 1 : 7 - dayOfWeek;
    // Create a new Date object for the first Sunday
    const firstSunday = new Date(year, month - 1, daycurrent + daysToAdd - 7 );  
    return firstSunday;
  };
  const numbersofdays = new Date(year, month, 0).getDate();
  console.log("numbersofdays", numbersofdays);
  const firstSunday = getFirstSunday(year, month);
  return (
    <div className="flex flex-col w-1/2 m-auto justify-center text-center">
      <div>
        <h2 className="text-fourth text-4xl font-bold relative z-20">
          <span className="inline-block z-20 after:content-[''] m-2 after:block after:relative after:-top-4 after:-z-10 after:h-4 after:w-full after:bg-gradient-to-r after:from-thirdary after:to-secondary ">
            DAILY
          </span>
          CLASS SCHEDULE
        </h2>
      </div>
      <div>
        <div className="flex flex-row justify-between w-11/12 m-auto mb-5">
          <div>
            <Filter className="text-gray-500 border-spacing-1 border-r-2 border-gray-400 w-14" />
          </div>
          <div>
            <SignIn />  
          </div>
        </div>
        <div className="bg-white py-8">
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
            <tr className="h-10">
              {Array.from({ length: 7 }).map((_, index) =>
                date?.getDate() === firstSunday.getDate() + index ? (
                  <td key={index} className="relative items-center">
                    <p className="text-white m-auto w-1/4 h-6 items-center flex justify-center  bg-black rounded-full">
                      {firstSunday.getDate() + index}
                    </p>
                  </td>
                ) : (
                  <td
                    key={index}
                    onClick={
                            () =>
                            setDate(
                              new Date(year, month - 1, firstSunday.getDate() + index)
                            )
                    }
                    className={` ${
                      daycurrent > firstSunday.getDate() + index
                        ? "text-gray-400"
                        : ""
                    }
                    ${firstSunday.getDate() + index < daycurrent ? "active:pointer-events-none cursor-none hover:pointer-events-auto hover:cursor-not-allowed" : ""}`}
                  >
                    {firstSunday.getDate() + index}
                  </td>
                )
              )}
            </tr>
            <tr className="h-10">
              {Array.from({ length: 7 }).map((_, index) =>
                date?.getDate() === firstSunday.getDate() + index + 7 ? (
                  <td key={index + 7} className="relative items-center">
                    <p className="text-white m-auto w-1/4 h-6 items-center flex justify-center  bg-black rounded-full">
                      {firstSunday.getDate() + index + 7}
                    </p>
                  </td>
                ) : (
                  <td
                    key={index + 7}
                    onClick={
                            () =>
                            setDate(
                              new Date(year, month - 1, firstSunday.getDate() + index + 7)
                            )
                    }
                    className={`cursor-pointer ${
                      daycurrent > firstSunday.getDate() + index + 7
                        ? "text-gray-400"
                        : ""
                    }
                    ${firstSunday.getDate() + index  + 7 < daycurrent ? "active:pointer-events-none cursor-none hover:pointer-events-auto hover:cursor-not-allowed" : ""}
                    `}
                  >
                    {firstSunday.getDate() + index + 7 > numbersofdays
                      ? index 
                      : firstSunday.getDate() + index + 7}
                  </td>
                )
              )}
            </tr>
          </table>
          <div>
            {/* <Button className="bg-white border-spacing-1 text-gray-500 border-gray-300 border-2 mt-6 rounded-md hover:border-gray-600 hover:bg-white">
              Full Calendar
            </Button> */}
            <FullCalendar />
          </div>
        </div>
      </div>
    </div>
  );
}
