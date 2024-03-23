import CardIntroduction from "./CardIntroduction";
import { dataIntroduction } from "@/lib/dataIntroduction";
export default function Introduction() {
  return (
    <div className="flex flex-col justify-center items-center md:flex-row md:w-4/5 md:m-auto md:gap-20">
        {dataIntroduction.map((item, index) => (
            <CardIntroduction key={index} image={item.image} title={item.title} content={item.content} />
        ))} 
    </div>
  )
}
