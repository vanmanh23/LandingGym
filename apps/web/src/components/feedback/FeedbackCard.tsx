import gradientquote from "@/assets/images/feedback/gradient-quote.png"
type Props = {
    name: string,
    feedback: string,
}
export default function FeedbackCard({...props}: Props) {
  return (
    <div className="">
        <div className="relative w-full mb-6">
           <div className="absolute -top-12 left-1/2 z-10 ">
           <img src={gradientquote} alt="gradient-quote" />
           </div>
            <h2 className="relative text-fourth font-bold text-5xl uppercase z-20">what they say</h2>
        </div>
        <div className="mb-6">
            <p className="text-gray-400 text-xl">{props.feedback}</p>
        </div>
        <div>
            <h3 className="font-semibold">by {props.name}</h3>
        </div>
    </div>
  )
}
