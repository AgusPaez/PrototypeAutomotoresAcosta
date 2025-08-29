import React, { useState, useEffect } from "react";
import { Button } from "../ui/Button";
import { buttons } from "../../constants/constants";
export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed bg-gradient-to-b from-gray-950 to-[#fffff] top-0 w-full z-50 transition-all duration-400 ${
        scrolled ? "backdrop-blur-[3.5px] shadow-sm bg-black/30" : "bg-white/0"
      }`}
    >
      <nav className="containerWidth flex items-baseline justify-between py-5">
        <section className="w-1/7">
          <a
            href="/#inicio"
            className="relative text-1xl font-thin forum-regular text-gray-100"
          >
            Automotores Acosta
            <span className="absolute left-0 bottom-0 w-full h-[2.5px] bg-gradient-to-r from-transparent via-gray-800 to-transparent"></span>
          </a>
        </section>
        {scrolled ? (
          <span className="absolute left-0 bottom-0 w-full h-[2.5px] bg-gradient-to-r from-transparent via-gray-700 to-transparent"></span>
        ) : (
          <span className="absolute left-0 bottom-0 w-full h-[2.5px] bg-gradient-to-r from-transparent via-transparent to-transparent"></span>
        )}

        <section className="hidden md:flex gap-4 capitalize text-lg">
          <ul className="flex gap-4">
            {buttons.map((item) => (
              <li key={item.text}>
                <Button text={item.text} style={item.style} ref={item.ref} />
              </li>
            ))}
          </ul>
        </section>
        <input
          type="text"
          placeholder="Buscar..."
          className="hidden md:block w-1/7 px-3 py-1 border rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
        />

        <div className="md:hidden flex items-center">
          <button
            onClick={() => setOpen(!open)}
            className="text-gray-800 focus:outline-none"
          >
            <svg
              className="w-6 h-6 text-gray-100"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* MOBILE */}
      {open && (
        <nav
          className={`md:hidden  w-full px-5 py-3 shadow-md backdrop-blur-[3.5px] bg-white/30 ${
            scrolled ? " shadow-sm " : "bg-white/0"
          }`}
        >
          <ul className="flex flex-col gap-3 capitalize text-lg">
            {["home", "productos", "categorias", "Sobre nosotros"].map(
              (item) => (
                <li key={item}>
                  <Button
                    text={item}
                    style="text-gray-800 hover:text-gray-950 hover:tracking-wide transition-all duration-300 w-full text-left"
                  />
                </li>
              )
            )}
            <li>
              <input
                type="text"
                placeholder="Buscar..."
                className="w-full px-3 py-1 border rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
              />
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};
