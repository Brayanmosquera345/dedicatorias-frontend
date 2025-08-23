import { Link } from "react-router-dom";

import Button from "../components/buttons/button";
import Input from "../components/Inputs/Input";
import ImageOption from "../components/Image/ImagenOption";

export default function SelectedImagenPage() {
  const listImagen = [
    {
      image:
        "https://images.pexels.com/photos/13279226/pexels-photo-13279226.jpeg",
      selected: false,
    },
    {
      image:
        "https://images.pexels.com/photos/33190594/pexels-photo-33190594.jpeg",
      selected: false,
    },
    {
      image: "https://images.pexels.com/photos/673857/pexels-photo-673857.jpeg",
      selected: true,
    },
    {
      image:
        "https://images.pexels.com/photos/17624771/pexels-photo-17624771.jpeg",
      selected: false,
    },
    {
      image:
        "https://images.pexels.com/photos/4775477/pexels-photo-4775477.jpeg",
      selected: false,
    },
    {
      image: "https://images.pexels.com/photos/673857/pexels-photo-673857.jpeg",
      selected: false,
    },
    {
      image:
        "https://images.pexels.com/photos/33190594/pexels-photo-33190594.jpeg",
      selected: false,
    },
    {
      image: "https://images.pexels.com/photos/673857/pexels-photo-673857.jpeg",
      selected: true,
    },
    {
      image:
        "https://images.pexels.com/photos/17624771/pexels-photo-17624771.jpeg",
      selected: false,
    },
    {
      image:
        "https://images.pexels.com/photos/4775477/pexels-photo-4775477.jpeg",
      selected: false,
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
          Selecciona una imagen
        </h1>
        <p className="text-paragraph text-center">
          Busca una imagen que te conecte y que te haga un momento especial.
        </p>
        <section className="space-y-4">
          <Input placeholder="Busca una imagen" type="text" />
          <div className="h-96 overflow-y-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {listImagen.map((image, index) => (
              <ImageOption key={index} {...image} />
            ))}
          </div>

          <footer className="flex flex-col md:flex-row justify-center items-center gap-2">
            <Link to="/crear-dedicatoria/cancion" className="w-full md:w-auto">
              <Button text="Volver" variant="secondary" className="w-full md:w-auto" size="lg" />
            </Link>
            <Link to="/crear-dedicatoria/vista-previa" className="w-full md:w-auto">
              <Button text="Siguiente" variant="primary" className="w-full md:w-auto" size="lg" />
            </Link>
          </footer>
        </section>
      </div>
    </section>
  );
}
