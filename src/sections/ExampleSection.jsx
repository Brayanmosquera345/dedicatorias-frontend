import DedicationCard from "../components/DedicationCard/DedicationCard";

export default function ExampleSection() {
  return (
    <section id="example" className="space-y-4 py-6 px-4">
      <header className="space-y-2 text-center">
        <h2 className="text-title font-semibold text-3xl">Asi se ve una dedicatoria</h2>
        <p className="text-paragraph">
          ✨ Así se verá tu dedicatoria al compartirla. Recuerda que puedes
          personalizarla y editar lo que desees antes de enviarla.✨
        </p>
      </header>
      <div className="h-[90vh] overflow-y-auto flex justify-center bg-gradient-to-b from-background via-primary-1000 via-60%  to-background">
        <DedicationCard
          message="Una vida a tu lado es un sueño, un sueño que disfruto cada día. Te amo."
          author="Brayan Mosquera"
          image="https://images.pexels.com/photos/14137216/pexels-photo-14137216.jpeg"
          songURL="https://res.cloudinary.com/dlmhszrtv/video/upload/v1756224452/Te_amo_Te_extra%C3%B1o-_Guayac%C3%A1n_Orquesta_-_Guayac%C3%A1n_Orquesta_Oficial_famhr7.mp3"
          title="Te amo, Te extraño"
          artist="Guayacán Orquesta"
        />
      </div>
    </section>
  );
}
