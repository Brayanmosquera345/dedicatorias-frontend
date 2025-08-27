import { Link } from "react-router-dom";
import { useState } from "react";
import Button from "../components/Buttons/Button";
import LogoIcon from "../components/icons/LogoIcon";
import CheckIcon from "../components/icons/CheckIcon";
import LinkIcon from "../components/icons/LinkIcon";
const urlFrontend = import.meta.env.VITE_FRONTEND_URL;
import useCreateDedicationStore from "../store/createDedicationStore";

export default function CopyUrlPage() {
  const { id_dedication } = useCreateDedicationStore();
  const [copiated, setCopiated] = useState(false);

  function copyUrl() {
    setCopiated(true);
    navigator.clipboard.writeText(
      `${urlFrontend}/dedicatoria/${id_dedication}`
    );
    setTimeout(() => {
      setCopiated(false);
    }, 2000);
  }

  return (
    <section className="relative space-y-4 w-full h-[70vh] lg:w-5xl border border-divider rounded-lg bg-divider/25 backdrop-blur-xl backdrop-saturate-180 p-4 flex justify-center items-center">
      <div
        className="absolute inset-0 pointer-events-none  h-full w-full"
        style={{
          backgroundImage: `url("https://res.cloudinary.com/dlmhszrtv/image/upload/v1755870551/Noise_qdazex.png")`,
        }}
      ></div>
      <div className="relative z-10 space-y-4">
        <div className="flex items-center justify-center">
          <LogoIcon size={60} />
        </div>
        <h1 className="text-2xl text-title font-bold text-center">
          ¡Tu dedicatoria está lista!
        </h1>
        <p className="text-paragraph text-center">
          Copia la URL de tu dedicatoria para compartirla en WhatsApp, Instagram
          o donde quieras.
        </p>
        <section className="space-y-4">
          <div className="flex flex-col items-center justify-center gap-2">
            <p className="text-title font-medium border border-title rounded-lg py-4 px-8 text-center">
              {urlFrontend}/dedicatoria/{id_dedication}
            </p>
          </div>
          <footer className="flex flex-col md:flex-row justify-center items-center gap-2">
            <Link to="/" className="w-full md:w-auto">
              <Button
                text="Volver al inicio"
                variant="secondary"
                size="lg"
                className="w-full md:w-auto"
              />
            </Link>
            <Button
              text="Copiar URL"
              variant="primary"
              className="w-full md:w-auto"
              onClick={copyUrl}
              size="lg"
              iconRight={ copiated ? <CheckIcon size={20} /> : <LinkIcon size={20} /> }
            />
          </footer>
        </section>
      </div>
    </section>
  );
}
