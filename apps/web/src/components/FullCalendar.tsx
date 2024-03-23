import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Calendar } from "./ui/calendar";
import React from "react";
import { cn } from "@/lib/utils";
export default function FullCalendar() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const yearCurrent = new Date().getFullYear();
  const monthCurrent = new Date().getMonth();
  const dayCurrent = new Date().getDate();
  console.log("dayCurrent", dayCurrent);
  const day_disabled = [
    {from: new Date(yearCurrent, monthCurrent -1 , 1), to: new Date(yearCurrent, monthCurrent, dayCurrent -1)},
  ]
  return (
    <div>
      <Dialog >
        <DialogTrigger asChild>
          <Button className="bg-white border-spacing-1 text-gray-500 border-gray-300 border-2 mt-6 rounded-md hover:border-gray-600 hover:bg-white">
            Full Calender
          </Button>
        </DialogTrigger>
        <DialogContent className="w-fit border-none bg-white">
          <div className="w-full">
              <Calendar
                mode="single"
                showOutsideDays={false}
                selected={date}
                onSelect={setDate}
                className="w-full text-xl "
                disabled={day_disabled}
              />
          </div>
          <DialogFooter className="w-full">
            <div className="flex flex-row justify-between items-center w-full">
            <div className="w-full">
            <Button type="submit" className={cn("w-full bg-transparent hover:bg-transparent text-black hover:text-black")}>Cancel</Button>
            </div>
            <div className="w-full">
            <Button type="submit" className={cn("w-full bg-black text-white hover:bg-black hover:text-white")}>OK</Button>
            </div>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
