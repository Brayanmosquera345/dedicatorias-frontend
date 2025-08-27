import { Link, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

import Button from "../../components/buttons/button";
import Input from "../../components/Inputs/Input";
import ImageOption from "../../components/Image/ImagenOption";
import { useSearchPhotos } from "../../hooks/useSearchPhotos";
import useCreateDedicationStore from "../../store/createDedicationStore";
import ImageLoader from "../../components/Image/ImagenLoader";
import Empty from "../../components/Empty/Empty";
import ImageIcon from "../../components/icons/ImageIcon";
import Error from "../../components/Error/Error";
import SelectedImageLoader from "./SelectedImageLoader";
import Notification from "../../components/Notification/Notification";
import TapImage from "../../components/TapImage/TapImage";
import UpCustomImage from "./UpCustomImage";

export default function SelectedImagenPage() {
  const navigate = useNavigate();

  const [query, setQuery] = useState("");
  const [notification, setNotification] = useState(null); // {title, message}
  const { setImage, setImageId, image_id } = useCreateDedicationStore();
  const [type, setType] = useState("search"); // "search" | "custom"

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isError,
    isLoading,
  } = useSearchPhotos(query, 500, 10);

  // Referencia al último elemento
  const loadMoreRef = useRef(null);

  const isEmpty = !data || data.pages.every((page) => page.length === 0);

  const listLoader = [1, 2, 3, 4, 5, 6];

  // IntersectionObserver para infinite scroll
  useEffect(() => {
    if (!hasNextPage || !loadMoreRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          fetchNextPage();
        }
      },
      { threshold: 1.0 }
    );

    observer.observe(loadMoreRef.current);

    return () => observer.disconnect();
  }, [hasNextPage, fetchNextPage]);

  function selectedImage(image) {
    setImage(image.url);
    setImageId(image.id);
  }

  function handleNext() {
    if (!image_id) {
      return setNotification({
        title: "Error",
        message: "Debes seleccionar una imagen antes de continuar.",
      });
    }
    navigate("/crear-dedicatoria/vista-previa");
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
            Selecciona una imagen
          </h1>
          <p className="text-paragraph text-center">
            Busca la imagen que exprese lo que sientes y convierta este instante
            en único.
          </p>
          <TapImage
            onSearchImage={() => setType("search")}
            onUploadImage={() => setType("custom")}
          />
          {type === "search" ? (
            isError ? (
              <section className="flex justify-center items-center min-h-96">
                <Error
                  text="Error al traer las imágenes"
                  description="Lo siento, hubo un error al buscar las imágenes. Por favor, inténtalo más tarde."
                />
              </section>
            ) : (
              <section className="space-y-4">
                <Input
                  placeholder="Busca una imagen"
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                {isLoading ? (
                  <SelectedImageLoader />
                ) : isEmpty ? (
                  <div className="min-h-96 flex justify-center items-center">
                    <Empty
                      children={<ImageIcon size={48} />}
                      text="No hay imágenes"
                      description="Lo siento, no hay imágenes que coincidan con tu búsqueda."
                    />
                  </div>
                ) : (
                  <div className="h-96 overflow-y-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                    {data?.pages.map((page) =>
                      page.map((image) => (
                        <ImageOption
                          key={image.id}
                          image={image.url}
                          selected={image_id === image.id}
                          onSelectImage={() => selectedImage(image)}
                        />
                      ))
                    )}
                    {isFetchingNextPage &&
                      listLoader.map((loader, index) => (
                        <ImageLoader key={index} />
                      ))}

                    <div ref={loadMoreRef} className="col-span-full h-2"></div>
                  </div>
                )}
              </section>
            )
          ) : (
            <UpCustomImage />
          )}
          <footer className="flex flex-col md:flex-row justify-center items-center gap-2">
            <Link to="/crear-dedicatoria/cancion" className="w-full md:w-auto">
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
        </div>
      </section>
    </div>
  );
}
