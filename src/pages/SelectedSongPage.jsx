import { Link } from "react-router-dom";

import Button from "../components/buttons/button";
import Input from "../components/Inputs/Input";
import Song from "../components/Song/Song";

export default function SelectedSongPage() {
  const listSong = [
    {
      title: "La vida es un sueño",
      artist: "Enrique Iglesias",
      selected: true,
      image:
        "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/armament-guns-music-album-cover-template-design-ad762621b1abfd9221d49b92c7b4cb73_screen.jpg?ts=1635377043",
    },
    {
      title: "La vida es un sueño",
      artist: "Enrique Iglesias",
      selected: false,
      image:
        "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/armament-guns-music-album-cover-template-design-ad762621b1abfd9221d49b92c7b4cb73_screen.jpg?ts=1635377043",
    },
    {
      title: "El amor es un sueño",
      artist: "Juanes",
      selected: false,
      image:
        "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/armament-guns-music-album-cover-template-design-ad762621b1abfd9221d49b92c7b4cb73_screen.jpg?ts=1635377043",
    },
    {
      title: "La vida es un sueño",
      artist: "Enrique Iglesias",
      selected: false,
      image:
        "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/armament-guns-music-album-cover-template-design-ad762621b1abfd9221d49b92c7b4cb73_screen.jpg?ts=1635377043",
    },
    {
      title: "La vida es un sueño",
      artist: "Enrique Iglesias",
      selected: false,
      image:
        "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/armament-guns-music-album-cover-template-design-ad762621b1abfd9221d49b92c7b4cb73_screen.jpg?ts=1635377043",
    },
    {
      title: "El amor es un sueño",
      artist: "Juanes",
      selected: false,
      image:
        "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/armament-guns-music-album-cover-template-design-ad762621b1abfd9221d49b92c7b4cb73_screen.jpg?ts=1635377043",
    },
    {
      title: "La vida es un sueño",
      artist: "Enrique Iglesias",
      selected: false,
      image:
        "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/armament-guns-music-album-cover-template-design-ad762621b1abfd9221d49b92c7b4cb73_screen.jpg?ts=1635377043",
    },
    {
      title: "La vida es un sueño",
      artist: "Enrique Iglesias",
      selected: false,
      image:
        "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/armament-guns-music-album-cover-template-design-ad762621b1abfd9221d49b92c7b4cb73_screen.jpg?ts=1635377043",
    },
    {
      title: "El amor es un sueño",
      artist: "Juanes",
      selected: false,
      image:
        "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/armament-guns-music-album-cover-template-design-ad762621b1abfd9221d49b92c7b4cb73_screen.jpg?ts=1635377043",
    },
  ];

  return (
    <section className="relative space-y-4 w-full lg:w-5xl border border-divider rounded-lg bg-divider/25 backdrop-blur-xl backdrop-saturate-180 p-4">
      <div
        className="absolute inset-0 pointer-events-none  h-full w-full"
        style={{
          backgroundImage: `url("https://res.cloudinary.com/dlmhszrtv/image/upload/v1755870551/Noise_qdazex.png")`,
        }}
      ></div>
      <div className="relative z-10">
        <h1 className="text-2xl text-title font-bold text-center">
          Selecciona una canción
        </h1>
        <p className="text-paragraph text-center">
          Selecciona una canción que te conecte y que te haga un momento
          especial.
        </p>
        <section className="space-y-4">
          <Input placeholder="Busca una canción" type="text" />
          <div className="h-80 overflow-y-auto">
            {listSong.map((song, index) => (
              <Song key={index} {...song} />
            ))}
          </div>

          <footer className="flex flex-col md:flex-row justify-center items-center gap-2">
            <Link to="/crear-dedicatoria" className="w-full md:w-auto">
              <Button text="Volver" variant="secondary" className="w-full md:w-auto" size="lg" />
            </Link>
            <Link to="/crear-dedicatoria/imagen" className="w-full md:w-auto">
              <Button text="Siguiente" variant="primary" className="w-full md:w-auto" size="lg" />
            </Link>
          </footer>
        </section>
      </div>
    </section>
  );
}
