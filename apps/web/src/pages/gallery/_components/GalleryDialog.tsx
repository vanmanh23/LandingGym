import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";

type galleryProps = {
  data: { id: number; name: string; img: string }[];
  sectionIndex: number;
};
export default function GalleryDialog({ data, sectionIndex }: galleryProps) {
  const [itemindex, setItemindex] = React.useState(sectionIndex);

  const handleNext = () => {
    if (itemindex === data.length) {
      setItemindex(0);
      console.log("itemindex", itemindex);
    } else {
      setItemindex(itemindex + 1);
    }
  };

  const handlePrevious = () => {
    if (itemindex === 0) {
      setItemindex(data.length);
      console.log("itemindex", itemindex);
    } else {
      setItemindex(itemindex - 1);
    }
  };
  return (
    <div className="w-full h-full ">
      <Dialog>
        <DialogTrigger asChild>
        <div className="z-50" >
            <img src={data[sectionIndex].img} alt="image" className={`w-full h-full`}/>
        </div>
        </DialogTrigger>
        <DialogContent className="flex flex-col w-10/12 h-96 outline-none border-0">
          <div className="flex relative w-full h-full ">
            <Carousel className="w-full h-full">
              <CarouselContent className="w-full h-full">
                {data
                  .slice(itemindex, data.length - sectionIndex)
                  .map((item, index) => (
                    <CarouselItem key={index}>
                      <div className="w-full h-full flex flex-col justify-center items-center m-auto">
                        <div>
                          <img
                            src={item.img}
                            alt="image"
                            className="w-full h-full flex flex-col object-cover"
                          />
                        </div>
                        <div className="flex relative left-0 w-full flex-row text-white justify-start text-left opacity-60">
                          <ChevronLeft
                            onClick={() => handlePrevious()}
                            className="cursor-pointer"
                          />{" "}
                          {itemindex + 1} / {data.length}{" "}
                          <ChevronRight onClick={() => handleNext()} className="cursor-pointer"/>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
              </CarouselContent>
              <CarouselPrevious onClick={() => handlePrevious()} />
              <CarouselNext onClick={() => handleNext()} />
            </Carousel>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
