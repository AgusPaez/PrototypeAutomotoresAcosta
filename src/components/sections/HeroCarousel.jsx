import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import img1 from "../../assets/img1.webp";
import img2 from "../../assets/img2.webp";
import img3 from "../../assets/img3.webp";
const slides = [
  {
    src: img1,
    subtitle: "Asesoramiento exclusivo y dedicado",
    title: "Atención Personalizada",
    description:
      "Un servicio diseñado para clientes que exigen lo mejor, con un acompañamiento a la altura de su inversión.",
    button: "Hablar con un Asesor",
  },
  {
    src: img2,
    subtitle: "Confort y distinción en cada detalle",
    title: "Experiencia de Lujo",
    description:
      "Vehículos que combinan tecnología de vanguardia con un nivel de comodidad reservado para unos pocos.",
    button: "Solicitar Información",
  },
  {
    src: img3,
    subtitle: "Excelencia en diseño y rendimiento",
    title: "Calidad Sin Compromisos",
    description:
      "Cada modelo refleja la perfección en ingeniería y un carácter único, pensado para verdaderos conocedores.",
    button: "Descubrir Colección",
  },
];

export const HeroCarousel = () => {
  return (
    <section id="inicio" className="relative w-full h-[80vh]">
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              {/* Imagen de fondo */}
              <img
                src={slide.src}
                alt={slide.title}
                className="w-full h-full object-cover object-center"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20 flex items-center uppercase">
                <div className="containerWidth ">
                  <p className="text-blue-500 text-sm md:text-base font-semibold mb-3">
                    {slide.subtitle}
                  </p>
                  <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4 drop-shadow-lg">
                    {slide.title}
                  </h1>
                  <p className="text-gray-200 text-base md:text-lg mb-6 max-w-xl">
                    {slide.description}
                  </p>
                  <button className="px-6 py-3 bg-blue-600 hover:bg-blue-600 text-white rounded-lg font-semibold shadow-lg transition">
                    {slide.button}
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
