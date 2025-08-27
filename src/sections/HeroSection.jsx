import { Link } from "react-router-dom";

import Button from "../components/buttons/button";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="flex flex-col justify-center items-center w-full text-center space-y-8 py-12"
    >
      <div className="space-y-2">
        <h1
          className="text-4xl md:text-5xl lg:text-7xl font-sans font-black bg-gradient-to-r from-title via-primary to-secondary bg-clip-text text-transparent max-w-6xl">
          Crea dedicatorias únicas que conquisten corazones
        </h1>
        <p className="text-paragraph text-md">
          Tus palabras, su canción favorita y el instante ideal: la combinación
          perfecta para una experiencia que quedará en su corazón.
        </p>
      </div>
      <Link to="/crear-dedicatoria">
        <Button size="lg" text="Crear dedicatoria" className="w-60" />
      </Link>
    </section>
  );
}
