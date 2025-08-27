import { Link } from "react-router-dom";
import LogoIcon from "../icons/LogoIcon";
import LogoDeezer from "../icons/LogoDeezer";
import PexelsLogo from "../icons/PexelsLogo";

export default function Footer() {
  return (
    <footer className="relative bg-divider/10 mt-12">
      {/* background noise */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40 z-0"
        style={{
          backgroundImage: `url("https://res.cloudinary.com/dlmhszrtv/image/upload/v1755870551/Noise_qdazex.png")`,
        }}
      ></div>

      <div className="relative z-10 flex flex-col md:flex-row justify-between px-8 py-4 gap-4">
        {/* Logo + Landing */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <Link to="/" className="flex flex-col md:flex-row items-center gap-2">
            <LogoIcon size={40} />
            <h1 className="text-title font-semibold">Dedicatorias</h1>
          </Link>
        </div>

        {/* Créditos */}
        <div className="flex flex-col items-center gap-3">
          <h2 className="font-semibold text-title">Créditos</h2>
          <div className="flex items-center gap-4 text-paragraph">
            <a
              href="https://www.pexels.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 opacity-80 hover:opacity-100 transition"
            >
              <PexelsLogo size={28} />
              <span className="text-sm">Imágenes de Pexels</span>
            </a>
          </div>
          <div className="flex items-center gap-4 text-paragraph">
            <a
              href="https://www.deezer.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 opacity-80 hover:opacity-100 transition"
            >
              <LogoDeezer size={28} />
              <span className="text-sm">Música de Deezer</span>
            </a>
          </div>
        </div>

        {/* Autor */}
        <div className="text-center md:text-start text-paragraph">
          <h2 className="font-semibold text-title">Desarrollado por</h2>
          <a
            href="https://porfolio-lemon-ten.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-paragraph hover:text-primary transition-colors text-center"
          >
            Brayan David Mosquera Medina
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="relative z-10 border-t border-divider mt-6 py-4 text-center text-sm text-paragraph">
        © {new Date().getFullYear()} Dedicatorias. Todos los derechos reservados.
      </div>
    </footer>
  );
}
