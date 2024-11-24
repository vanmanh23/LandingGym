interface BackgroundHeaderProps {
    imageurl: string;
  }
export default function BackgroundHeader({imageurl} : BackgroundHeaderProps) {
  return (
    <div
      className="flex items-center justify-center w-full md:h-[500px] h-96 bg-fixed bg-cover bg-center"
      style={{backgroundImage: `url(${imageurl})`, backgroundSize: "cover", backgroundRepeat: "no-repeat"}}
    >
      <div>
        <h1 className="uppercase text-5xl font-bold text-white flex items-center text-center justify-center">culture & events</h1>
      </div>
    </div>
  );
}
