import { useState } from "react";
import { Link } from "react-router-dom";

import LogoIcon from "../icons/LogoIcon";
import Button from "../buttons/button";
import MenuIcon from "../icons/MenuIcon";
import CloseIcon from "../icons/CloseIcon";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="p-4 sticky top-0 z-50">
      <nav className="relative py-4 px-4 bg-divider/40 rounded-xl backdrop-blur-xl backdrop-saturate-180">
        <div
          className="absolute inset-0 pointer-events-none opacity-50 h-full w-full"
          style={{
            backgroundImage: `url("https://res.cloudinary.com/dlmhszrtv/image/upload/v1755870551/Noise_qdazex.png")`,
          }}
        />

        {/* Desktop Navigation */}
        <nav className="flex justify-between items-center w-full z-10 relative">
          <div className="flex items-center gap-2">
            <LogoIcon size={48} />
            <h1 className="text-2xl font-semibold text-title">Dedicatorias</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#hero"
              className="text-paragraph hover:text-primary transition-colors duration-200"
            >
              Inicio
            </a>
            <a
              href="#funtionamiento"
              className="text-paragraph hover:text-primary transition-colors duration-200"
            >
              ¿Como funciona?
            </a>
            <a
              href="#example"
              className="text-paragraph hover:text-primary transition-colors duration-200"
            >
              Ejemplo
            </a>
          </div>

          {/* Desktop Button */}
          <div className="hidden md:block">
            <Link to="/crear-dedicatoria">
              <Button text="Crear dedicatoria" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-paragraph hover:text-primary transition-colors duration-200"
          >
            {isMenuOpen ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </nav>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 mt-2 bg-divider/40 backdrop-blur-xl backdrop-saturate-180 rounded-xl z-20">
            <div
              className="absolute inset-0 pointer-events-none opacity-50 h-full w-full"
              style={{
                backgroundImage: `url("https://res.cloudinary.com/dlmhszrtv/image/upload/v1755870551/Noise_qdazex.png")`,
              }}
            />
            <div className="relative z-10 p-4 space-y-4">
              <a
                href="#hero"
                onClick={closeMenu}
                className="block text-paragraph hover:text-primary transition-colors duration-200 py-2"
              >
                Inicio
              </a>
              <a
                href="#funtionamiento"
                onClick={closeMenu}
                className="block text-paragraph hover:text-primary transition-colors duration-200 py-2"
              >
                ¿Como funciona?
              </a>
              <a
                href="#example"
                onClick={closeMenu}
                className="block text-paragraph hover:text-primary transition-colors duration-200 py-2"
              >
                Ejemplo
              </a>
              <div className="pt-2">
                <Link to="/crear-dedicatoria">
                  <Button text="Crear dedicatoria" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
