import { useRef, useState, useEffect } from "react";
import PauseIcon from "../icons/PauseIcon";
import PlayIcon from "../icons/PlayIcon";

export default function ReproductorSong({ 
  songURL, 
  songTitle = "Nombre canción", 
  artist = "Cantante",
  className = "" 
}) {
  const audioRef = useRef(null);
  const progressRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [progress, setProgress] = useState(0);

  // Actualizar progreso
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => {
      setCurrentTime(audio.currentTime);
      const progressPercent = (audio.currentTime / audio.duration) * 100;
      setProgress(isNaN(progressPercent) ? 0 : progressPercent);
    };

    const updateDuration = () => {
      setDuration(audio.duration);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setProgress(0);
      setCurrentTime(0);
    };

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  const handlePlayPause = async () => {
    if (!audioRef.current) return;

    try {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        await audioRef.current.play();
        setIsPlaying(true);
      }
    } catch (error) {
      console.error('Error playing audio:', error);
      setIsPlaying(false);
    }
  };

  const handleProgressClick = (e) => {
    if (!audioRef.current || !progressRef.current) return;

    const rect = progressRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const progressWidth = rect.width;
    const clickPercent = clickX / progressWidth;
    
    const newTime = clickPercent * duration;
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const formatTime = (time) => {
    if (isNaN(time)) return "0:00";
    
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Audio element (oculto) */}
      <audio 
        ref={audioRef} 
        src={songURL}
        preload="metadata"
      />

      {/* Info de la canción */}
      <div className="text-center space-y-1">
        <h3 className="text-title font-semibold text-lg">{songTitle}</h3>
        <p className="text-paragraph text-sm opacity-70">{artist}</p>
      </div>

      {/* Barra de progreso */}
      <div className="space-y-2">
        <div 
          ref={progressRef}
          className="relative h-2 bg-paragraph/20 rounded-full cursor-pointer group"
          onClick={handleProgressClick}
        >
          {/* Progreso actual */}
          <div 
            className="absolute left-0 top-0 h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-150 ease-out"
            style={{ width: `${progress}%` }}
          />
          
          {/* Círculo indicador */}
          <div 
            className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg border-2 border-primary transition-all duration-150 ease-out group-hover:scale-110"
            style={{ 
              left: `calc(${progress}% - 8px)`,
              opacity: progress > 0 ? 1 : 0 
            }}
          />
        </div>

        {/* Tiempos */}
        <div className="flex justify-between text-xs text-paragraph/60">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      {/* Botón de play/pause */}
      <div className="flex justify-center">
        <button
          onClick={handlePlayPause}
          className="group relative text-title p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full transition-all duration-300 hover:bg-white/20 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary/50"
          aria-label={isPlaying ? "Pausar" : "Reproducir"}
        >
          {/* Animación de onda cuando está reproduciendo */}
          {isPlaying && (
            <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-ping" />
          )}
          
          <div className="relative z-10">
            {isPlaying ? (
              <PauseIcon size={36} className="text-white drop-shadow-sm" />
            ) : (
              <PlayIcon size={36} className="text-white drop-shadow-sm ml-1" />
            )}
          </div>
        </button>
      </div>

      {/* Estados de carga/error (opcional) */}
      {!songURL && (
        <div className="text-center text-paragraph/50 text-sm">
          No hay canción seleccionada
        </div>
      )}
    </div>
  );
}