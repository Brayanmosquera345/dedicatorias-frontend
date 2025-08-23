import { Link } from "react-router-dom";

import Button from "../components/buttons/button";
import DedicationCard from "../components/DedicationCard/DedicationCard";

export default function PreviewPage() {
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
          Vista previa
        </h1>
        <p className="text-paragraph text-center">
          ✨ Así se verá tu dedicatoria al compartirla. Recuerda que puedes
          personalizarla y editar lo que desees antes de enviarla.
        </p>
        <section className="space-y-4 h-[500px] overflow-auto py-2">
          <div className="h-[90vh] overflow-y-auto flex justify-center">
            <DedicationCard
              message="Escribe exactamente lo que sientes. Cada palabra cuenta cuando la dejas salir de tu corazón."
              author="David Mosquera"
              image="https://images.pexels.com/photos/10920818/pexels-photo-10920818.jpeg"
              songURL="https://samplelib.com/lib/preview/mp3/sample-15s.mp3"
              title="La vida es un sueño"
              artist="Enrique Iglesias"
            />
          </div>
        </section>
        <footer className="flex flex-col md:flex-row justify-center items-center gap-2">
          <Link to="/crear-dedicatoria/imagen" className="w-full md:w-auto">
            <Button text="Volver" variant="secondary" className="w-full md:w-auto" size="lg" />
          </Link>
          <Link to="/crear-dedicatoria/copia-url" className="w-full md:w-auto">
            <Button text="Crear dedicatoria" variant="primary" className="w-full md:w-auto" size="lg" />
          </Link>
        </footer>
      </div>
    </section>
  );
}
