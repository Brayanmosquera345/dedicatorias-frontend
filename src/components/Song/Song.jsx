import { useRef, useState } from "react";
import PlayIcon from "../icons/PlayIcon";
import PauseIcon from "../icons/PauseIcon";

export default function Song({ title, artist, image, selected = false, songURL= 'https://samplelib.com/lib/preview/mp3/sample-15s.mp3' }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div
      className={`flex justify-between items-center border rounded-lg p-2 ${
        selected ? "border-primary" : "border-transparent"
      }`}
    >
      <div className="flex items-center gap-4">
        <img
          src={image}
          alt={title}
          className="size-14 object-cover rounded-lg"
        />
        <div>
          <h3 className="text-title font-semibold">{title}</h3>
          <p className="text-paragraph font-satoshi">{artist}</p>
        </div>
      </div>

      {/* Botón Play / Pause */}
      <button
        onClick={handlePlayPause}
        className={`cursor-pointer hover:text-primary transition-colors duration-200 ${
          selected ? "text-primary" : "text-paragraph"
        }`}
      >
        {isPlaying ? <PauseIcon size={36} /> : <PlayIcon size={36} />}
      </button>

      {/* Elemento de audio oculto */}
      <audio
        ref={audioRef}
        src={songURL}
        onEnded={() => setIsPlaying(false)} // cuando termina, vuelve al estado "pausado"
      />
    </div>
  );
}
