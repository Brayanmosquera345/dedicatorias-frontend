import CardOperation from "../components/CardOperation/CardOperation"

export default function OperactionSection() {

    const listCardOperation = [
        {
            emoji: "💝",
            title: "Mensaje personalizado",
            message: "Escribe exactamente lo que sientes. Cada palabra cuenta cuando la dejas salir de tu corazón.",
        },
        {
            emoji: "🎵",
            title: "Canción favorita",
            message: "Busca entre millones de canciones en Spotify. Música que los conecte y haga el momento especial.",
        },
        {
            emoji: "🌺",
            title: "Imagen perfecta",
            message: "Elige entre miles de imágenes hermosas o sube la tuya propia. El fondo perfecto para tu mensaje.",
        },
        {
            emoji: "🔗",
            title: "Comparte en un clic",
            message: "Obtén un link único para compartir en WhatsApp, Instagram o donde quieras. Fácil y romántico.",
        },
        {
            emoji: "✨",
            title: "Experiencia mágica",
            message: "Animaciones suaves y un diseño que emociona. Cada detalle pensado para crear momentos especiales.",
        },
        {
            emoji: "📱",
            title: "Para cualquier dispositivo",
            message: "Se ve perfecto en móvil y computadora. Tu dedicatoria siempre lucirá increíblemente bien.",
        },

        
    ]


  return (
    <section id="funtionamiento" className="flex flex-col items-center bg-gradient-to-b from-background via-primary-1000 via-60%  to-background  py-12 px-4 text-center space-y-4">
        <h2 className="text-3xl text-title font-semibold">¿Como funciona?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
            {listCardOperation.map((cardOperation, index) => (
                <CardOperation key={index} {...cardOperation} />
            ))}
            
        </div>
    </section>
  )}