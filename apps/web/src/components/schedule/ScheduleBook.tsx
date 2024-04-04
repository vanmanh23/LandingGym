import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";

type Props = {
  isBooking: boolean;
  timefrom?: string;
  timeTo?: string;
  description?: string;
  nameuser?: string;
  introduction?: string;
};

function ScheduleBook({ isBooking, ...props }: Props) {
  const [hidedetail, setHidedetail] = useState(true);
  return (
    <div className="w-full bg-white">
      <div>
        {isBooking ? (
          <div>
          <div className="flex flex-row justify-between w-11/12 m-auto py-3">
            <div className="flex flex-col justify-start items-start">
              <div className="flex flex-row gap-2 font-semibold text-sm md:text-lg">
                <p>{props.timefrom} </p> - <p> {props.timeTo}</p>
              </div>
              <div className="font-semibold text-sm md:text-lg">{props.description}</div>
              <div className="opacity-40 text-sm mt-2">{props.nameuser}</div>
             
            </div>
            <div className=" flex items-center justify-end">
              <Button className="bg-white text-black border-solid border-1 border-black/60">Book</Button>
            </div>
          </div>
          <div className="w-11/12 m-auto">
          <div 
              onClick={() => setHidedetail(!hidedetail)}
              className="flex flex-row text-link-color opacity-85 font-thin cursor-pointer items-center m-4 font-semibold text-base transition duration-4000 ease-in-out">
                {hidedetail ? <div className="flex flex-row items-center"><ChevronRight /> View detail</div> : <div className="flex flex-row items-center"><ChevronLeft /> Hide detail</div>}
              </div>
              <div className={` ${hidedetail ? "hidden" : "block"} `}>
                <p className="justify-start items-start text-left mb-4">{props.introduction}</p>
              </div>
          </div>
          </div>
        ) : (
          <div>
            <div className="w-full h-12 flex items-center justify-start  opacity-45 border-b-1 border-gray-600">
              <p className="ml-3">We're sorry, there are no more classes today.</p>
            </div>
            <div className="w-full h-64 flex items-center justify-center flex-col">
            <div className="w-4/6">
             <p className="font-light opacity-50"> We looked, but we didn't find anything available based on your
              search. Try another day or</p>
            </div>
            <div className="mt-4">
              <Button variant={"third"} className="w-full h-10">Change filter</Button>
            </div>
            <div className="mt-3">
              <p className="text-link-color text-sm cursor-pointer underline">Reset filter</p>
            </div>
            </div>
          </div>
        )}
      </div>
      <div className="w-full border-t h-11 border-1-solid border-gray-300 flex items-center justify-start">
        <a href="https://www.mindbodyonline.com/" className="w-11/12 flex justify-start m-auto opacity-45">
          mindbody
        </a>
      </div>
    </div>
  );
}

export default ScheduleBook;
