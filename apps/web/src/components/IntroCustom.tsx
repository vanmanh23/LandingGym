import { ConciergeBell } from "lucide-react"
import { Button } from "./ui/button"

export default function IntroCustom() {
    const sourcevideo = "https://www.sofitgympooler.com/wp-content/uploads/2023/01/Join_So_Fit_Gym.mp4"
  return (
    <div>
        <div className="flex w-5/6 md:w-1/2 m-auto text-center">
            <p className="text-5xl md:text-6xl font-bold text-primary relative z-50">THE PREMIER 
            <span className="inline-block z-20 after:content-[''] after:-z-20 after:block after:relative after:-top-3 md:after:-top-5 after:h-4 md:after:h-7 after:bg-primary after:w-full after:bg-gradient-to-r after:from-thirdary after:to-secondary ">24/7 FITNESS CENTER</span>
             IN POOLER, GA</p>
        </div>
        <div className="w-4/5 m-auto flex flex-col md:flex-row justify-between mt-24 gap-24">
            <div className="md:w-1/2">
                <video controls>
                    <source src={sourcevideo} type="video/mp4" />
                </video>
            </div>
            <div className="md:w-1/2 flex flex-col justify-center text-center text-fourth">
                <h2 className="text-4xl w-5/6 m-auto font-semibold">OUR GYM IS OPEN 
                <span className="drop-shadow-2xl shadow-gray-700"> 24/7 </span> 
                TO OUR MEMBERS</h2>
                <div className="flex flex-col justify-center items-center my-6">
                    <div><ConciergeBell className="text-secondary w-12 h-12"/></div>
                    <p className="text-2xl font-medium text-fourth">OUR FRONT DESK IS OPEN:</p>
                </div>
                <div className="text-fourth text-base font-bold">
                    <p>MON – THURS: 8AM – 6PM</p>
                    <p>FRI: 8AM – 5PM</p>
                    <p>SAT: 8AM – 1PM</p>
                    <p>SUN: 9AM – 12PM</p>
                </div>
                <div>
                    <Button className="mt-6 text-base font-bold uppercase h-14 w-36 md:w-48">join our gym</Button>
                </div>
            </div>
        </div>
    </div>
  )
}
