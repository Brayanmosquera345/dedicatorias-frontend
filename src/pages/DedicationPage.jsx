import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import DedicationCard from "../components/DedicationCard/DedicationCard";
import { useDedication } from "../hooks/useDedication";
import FloatingHearts from "../components/FloatingHearts/FloatingHearts";
import Footer from "../components/footer/Footer";
import DedicationLoader from "../components/DedicationCard/Dedicationloader";
import Error from "../components/Error/Error";
import Button from "../components/Buttons/button";

export default function DedicationPage() {
  const { id } = useParams();
  const { data, isLoading, isError } = useDedication(id);

  return (
    <section className="min-h-screen bg-gradient-to-b from-background via-primary-1000 to-background">
      <div className="relative flex flex-col justify-center items-center p-2 md:p-6 gap-12">
        <FloatingHearts />
        {isError ? (
          <div className="h-[90vh] w-full flex flex-col justify-center items-center gap-4">
            <Error
              text="Error al traer la dedicatoria"
              description="Lo siento, hubo un error al traer la dedicatoria. Por favor, inténtalo más tarde."
            />
            <Link to="/" className="w-full md:w-auto">
                <Button text="Volver al inicio" size="lg" className="w-full md:w-auto" />
            </Link>
          </div>
        ) : (
          <div className="relative h-[90vh] w-full flex justify-center">
            {isLoading ? (
              <DedicationLoader />
            ) : (
              <DedicationCard
                message={data?.message}
                author={data?.author}
                image={data?.image}
                songURL={data?.preview_url}
                title={data?.song_name}
                artist={data?.artist}
              />
            )}
          </div>
        )}
      </div>
      <Footer />
    </section>
  );
}
