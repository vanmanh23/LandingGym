type TrainerProps = {
    image: string
    name: string
}
export default function TrainerCard({image, name}: TrainerProps) {
  return (
    <div className="flex flex-col h-87 w-64 bg-white drop-shadow-2xl">
        <div className="h-3/4">
            <img src={image} alt="image" className="w-full h-full"/>
        </div>
        <div className="flex text-xl font-semibold mt-3 justify-center items-center text-center">
            <p className="block uppercase after:contents-[''] after:block after:left-1/2 after:top-4 z-30 after:relative after:h-1 after:w-5 after:bg-secondary">{name}</p>
        </div>
    </div>
  )
}
