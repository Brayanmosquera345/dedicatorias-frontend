export default function Footer() {
  return (
    <div className="bg-divider/10 relative">
      <footer class="">
        <div
        className="absolute inset-0 pointer-events-none opacity-40 z-20 h-full w-full"
        style={{
          backgroundImage: `url("https://res.cloudinary.com/dlmhszrtv/image/upload/v1755870551/Noise_qdazex.png")`,
        }}
      ></div>
        <div class="max-w-6xl mx-auto px-4 py-8">
          <div class="flex flex-col items-center gap-2 border-b border-divider pb-4">
            <h2 class="text-lg font-semibold tracking-wide text-title">Contacto</h2>
            <a
              href="mailto:david.mosquera.dev@gmail.com"
              class="text-paragraph transition-colors duration-200"
            >
              david.mosquera.dev@gmail.com
            </a>
          </div>

          <div class="mt-4 text-center text-paragraph text-sm">
            © {new Date().getFullYear()} Dedicatorias. Todos los
            derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
