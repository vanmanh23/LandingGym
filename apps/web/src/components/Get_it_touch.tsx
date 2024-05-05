import { MessageCircle, NotebookPen, Phone, PhoneCall } from "lucide-react";
import React from "react";

export default function Getittouch() {
  const [hidden, setHidden] = React.useState(true);
  const handHidden = () => {
    setHidden(!hidden);
  };
  return (
    <div className="flex flex-row items-center justify-between">
      <div className={`bg-primary rounded-md ${hidden ? "block" : "hidden"}`}>
        <p className="py-1 text-white px-4 capitalize">get it touch</p>
      </div>
      <div className="flex flex-col gap-3">
        <div className={`flex flex-col gap-3 ${hidden ? "hidden" : "block"}`}>
            <div className="flex flex-row gap-4 items-center justify-end">
                <div className="py-1 px-4 bg-primary rounded-md"><p className="text-white">Call</p></div>
                <div className="p-4 bg-primary text-secondary rounded-full"><Phone /></div>
            </div>
            <div className="flex flex-row gap-4 items-center justify-end">
                <div className="py-1 px-4 bg-primary rounded-md"><p className="text-white">Chat</p></div>
                <div className="p-4 bg-primary text-secondary rounded-full"><MessageCircle /></div>
            </div>
            <div className="flex flex-row gap-4 items-center justify-end">
                <div className="py-1 px-4 bg-primary rounded-md"><p className="text-white capitalize">join out gym</p></div>
                <div className="p-4 bg-primary text-secondary rounded-full"><NotebookPen /></div>
            </div>
        </div>
        <div>
        <div className="flex relative float-end items-center h-fit w-fit p-4 bg-primary text-thirdary rounded-full" onClick={handHidden}>
          <PhoneCall className={`${hidden ? "rotate-0" : "rotate-45 duration-500 ease-in-out"}`} />
        </div>
        </div>
      </div>
    </div>
  );
}
