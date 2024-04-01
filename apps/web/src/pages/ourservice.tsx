import React from 'react';
import { startOfMonth, addWeeks, format, eachWeekOfInterval, addDays } from 'date-fns';

export default function Component() {
    const currentDate = new Date();
    const currentMonth = startOfMonth(currentDate);
    const weeksOfMonth = eachWeekOfInterval({ start: currentMonth, end: addWeeks(currentMonth, 2) });
    return (
        <div>

        {weeksOfMonth.map((week, index) => (
          <div key={index}>
            <h3>Week {index + 1}</h3>
            <ul>
              {eachWeekOfInterval({ start: week, end: addDays(week, 6) }).map((day) => (
                Array.from({ length: 7 }).map((_, index) => (
                  <li key={index}>{format(addDays(day, index), 'dd')}</li>
                ))
              ))}
            </ul>
          </div>
        ))}
      </div>
    )
}