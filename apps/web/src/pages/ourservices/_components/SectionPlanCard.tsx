import React from "react";



type SectionProps = {
  planName: string;
  content: string;
  price: string;
}
export default function SectionPlanCard({ planName, content, price }: SectionProps) {
  return (
    <div className="flex flex-col md:w-3/12 w-9/12 bg-white">
      {/* {PlansSections.map((item, index) => ( */}
        <div>
          <div className="flex items-center justify-center bg-primary h-12">
            <p className="text-thirdary font-bold capitalize">{planName}</p>
          </div>
          <div className="py-7 w-3/4 m-auto">
            <p className="text-center opacity-60 text-lg">{content}</p>
          </div>
          <div className="flex justify-center mb-3">
           {price && <p className="text-lg text-black font-semibold">${price}</p>} 
          </div>
        </div>
      <div className="flex justify-center mb-7"><p className="text-lg uppercase text-primary font-semibold underline">buy now</p></div>
    </div>
  );
}
