interface BackgroundHeaderProps {
    imageurl: string;
  }
export default function BackgroundHeader({imageurl} : BackgroundHeaderProps) {
  return (
    <div
      className="flex items-center justify-center w-full h-96 bg-fixed bg-cover"
      style={{backgroundImage: `url(${imageurl})`}}
    >
      <div>
        <h1 className="uppercase text-5xl font-bold text-white flex items-center text-center justify-center">culture & events</h1>
      </div>
    </div>
  );
}
