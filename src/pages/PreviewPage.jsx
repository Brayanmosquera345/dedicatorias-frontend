import { Link, useNavigate } from "react-router-dom";
import DedicationService from "../services/dedication.service";
import { useState } from "react";

import Button from "../components/Buttons/button";
import DedicationCard from "../components/DedicationCard/DedicationCard";
import Notification from "../components/Notification/Notification";
import useCreateDedicationStore from "../store/createDedicationStore";

export default function PreviewPage() {
  const {
    message,
    author,
    song_name,
    artist,
    preview_url,
    image,
    song_id,
    image_cancion,
    setIdDedication,
    clearStore,
  } = useCreateDedicationStore();

  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState(null); // {title, message}

  async function createDedication() {
    try {
      setIsLoading(true);
      const data = {
        message,
        author,
        song_id,
        song_name,
        artist,
        preview_url,
        image_cancion,
        image,
      };
      const response = await DedicationService.createDedication(data);
      setIdDedication(response.id);
      clearStore();
      navigate("/crear-dedicatoria/copia-url", { replace: true });
    } catch (error) {
      setNotification({
        title: "Error",
        message:
          "Hubo un error al crear tu dedicación. Inténtalo de nuevo más tarde.",
      });
      console.log(error);
    } finally {
      setIsLoading(false);
    }
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
            Vista previa
          </h1>
          <p className="text-paragraph text-center">
            ✨Así se verá tu dedicatoria al compartirla. Recuerda que puedes
            personalizarla y editar lo que desees antes de enviarla.✨
          </p>
          <section className="space-y-4 h-[500px] overflow-auto py-2">
            <div className="h-[90vh] overflow-y-auto flex justify-center">
              <DedicationCard
                message={message}
                author={author}
                image={image}
                songURL={preview_url}
                title={song_name}
                artist={artist}
              />
            </div>
          </section>
          <footer className="flex flex-col md:flex-row justify-center items-center gap-2">
            <Link to="/crear-dedicatoria/imagen" className="w-full md:w-auto">
              <Button
                text="Volver"
                variant="secondary"
                className="w-full md:w-auto"
                size="lg"
              />
            </Link>
            <Button
              text="Crear dedicatoria"
              variant="primary"
              className="w-full md:w-auto"
              size="lg"
              onClick={createDedication}
              isLoading={isLoading}
            />
          </footer>
        </div>
      </section>
    </div>
  );
}
