import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
const slides = [
  {
    src: img1,
    subtitle: "Atención personalizada de clase mundial",
    title: "Servicio Premium",
    description:
      "Nuestro compromiso es brindar una experiencia excepcional en cada interacción.",
    button: "Contactar Asesor",
  },
  {
    src: img2,
    subtitle: "Experiencia de lujo garantizada",
    title: "Confort y Exclusividad",
    description:
      "Disfruta de un viaje único con la máxima comodidad y tecnología de punta.",
    button: "Solicitar Información",
  },
  {
    src: img3,
    subtitle: "Diseño y rendimiento sin igual",
    title: "Calidad Superior",
    description:
      "Cada detalle está pensado para superar las expectativas más exigentes.",
    button: "Ver Colección",
  },
];

export const HeroCarousel = () => {
  return (
    <section className="relative w-full h-[80vh]">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        navigation
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
              <div className="absolute inset-0 bg-black/50 flex items-center uppercase">
                <div className="max-w-3xl containerWidth">
                  <p className="text-blue-400 text-sm md:text-base font-semibold mb-3">
                    {slide.subtitle}
                  </p>
                  <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg">
                    {slide.title}
                  </h1>
                  <p className="text-gray-200 text-base md:text-lg mb-6 max-w-xl">
                    {slide.description}
                  </p>
                  <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold shadow-lg transition">
                    {slide.button}
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
    // <section className="relative w-full h-[70vh] overflow-hidden">
    //   <Swiper
    //     modules={[Autoplay, Pagination, Navigation]}
    //     spaceBetween={0}
    //     slidesPerView={1}
    //     loop={true}
    //     autoplay={{ delay: 5000, disableOnInteraction: false }}
    //     pagination={{ clickable: true }}
    //     navigation
    //   >
    //     {slides.map((slide, index) => (
    //       <SwiperSlide key={index}>
    //         <div className="w-full h-full ">
    //           {/* Imagen centrada */}
    //           <img
    //             src={slide.src}
    //             alt={slide.alt}
    //             className="w-full h-full object-"
    //           />

    //           {/* Overlay para título */}
    //           <div className="absolute inset-0 bg-black/30 flex items-center">
    //             <div className="max-w-2xl px-6">
    //               <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold drop-shadow-lg">
    //                 {slide.title}
    //               </h1>
    //             </div>
    //           </div>
    //         </div>
    //       </SwiperSlide>
    //     ))}
    //   </Swiper>
    // </section>
  );
};
