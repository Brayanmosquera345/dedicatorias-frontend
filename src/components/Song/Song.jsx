import { useEffect, useRef } from "react";
import PlayIcon from "../icons/PlayIcon";
import PauseIcon from "../icons/PauseIcon";

export default function Song({ id, title, artist, image, selected = false, songURL, isPlaying, onPlay, onSelectSong }) {
  const audioRef = useRef(null);

  // Si esta canción debe sonar, dale play. Si no, asegúrate de pausarla.
  useEffect(() => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  return (
    <div
      className={`flex justify-between items-center border rounded-lg p-2 cursor-pointer hover:bg-divider/30 transition-colors duration-200 ${
        selected ? "border-primary" : "border-transparent"
      }`}
      onClick={onSelectSong}
    >
      <div className="flex items-center gap-4">
        <img src={image} alt={title} className="size-14 object-cover rounded-lg" />
        <div>
          <h3 className="text-title font-semibold">{title}</h3>
          <p className="text-paragraph font-satoshi">{artist}</p>
        </div>
      </div>

      {/* Botón Play / Pause */}
      <button
        onClick={(e) => {
          e.stopPropagation(); // evitar que dispare el onSelectSong
          onPlay(id); // notifica al padre
        }}
        className={`cursor-pointer hover:text-primary transition-colors duration-200 ${
          selected ? "text-primary" : "text-paragraph"
        }`}
      >
        {isPlaying ? <PauseIcon size={36} /> : <PlayIcon size={36} />}
      </button>

      {/* Elemento de audio oculto */}
      <audio ref={audioRef} src={songURL} />
    </div>
  );
}
