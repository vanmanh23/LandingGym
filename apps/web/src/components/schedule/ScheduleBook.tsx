import { ChevronRight } from "lucide-react";
import { Button } from "../ui/button";

type Props = {
  isBooking: boolean
  timefrom?: string
  timeTo?: string
  description?: string
  nameuser?: string
}

function ScheduleBook( { isBooking, ...props}: Props) {
  return (
    <div>
      <div>
        {isBooking ? (
            <div>
            <div>
              <p>{props.timefrom}</p> - <p>{props.timeTo}</p>
            </div>
            <div>{props.description}</div>
            <div>{props.nameuser}</div>
            <div>
              <ChevronRight /> View detail
            </div>
          </div>
        ) : (
          <div>
            <div>
              <p>We're sorry, there are no more classes today.</p>
            </div>
            <div>
              We looked, but we didn't find anything available based on your
              search. Try another day or
            </div>
            <div>
              <Button className="w-full h-14">Change filter</Button>
            </div>
            <div>
              <p>Reset filter</p>
            </div>
          </div>
        )}
      </div>
      <div>
        <a href="https://www.mindbodyonline.com/" className="w-full h-14">
          mindbody
        </a>
      </div>
    </div>
  );
}

export default ScheduleBook;
