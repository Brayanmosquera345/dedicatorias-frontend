import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import Button from "../../components/Buttons/Button";
import Input from "../../components/Inputs/Input";
import Song from "../../components/Song/Song";
import { useSearchSongsManual } from "../../hooks/useSearchSong";
import useCreateDedicationStore from "../../store/createDedicationStore";
import SelectedSongLoader from "./SelectedSongLoader";
import Empty from "../../components/Empty/Empty";
import { MusicIcon } from "../../components/icons/MusicIcon";
import Error from "../../components/Error/Error";
import Notification from "../../components/Notification/Notification";

export default function SelectedSongPage() {

  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState("");
  const [notification, setNotification] = useState(null); // {title, message}

  const {
    data: listSong,
    isLoading,
    isError,
  } = useSearchSongsManual(searchQuery);
  const {
    setSongId,
    song_id,
    setSongName,
    setArtist,
    setImageCancion,
    setPreviewUrl,
  } = useCreateDedicationStore();

  function selectedSong(song) {
    setSongId(song.id);
    setSongName(song.title);
    setArtist(song.artist);
    setImageCancion(song.image);
    setPreviewUrl(song.song_url);
  }

  function handleNext() {
    if (!song_id) {
      return setNotification({
        title: "Error",
        message: "Debes seleccionar una canción antes de continuar.",
      });
    }
    navigate("/crear-dedicatoria/imagen");
  }

  return (
    <div>
      {notification && (
        <Notification
          title={notification.title}
          message={notification.message}
          onClose={() => setNotification(null)}
        />
      )}
      <section className="relative space-y-4 w-full lg:w-5xl border border-divider rounded-lg bg-divider/25 backdrop-blur-xl backdrop-saturate-180 p-4">
        <div className="glass"></div>
        <div className="relative z-10">
          <h1 className="text-2xl text-title font-bold text-center">
            Selecciona una canción
          </h1>
          <p className="text-paragraph text-center">
            Selecciona la canción que exprese tus sentimientos y haga único este momento.
          </p>
          {isError ? (
            <section className="flex justify-center items-center min-h-96">
              <Error
                text="Error al traer las canciones"
                description="Lo siento, hubo un error al buscar las canciones. Por favor, inténtalo más tarde."
              />
            </section>
          ) : (
            <section className="space-y-4">
              <Input
                placeholder="Busca una canción"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {isLoading ? (
                <SelectedSongLoader />
              ) : (
                <div className="h-80 overflow-y-auto space-y-1">
                  {listSong?.length === 0 ? (
                    <div className="h-full w-full flex justify-center items-center">
                      <Empty
                        children={<MusicIcon size={48} />}
                        text="No hay canciones"
                        description="Lo siento, no hay canciones que coincidan con tu búsqueda."
                      />
                    </div>
                  ) : (
                    listSong?.map((song, index) => (
                      <Song
                        key={index}
                        songURL={song.song_url}
                        title={song.title}
                        artist={song.artist}
                        image={song.image}
                        selected={song_id === song.id}
                        onSelectSong={() => selectedSong(song)}
                      />
                    ))
                  )}
                </div>
              )}

              <footer className="flex flex-col md:flex-row justify-center items-center gap-2">
                <Link to="/crear-dedicatoria" className="w-full md:w-auto">
                  <Button
                    text="Volver"
                    variant="secondary"
                    className="w-full md:w-auto"
                    size="lg"
                  />
                </Link>
                  <Button
                    text="Siguiente"
                    variant="primary"
                    className="w-full md:w-auto"
                    size="lg"
                    onClick={handleNext}
                  />
              </footer>
            </section>
          )}
        </div>
      </section>
    </div>
  );
}
