import GalleryDialog from "./_components/GalleryDialog";
import Feedback from "@/components/feedback/Feedback";
import { GalleryDatas } from "@/data/gallery_data";

export default function Component() {
  const gallerydatas = GalleryDatas;
  return (
    <div>
      <div className="flex justify-center my-14">
        <h2 className="text-4xl font-bold text-center mt-10 text-fourth flex justify-center md:flex-row flex-col w-7/12 m-auto">
          <span className="z-20 mr-3 after:content-[''] after:block after:relative after:-top-4 after:-z-10  after:h-4 after:w-full after:bg-gradient-to-r after:from-thirdary after:to-secondary">EXPERIENCE</span> OUR 24/7 FITNESS CENTER
        </h2>
      </div>
      <div className="w-10/12 m-auto mt-7">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {gallerydatas.map((_, index) => (
            <div
              className={`w-full`}
            >
              <GalleryDialog
                key={index}
                data={gallerydatas}
                sectionIndex={index}
              />
            </div>
          ))}
        </div>
      </div>
      <div>
        <Feedback />
      </div>
    </div>
  );
}
