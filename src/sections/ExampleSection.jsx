import DedicationCard from "../components/DedicationCard/DedicationCard";

export default function ExampleSection() {
  return (
    <section id="example" className="space-y-4 py-6">
      <header className="space-y-2 text-center">
        <h2 className="text-title font-semibold text-3xl">Asi se ve una dedicatoria</h2>
        <p className="text-paragraph">
          ✨ Así se verá tu dedicatoria al compartirla. Recuerda que puedes
          personalizarla y editar lo que desees antes de enviarla.✨
        </p>
      </header>
      <div className="h-[90vh] overflow-y-auto flex justify-center bg-gradient-to-b from-background via-primary-1000 via-60%  to-background">
        <DedicationCard
          message="Escribe exactamente lo que sientes. Cada palabra cuenta cuando la dejas salir de tu corazón."
          author="David Mosquera"
          image="https://images.pexels.com/photos/14137216/pexels-photo-14137216.jpeg"
          songURL="https://samplelib.com/lib/preview/mp3/sample-15s.mp3"
          title="La vida es un sueño"
          artist="Enrique Iglesias"
        />
      </div>
    </section>
  );
}
