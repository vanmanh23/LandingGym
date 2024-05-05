import BackgroundHeader from "@/components/BackgroundHeader";
import React from "react";
import culture from "../../assets/images/culturebg.jpg";
import explore from "@/assets/images/explore.jpeg";
import Flyer from "./_components/Flyer";
import oddlot from "@/assets/images/oddlot.jpg";
import { Button } from "@/components/ui/button";

import flyer1 from '@/assets/images/sofitculture/Murph2022-100-min.jpg';
import flyer2 from '@/assets/images/sofitculture/Murph2022-101-min.jpg';
import flyer3 from '@/assets/images/sofitculture/Murph2022-131-min.jpg';
import flyer4 from '@/assets/images/sofitculture/Murph2022-147-min.jpg';
import flyer5 from '@/assets/images/sofitculture/Murph2022-153-min.jpg';
import flyer6 from '@/assets/images/sofitculture/Murph2022-16-min.jpg';
import flyer7 from '@/assets/images/sofitculture/Murph2022-167-min.jpg';
import flyer8 from '@/assets/images/sofitculture/Murph2022-176-min.jpg';
import flyer9 from '@/assets/images/sofitculture/Murph2022-20-min.jpg';
import flyer10 from '@/assets/images/sofitculture/Murph2022-250-min.jpg';
import flyer11 from '@/assets/images/sofitculture/Murph2022-27-min.jpg';
import flyer12 from '@/assets/images/sofitculture/Murph2022-291-min.jpg';
import flyer13 from '@/assets/images/sofitculture/Murph2022-304-min.jpg';
import flyer14 from '@/assets/images/sofitculture/Murph2022-305-min.jpg';
import flyer15 from '@/assets/images/sofitculture/Murph2022-40-min.jpg';
import flyer16 from '@/assets/images/sofitculture/Murph2022-46-min.jpg';
import flyer17 from '@/assets/images/sofitculture/Murph2022-52-min.jpg';
import flyer18 from '@/assets/images/sofitculture/Murph2022-59-min.jpg';
import flyer19 from '@/assets/images/sofitculture/Murph2022-62-min.jpg';
import flyer20 from '@/assets/images/sofitculture/Murph2022-65-min.jpg';
import flyer21 from '@/assets/images/sofitculture/Murph2022-91-min.jpg';
import GalleryDialog from "../gallery/_components/GalleryDialog";
import SpecificParagraph from "@/components/SpecificParagraph";

import eventimg1 from '@/assets/images/sofitculture/event-img1-min.jpg';
import eventimg2 from '@/assets/images/sofitculture/event-img2-min.jpg';
import eventimg3 from '@/assets/images/sofitculture/event-img3-min.jpg';
import eventimg4 from '@/assets/images/sofitculture/event-img4-min.jpg';
import eventimg5 from '@/assets/images/sofitculture/event-img5-min.jpg';

const FlyerData = [
    {
        id: 1,
        name: "flyer 1",
        img: flyer1,
    },
    {
        id: 2,
        name: "flyer 2",
        img: flyer2,
    },
    {
        id: 3,
        name: "flyer 3",
        img: flyer3,
    },
    {
        id: 4,
        name: "flyer 4",
        img: flyer4,
    },
    {
        id: 5,
        name: "flyer 5",
        img: flyer5,
    },
    {
        id: 6,
        name: "flyer 6",
        img: flyer6,
    },
    {
        id: 7,
        name: "flyer 7",
        img: flyer7,
    },
    {
        id: 8,
        name: "flyer 8",
        img: flyer8,
    },
    {
        id: 9,
        name: "flyer 9",
        img: flyer9,
    },
    {
        id: 10,
        name: "flyer 10",
        img: flyer10,
    },
    {
        id: 11,
        name: "flyer 11",
        img: flyer11,
    },
    {
        id: 12,
        name: "flyer 12",
        img: flyer12,
    },
    {
        id: 13,
        name: "flyer 13",
        img: flyer13,
    },
    {
        id: 14,
        name: "flyer 14",
        img: flyer14,
    },
    {
        id: 15,
        name: "flyer 15",
        img: flyer15,
    },
    {
        id: 16,
        name: "flyer 16",
        img: flyer16,
    },
    {
        id: 17,
        name: "flyer 17",
        img: flyer17,
    },
    {
        id: 18,
        name: "flyer 18",
        img: flyer18,
    },
    {
        id: 19,
        name: "flyer 19",
        img: flyer19,
    },
    {
        id: 20,
        name: "flyer 20",
        img: flyer20,
    },
    {
        id: 21,
        name: "flyer 21",
        img: flyer21,
    },
]
export default function index() {
  return (
    <div>
      <div>
        <BackgroundHeader imageurl={culture} />
      </div>
      <div className="flex flex-col md:flex-row w-10/12 m-auto gap-10 mt-10">
        <div>
          <Flyer image={explore} />
        </div>
        <div>
          <div className="flex flex-col items-center mt-7">
            <div className="mb-5">
              <h3 className="flex text-2xl md:text-4xl font-bold text-fourth uppercase z-50">
                <span className="z-20 mr-2 after:content-[''] after:-z-10 after:block after:relative after:-top-4 after:h-2 md:after:h-4 after:w-full after:bg-gradient-to-r after:from-thirdary after:to-secondary">
                  now at
                </span>{" "}
                so fit gym 
              </h3>
            </div>
            <div>
              <img src={oddlot} alt="explore" />
            </div>
            <div className="mt-5">
              <Button className="text-base uppercase py-6 px-8">learn more</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="my-10">
            <SpecificParagraph spantext="sofit" text="culture" />
        </div>
        <div>
            <p className="text-xl font-normal text-fourth uppercase">the murph challenge 2022</p>
        </div>
      <div className="w-10/12 m-auto mt-7">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FlyerData.map((item, index) => (
            <div
              className={`w-full`}
            >
              <GalleryDialog
                key={index}
                data={FlyerData}
                sectionIndex={index}
              />
            </div>
          ))}
        </div>
      </div>
      </div>
      <div className="w-10/12 m-auto mt-24 grid grid-cols-1 md:grid-cols-5 gap-10">
        <div className="col-span-3">
            <div className="mb-5">
                <h3 className="text-2xl text-primary text-center mb-6 font-bold uppercase">the murph challenge 2020</h3>
                <p className="text-base md:text-xl text-fourth text-center uppercase">For the 2020 Murph Challenge SoFit Gym raised $1000 for the official annual fundraiser of LT. Michael P. Murphy Memorial Scholarship Foundation. Great job to everyone who participated this past Memorial Day!</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div><img src={eventimg1} alt="event picture 1" /></div>
                <div><img src={eventimg2} alt="event picture 2" /></div>
                <div><img src={eventimg3} alt="event picture 3" /></div>
                <div><img src={eventimg4} alt="event picture 4" /></div>
            </div>
        </div>
        <div className="grid col-span-2">
            <div className="flex flex-col items-center w-full">
                <div className="w-5/6"><img src={eventimg5} alt="event picture 5" /></div>
                <div>
                    <h4 className="text-2xl text-primary text-center font-bold uppercase mb-4 mt-4">CONGRATULATIONS TO OUR MEMBER JESSICA HARRIS</h4>
                    <p className="text-base font-medium w-10/12 m-auto text-fourth text-center uppercase">on her recent wins at this year’s NCNPC competition!</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
