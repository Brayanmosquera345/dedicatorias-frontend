import { useState } from "react";

import Input from "../../components/Inputs/Input";
import ImageOption from "../../components/Image/ImagenOption";
import Button from "../../components/buttons/button";
import useCreateDedicationStore from "../../store/createDedicationStore";
import Error from "../../components/Error/Error";
import Empty from "../../components/Empty/Empty";
import ImageIcon from "../../components/icons/ImageIcon";

export default function UpCustomImage() {
  const [imageLocal, setImageLocal] = useState("");
  const [status, setStatus] = useState("empty"); // "empty" | "error" | "success"

  const { setImage, setImageId } = useCreateDedicationStore();

  function selectedImage() {
    if (!imageLocal || imageLocal.trim() === "") {
      setStatus("empty");
      return;
    }
    // Validar cargando la imagen
    const img = new Image();
    img.src = imageLocal;
    img.onload = () => {
      setStatus("success");
      setImage(imageLocal);
      setImageId(8551);
    };
    img.onerror = () => {
      setStatus("error");
    };
  }

  return (
    <div className="py-6 space-y-2">
      <p className="text-paragraph font-medium">
        Escribe la URL de una imagen pública
      </p>
      <div className="flex flex-col md:flex-row gap-2 items-center">
        <Input
          placeholder="URL de la imagen"
          type="text"
          className="w-full md:w-auto md:flex-1"
          value={imageLocal}
          onChange={(e) => {
            setImageLocal(e.target.value);
            setStatus("empty"); // Resetear estado al escribir
          }}
        />
        <Button
          text="Usar imagen"
          variant="primary"
          className="w-full md:w-auto"
          onClick={selectedImage}
        />
      </div>

      <section className="flex justify-center items-center w-full h-80">
        {status === "empty" && (
          <Empty
            children={<ImageIcon size={48} />}
            text="No hay imagen"
            description="Debes pegar la URL de la imagen que deseas usar."
          />
        )}

        {status === "error" && (
          <Error
            text="Error"
            description="La URL de la imagen no es válida o no se pudo cargar."
          />
        )}

        {status === "success" && (
          <div className="w-1/4 h-full flex justify-center items-center">
            <ImageOption
              image={imageLocal}
              selected={true}
              onSelectImage={() => {}}
            />
          </div>
        )}
      </section>
    </div>
  );
}
