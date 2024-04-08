import { trainers } from "@/apis/trainers"
import TrainerCard from "./TrainerCard"
import { Button } from "../ui/button"
import { Link } from "react-router-dom"

export default function ProTrainer() {
  return (
    <div className="flex flex-col justify-center items-center w-full">
        <div className="w-full md:w-fit">
            <div className="relative flex text-4xl font-semibold gap-3 text-fourth z-30 md:flex-row flex-col text-center w-3/4 md:w-full md:m-0 m-auto">
                <span className="inline-block after:content-[''] after:block after:relative after:-top-4 after:-z-10 after:h-4 after:w-full after:bg-gradient-to-r after:from-thirdary after:to-secondary">PROFESSIONAL</span> 
                <p>TRAINERS</p>
                </div>
        </div>
        <div className="md:w-1/2 w-2/3 m-auto mt-4 mb-8">
            <p className="text-xl text-center font-medium">Our certified personal trainers are available 7 days a week.  So Fit Gym offers premium individualized training to help you reach your health and fitness goals.</p>
        </div>
        <div className="flex flex-col md:flex-row justify-around gap-3">
           {trainers.map((item, index) => (
               <TrainerCard image={item.img} name={item.name} key={index} />
           ))}
        </div>
        <div>
            <Button className="uppercase mt-8"><Link to="/">meet our teem</Link></Button>
        </div>
    </div>
  )
}
