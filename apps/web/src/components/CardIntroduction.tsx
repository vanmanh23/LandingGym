import {  useState } from "react";

interface CardIntroductionProps {
    image: string;
    title: string;
    content: string;
}
export default function CardIntroduction({image, title, content}: CardIntroductionProps) {
  const [moveinto, setMoveinto] = useState(false);
    console.log(moveinto)
    return (
    <div onMouseOver={() => setMoveinto(true)} onMouseLeave={() => setMoveinto(false)} className="flex flex-col justify-center items-center h-2/3 w-72 bg-white rounded-md border-none shadow-2xl shadow-gray-300 py-12">
        <div className={`${moveinto ? "-translate-y-4 duration-700" : "translate-y-0 duration-700"} pb-5`}>
            <img src={image} alt={image} />
        </div>
        <div className="flex flex-col justify-center items-center mb-5">
            <div>
            <h2  className="text-2xl font-bold  text-primary text-center">{title}</h2>
            <p className="text-center opacity-50 mt-3 mb-5 text-md mx-8">{content}</p>
            </div>
            <div><a className="uppercase underline text-sm font-semibold text-primary hover:text-secondary">join now</a></div>
        </div>
    </div>
  )
}
