// SkeletonSong.jsx
export default function SongLoader() {
  return (
    <div
      className="flex justify-between items-center border border-divider rounded-lg p-2 animate-pulse"
    >
      <div className="flex items-center gap-4">
        {/* Imagen */}
        <div className="size-14 bg-divider/50 rounded-lg"></div>

        <div className="flex flex-col gap-2">
          {/* Título */}
          <div className="h-4 w-28 bg-divider/50 rounded"></div>
          {/* Artista */}
          <div className="h-3 w-20 bg-divider/50 rounded"></div>
        </div>
      </div>

      {/* Botón Play/Pause */}
      <div className="size-9 bg-divider/50 rounded-full"></div>
    </div>
  );
}
