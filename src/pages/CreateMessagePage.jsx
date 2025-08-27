import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import Button from "../components/Buttons/Button";
import Textarea from "../components/Textarea/Textarea";
import Input from "../components/Inputs/Input";
import useCreateDedicationStore from "../store/createDedicationStore";
import Notification from "../components/Notification/Notification";

export default function CreateMessagePage() {
  const { setMessage, message, setAuthor, author } = useCreateDedicationStore();
  const [notification, setNotification] = useState(null); // {title, message}
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones
    if (!author.trim()) {
      return setNotification({
        title: "Error",
        message: "El nombre no puede estar vacío.",
      });
    }
    if (author.length > 20) {
      return setNotification({
        title: "Error",
        message: "El nombre no puede superar los 20 caracteres.",
      });
    }
    if (!message.trim()) {
      return setNotification({
        title: "Error",
        message: "El mensaje no puede estar vacío.",
      });
    }
    if (message.length > 100) {
      return setNotification({
        title: "Error",
        message: "El mensaje no puede superar los 100 caracteres.",
      });
    }

    // ✅ Si todo está bien
    navigate("/crear-dedicatoria/cancion");
  };

  return (
    <div>
      {notification && (
          <Notification
            title={notification.title}
            message={notification.message}
            onClose={() => setNotification(null)}
          />
        )}
      <section className="relative space-y-4 max-w-5xl border border-divider rounded-lg bg-divider/25 backdrop-blur-xl backdrop-saturate-180 p-4">
        <div className="glass"></div>
        <div className="relative z-10">
          <h1 className="text-2xl text-title font-bold text-center">
            Escribe un mensaje especial
          </h1>
          <p className="text-paragraph text-center">
            Escribe un pequeño mensaje que nazca desde el corazón. No importa lo
            elaborado que sea, lo que realmente cuenta son los sentimientos y la
            sinceridad que pongas en tus palabras.
          </p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <Input
                label="Nombre"
                placeholder="Nombre"
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
              <span className="text-paragraph text-xs">
                Máximo 20 caracteres
              </span>
            </div>

            <div className="w-full">
              <Textarea
                label="Mensaje"
                placeholder="Escribe aquí tu mensaje"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <span className="text-paragraph text-xs">
                Máximo 100 caracteres
              </span>
            </div>

            <footer className="flex flex-col md:flex-row justify-center items-center gap-2">
              <Link to="/" className="w-full md:w-auto">
                <Button
                  text="Cancelar"
                  variant="secondary"
                  className="w-full md:w-auto"
                  size="lg"
                />
              </Link>

              <Button
                type="submit"
                text="Siguiente"
                variant="primary"
                className="w-full md:w-auto"
                size="lg"
              />
            </footer>
          </form>
        </div>
      </section>
    </div>
  );
}
