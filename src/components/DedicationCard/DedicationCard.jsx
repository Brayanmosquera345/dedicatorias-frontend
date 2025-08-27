import LogoIcon from "../icons/LogoIcon";
import ReproductorSong from "../ReproductorSong/ReproductorSong";

export default function DedicationCard({
  message,
  author,
  image,
  songURL,
  title,
  artist,
}) {
  return (
    <div className="rounded-2xl relative overflow-hidden h-full w-full md:w-2/3 lg:w-1/3 ">
      <div className="z-30 size-full relative flex flex-col justify-between py-6">
        <header className="flex flex-col items-center gap-2 w-full text-center">
          <LogoIcon size={40} />
          <p className="text-title font-semibold text-lg max-w-3/4">
            "{message}"
          </p>
          <p className="text-paragraph">- {author}</p>
        </header>
        <footer className="flex flex-col items-center gap-2 w-full text-center">
          <ReproductorSong
            songURL={songURL}
            songTitle={title}
            artist={artist}
          />
        </footer>
      </div>
      <div
        className="absolute inset-0 pointer-events-none opacity-40 z-20 h-full w-full"
        style={{
          backgroundImage: `url("https://res.cloudinary.com/dlmhszrtv/image/upload/v1755870551/Noise_qdazex.png")`,
        }}
      ></div>
      <div className="size-full inset-0 absolute bg-divider/50 z-10"></div>
      <img
        src={image}
        alt={title}
        className="size-full absolute object-cover inset-0"
      />
    </div>
  );
}
