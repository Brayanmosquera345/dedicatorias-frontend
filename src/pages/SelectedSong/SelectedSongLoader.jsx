import SongLoader from "../../components/Song/SongLoader";

export default function SelectedSongLoader() {
  const listSong = [1, 2, 3, 4, 5, 6, 7];

  return (
    <div className="h-80 overflow-y-auto space-y-1">
      {listSong.map((song, index) => (
        <SongLoader key={index} />
      ))}
    </div>
  );
}
