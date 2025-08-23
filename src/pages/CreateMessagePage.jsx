import { Link } from "react-router-dom";

import Button from "../components/buttons/button";
import Textarea from "../components/Textarea/Textarea";
import Input from "../components/Inputs/Input";

export default function CreateMessagePage() {
  return (
    <section className="relative space-y-4 max-w-5xl border border-divider rounded-lg bg-divider/25 backdrop-blur-xl backdrop-saturate-180 p-4">
      <div
        className="absolute inset-0 pointer-events-none  h-full w-full"
        style={{
          backgroundImage: `url("https://res.cloudinary.com/dlmhszrtv/image/upload/v1755870551/Noise_qdazex.png")`,
        }}
      ></div>
      <div className="relative z-10">
        <h1 className="text-2xl text-title font-bold text-center">
          Escribe un mensaje especial
        </h1>
        <p className="text-paragraph text-center">
          Escribe un pequeño mensaje que nazca desde el corazón. No importa lo
          elaborado que sea, lo que realmente cuenta son los sentimientos y la
          sinceridad que pongas en tus palabras.
        </p>
        <form className="space-y-4" action="#">
          <Input label="Nombre" placeholder="Nombre" type="text" />
          <Textarea
            label="Mensaje"
            placeholder="Escribe aquí tu mensaje"
            value=""
            onChange={() => {}}
          />
          <footer className="flex flex-col md:flex-row justify-center items-center gap-2">
            <Link to="/" className="w-full md:w-auto">
              <Button text="Cancelar" variant="secondary" className="w-full md:w-auto" size="lg" />
            </Link>
            <Link to="/crear-dedicatoria/cancion" className="w-full md:w-auto">
              <Button text="Siguiente" variant="primary" className="w-full md:w-auto" size="lg" />
            </Link>
          </footer>
        </form>
      </div>
    </section>
  );
}
