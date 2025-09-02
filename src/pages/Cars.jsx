import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import img1 from "../assets/img1.webp";
import img2 from "../assets/img2.webp";
import img3 from "../assets/img3.webp";
import img4 from "../assets/img4.webp";
import img5 from "../assets/img5.webp";
import img6 from "../assets/img6.webp";
import img7 from "../assets/img7.webp";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { Lightbox } from "yet-another-react-lightbox";
import { Zoom } from "yet-another-react-lightbox/plugins";

import "yet-another-react-lightbox/styles.css";

export const Cars = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const slides = [
    { src: img1 },
    { src: img2 },
    { src: img3 },
    { src: img4 },
    { src: img5 },
    { src: img6 },
    { src: img7 },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-800">
        {/* Título */}
        <div className="py-6 h-[23vh] text-white flex flex-col justify-end items-start containerWidth">
          <h1 className="text-xl md:text-2xl font-extrabold tracking-tight ">
            Mercedes AMG GT
          </h1>
          <p className="text-gray-300 text-sm md:text-base  mb-1">
            Deportivo • 2025 • V8 Biturbo
          </p>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 }, // sm
            1024: { slidesPerView: 3 }, // lg
          }}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="w-full h-[30vh] sm:h-[35vh] md:h-[40vh]"
        >
          {slides.map((slide, i) => (
            <SwiperSlide key={i}>
              <div
                className="relative w-full h-full cursor-pointer"
                onClick={() => {
                  setIndex(i);
                  setOpen(true);
                }}
              >
                <img
                  src={slide.src}
                  alt={`slide-${i}`}
                  className="w-full h-full object-cover object-center "
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Lightbox */}
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          index={index}
          slides={slides}
          plugins={[Zoom]}
          render={{
            slides: ({ slides }) => (
              <div className="flex justify-center items-center h-full">
                <img
                  src={slides.src}
                  alt=""
                  className="max-h-[90vh] max-w-[90vw] object-contain transition-transform duration-300 hover:scale-110"
                />
              </div>
            ),
          }}
        />

        {/* Ficha técnica */}
        <div className="h-auto bg-gray-950 text-gray-200 font-sans flex items-center justify-center pt-20 lg:pt-10 pb-5 ">
          <div className="containerWidth w-full mx-auto bg-gray-900 rounded-2xl shadow-2xl overflow-hidden flex flex-col lg:flex-row border-[0.5px] border-blue-500/20">
            {/* Columna Izquierda */}
            <div className="relative p-6 sm:p-8 md:p-12 lg:w-1/3 flex flex-col justify-center bg-gray-800 lg:rounded-l-2xl lg:rounded-r-none">
              <div className="relative z-10">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-2">
                  Mercedes AMG GT
                </h1>
                <div className="mt-4 text-base sm:text-lg md:text-2xl font-light text-gray-400 space-y-2">
                  <p className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-car-front"
                    >
                      <path d="M19 17h2a1 1 0 0 0 1-1v-3.8a1 1 0 0 0-.6-1L19 3H5a1 1 0 0 0-.8.2L1.6 11.2a1 1 0 0 0-.6 1V16a1 1 0 0 0 1 1h2" />
                      <path d="M10 17v3" />
                      <path d="M14 17v3" />
                      <path d="M2 9h20" />
                      <path d="M6 13l2-1h8l2 1" />
                    </svg>
                    <span>Deportivo</span>
                  </p>
                  <p className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-calendar-days"
                    >
                      <path d="M8 2v4" />
                      <path d="M16 2v4" />
                      <rect width="18" height="18" x="3" y="4" rx="2" />
                      <path d="M3 10h18" />
                      <path d="M8 14h.01" />
                      <path d="M12 14h.01" />
                      <path d="M16 14h.01" />
                      <path d="M8 18h.01" />
                      <path d="M12 18h.01" />
                      <path d="M16 18h.01" />
                    </svg>
                    <span>2025</span>
                  </p>
                  <p className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-fuel"
                    >
                      <path d="M14 22V6h4a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2v0a2 2 0 0 0-2-2v0a2 2 0 0 1-2 2h-4" />
                      <path d="M14 16H6a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2z" />
                      <path d="M18 22V6" />
                      <path d="M14 10h2" />
                    </svg>
                    <span>V8 Biturbo</span>
                  </p>
                </div>
              </div>
            </div>
            {/* Columna Derecha */}
            <div className="lg:w-2/3 p-4 sm:p-6 md:p-10 lg:py-6 lg:pr-6 lg:pl-0 max-h-[600px] overflow-y-auto">
              <div className="divide-y divide-gray-700">
                {/* Fila de Marca */}
                <div className="grid grid-cols-2 items-center p-4 hover:bg-gray-800 transition-colors duration-300">
                  <div className="flex items-center space-x-4">
                    <span className="text-gray-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M20.515 13.754a.886.886 0 0 1-.88.88h-3.548a.885.885 0 0 1-.88-.88a.886.886 0 0 1 .88-.88h3.548a.89.89 0 0 1 .88.88m-12.376 0a.885.885 0 0 1-.88.88H3.711a.885.885 0 0 1-.88-.88a.886.886 0 0 1 .88-.88h3.548a.886.886 0 0 1 .879.88zm-1.84-8.167h11.404l1.399 3.562l-.069-.004H4.899zm17.68 2.706a1.33 1.33 0 0 0-1.527-1.094l.008-.001l-2.183.356a1 1 0 0 0-.094.026l.005-.002L18.782 4H5.216L3.81 7.578a1 1 0 0 0-.087-.023l-2.185-.357A1.33 1.33 0 0 0 .019 8.286l-.001.008a1.33 1.33 0 0 0 1.088 1.519l.008.001l1.271.209a4.23 4.23 0 0 0-1.3 2.955v6.091h4.4v-2.3h12.429v2.3h4.4v-3.248c.018-.076.028-.163.028-.253v-2.586a4.24 4.24 0 0 0-1.213-2.876l.001.001l1.766-.29a1.33 1.33 0 0 0 1.092-1.527l.001.008z"
                        />
                      </svg>
                    </span>
                    <span className="text-sm font-semibold text-gray-200">
                      Marca
                    </span>
                  </div>
                  <span className="text-right text-base font-light text-white">
                    Mercedes-Benz
                  </span>
                </div>

                {/* Fila de Año */}
                <div className="grid grid-cols-2 items-center p-4 hover:bg-gray-800 transition-colors duration-300">
                  <div className="flex items-center space-x-4">
                    <span className="text-gray-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-calendar-days"
                      >
                        <path d="M8 2v4" />
                        <path d="M16 2v4" />
                        <rect width="18" height="18" x="3" y="4" rx="2" />
                        <path d="M3 10h18" />
                        <path d="M8 14h.01" />
                        <path d="M12 14h.01" />
                        <path d="M16 14h.01" />
                        <path d="M8 18h.01" />
                        <path d="M12 18h.01" />
                        <path d="M16 18h.01" />
                      </svg>
                    </span>
                    <span className="text-sm font-semibold text-gray-200">
                      Año
                    </span>
                  </div>
                  <span className="text-right text-base font-light text-white">
                    2025
                  </span>
                </div>

                {/* Nueva Fila: Modelo */}
                <div className="grid grid-cols-2 items-center p-4 hover:bg-gray-800 transition-colors duration-300">
                  <div className="flex items-center space-x-4">
                    <span className="text-gray-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-bookmark"
                      >
                        <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
                      </svg>
                    </span>
                    <span className="text-sm font-semibold text-gray-200">
                      Modelo
                    </span>
                  </div>
                  <span className="text-right text-base font-light text-white">
                    AMG GT
                  </span>
                </div>

                {/* Fila de Motor */}
                <div className="grid grid-cols-2 items-center p-4 hover:bg-gray-800 transition-colors duration-300">
                  <div className="flex items-center space-x-4">
                    <span className="text-gray-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 256 256"
                      >
                        <path
                          fill="currentColor"
                          d="M240 104h-12.69L192 68.69A15.86 15.86 0 0 0 180.69 64H140V40h24a8 8 0 0 0 0-16h-64a8 8 0 0 0 0 16h24v24H64a16 16 0 0 0-16 16v52H24v-24a8 8 0 0 0-16 0v64a8 8 0 0 0 16 0v-24h24v20.69A15.86 15.86 0 0 0 52.69 180L92 219.31a15.86 15.86 0 0 0 11.31 4.69h77.38a15.86 15.86 0 0 0 11.31-4.69L227.31 184H240a16 16 0 0 0 16-16v-48a16 16 0 0 0-16-16m0 64h-16a8 8 0 0 0-5.66 2.34L180.69 208h-77.38L64 168.69V80h116.69l37.65 37.66A8 8 0 0 0 224 120h16Z"
                        />
                      </svg>
                    </span>
                    <span className="text-sm font-semibold text-gray-200">
                      Motor
                    </span>
                  </div>
                  <span className="text-right text-base font-light text-white">
                    V8 Biturbo
                  </span>
                </div>

                {/* Nueva Fila: Cilindrada */}
                <div className="grid grid-cols-2 items-center p-4 hover:bg-gray-800 transition-colors duration-300">
                  <div className="flex items-center space-x-4">
                    <span className="text-gray-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 20 20"
                      >
                        <g
                          fill="currentColor"
                          fillRule="evenodd"
                          clipRule="evenodd"
                        >
                          <path d="M15.156 16.992A2 2 0 0 1 13.42 18H6.58a2 2 0 0 1-1.736-1.008l-3.429-6a2 2 0 0 1 0-1.984l3.429-6A2 2 0 0 1 6.58 2h6.84a2 2 0 0 1 1.736 1.008l3.429 6a2 2 0 0 1 0 1.984zM6.58 16h6.84l3.428-6l-3.428-6H6.58l-3.428 6z" />
                          <path d="M10 8a2 2 0 1 0 0 4a2 2 0 0 0 0-4m-4 2a4 4 0 1 1 8 0a4 4 0 0 1-8 0" />
                        </g>
                      </svg>
                    </span>
                    <span className="text-sm font-semibold text-gray-200">
                      Cilindrada
                    </span>
                  </div>
                  <span className="text-right text-base font-light text-white">
                    3,982 cc
                  </span>
                </div>

                {/* Nueva Fila: Potencia */}
                <div className="grid grid-cols-2 items-center p-4 hover:bg-gray-800 transition-colors duration-300">
                  <div className="flex items-center space-x-4">
                    <span className="text-gray-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <g fill="none" fillRule="evenodd">
                          <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                          <path
                            fill="currentColor"
                            d="m9.65 4l-3.111 7h3.447c.69 0 1.176.675.958 1.33l-1.656 4.967L16.586 10h-2.57a1.01 1.01 0 0 1-.903-1.462L15.382 4zM8.084 2.6c.162-.365.523-.6.923-.6h7.977c.75 0 1.239.79.903 1.462L15.618 8h3.358c.9 0 1.35 1.088.714 1.724L7.737 21.677c-.754.754-2.01-.022-1.672-1.033L8.613 13H5.015a1.01 1.01 0 0 1-.923-1.42z"
                          />
                        </g>
                      </svg>
                    </span>
                    <span className="text-sm font-semibold text-gray-200">
                      Potencia
                    </span>
                  </div>
                  <span className="text-right text-base font-light text-white">
                    577 hp
                  </span>
                </div>

                {/* Fila de Transmisión */}
                <div className="grid grid-cols-2 items-center p-4 hover:bg-gray-800 transition-colors duration-300">
                  <div className="flex items-center space-x-4">
                    <span className="text-gray-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeWidth="1.5"
                        >
                          <path d="M8 9v6m4-6v6m-4-3h5c.932 0 1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083C16 10.398 16 9.932 16 9" />
                          <path d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5" />
                        </g>
                      </svg>
                    </span>
                    <span className="text-sm font-semibold text-gray-200">
                      Transmisión
                    </span>
                  </div>
                  <span className="text-right text-base font-light text-white">
                    Automática AMG SPEEDSHIFT
                  </span>
                </div>

                {/* Nueva Fila: Aceleración */}
                <div className="grid grid-cols-2 items-center p-4 hover:bg-gray-800 transition-colors duration-300">
                  <div className="flex items-center space-x-4">
                    <span className="text-gray-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M10.45 15.5q.6.6 1.55.588t1.4-.688l4.225-6.325q.225-.35-.062-.638t-.638-.062L10.6 12.6q-.675.45-.712 1.375t.562 1.525M12 4q.9 0 1.775.15t1.7.475q.4.15.85.563t.25.787t-.9.5t-1.125-.025q-.625-.225-1.262-.337T12 6Q8.675 6 6.337 8.338T4 14q0 1.05.288 2.075T5.1 18h13.8q.575-.95.838-1.975T20 13.9q0-.65-.113-1.275T19.55 11.4q-.15-.425-.05-.825t.45-.675q.325-.25.713-.15t.537.45q.375.875.575 1.788T22 13.85q.025 1.425-.325 2.725T20.65 19.05q-.275.45-.75.7t-1 .25H5.1q-.525 0-1-.25t-.75-.7q-.65-1.125-1-2.387T2 14q0-2.075.788-3.887t2.15-3.175t3.187-2.15T12 4m.175 7.825"
                        />
                      </svg>
                    </span>
                    <span className="text-sm font-semibold text-gray-200">
                      Aceleración
                    </span>
                  </div>
                  <span className="text-right text-base font-light text-white">
                    0-100 km/h en 3.5s
                  </span>
                </div>

                {/* Más filas aquí para llenar el scroll */}
                <div className="grid grid-cols-2 items-center p-4 hover:bg-gray-800 transition-colors duration-300">
                  <div className="flex items-center space-x-4">
                    <span className="text-gray-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <g fill="none" stroke="currentColor" strokeWidth="1.5">
                          <circle cx="12" cy="12" r="10" />
                          <circle cx="12" cy="12" r="6" />
                          <circle cx="12" cy="12" r="2" />
                          <path
                            strokeLinecap="round"
                            d="M6 12h4m4 0h4m-9 5.196l2-3.464m2-3.464l2-3.464m0 10.392l-2-3.464m-2-3.464L9 6.804"
                          />
                        </g>
                      </svg>
                    </span>
                    <span className="text-sm font-semibold text-gray-200">
                      Tracción
                    </span>
                  </div>
                  <span className="text-right text-base font-light text-white">
                    Trasera
                  </span>
                </div>
                <div className="grid grid-cols-2 items-center p-4 hover:bg-gray-800 transition-colors duration-300">
                  <div className="flex items-center space-x-4">
                    <span className="text-gray-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M19 14h-3v2h3zm3 7H3V11l8-8h10a1 1 0 0 1 1 1zM11.83 5l-6 6H20V5z"
                        />
                      </svg>
                    </span>
                    <span className="text-sm font-semibold text-gray-200">
                      Puertas
                    </span>
                  </div>
                  <span className="text-right text-base font-light text-white">
                    2
                  </span>
                </div>
                <div className="grid grid-cols-2 items-center p-4 hover:bg-gray-800 transition-colors duration-300">
                  <div className="flex items-center space-x-4">
                    <span className="text-gray-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill="currentColor"
                          d="M13 11q2 2.09 2 3.125C15 15.161 14.105 16 13 16s-2-.84-2-1.875Q11 13.09 13 11M5.857.15l6.34 6.45l.016.02l.324.321a1.5 1.5 0 0 1 .11 2.006l-.103.114l-4.474 4.513a1.5 1.5 0 0 1-2.123.008L1.464 9.06a1.5 1.5 0 0 1 .007-2.12l4.472-4.45c.145-.146.313-.254.492-.327L5.144.85a.5.5 0 0 1 .713-.7m1.496 3.049a.5.5 0 0 0-.705 0L2.177 7.65a.5.5 0 0 0-.148.35h9.95a.5.5 0 0 0-.148-.35L7.353 3.2z"
                        />
                      </svg>
                    </span>
                    <span className="text-sm font-semibold text-gray-200">
                      Color Exterior
                    </span>
                  </div>
                  <span className="text-right text-base font-light text-white">
                    Negro Obsidiana
                  </span>
                </div>
                <div className="grid grid-cols-2 items-center p-4 hover:bg-gray-800 transition-colors duration-300">
                  <div className="flex items-center space-x-4">
                    <span className="text-gray-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-map-pin"
                      >
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                        <circle cx="12" cy="9" r="3" />
                      </svg>
                    </span>
                    <span className="text-sm font-semibold text-gray-200">
                      Ubicación
                    </span>
                  </div>
                  <span className="text-right text-base font-light text-white">
                    San Juan, Argentina
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full absolute text-center mt-2">
          <a
            href="/catalogo"
            className="px-6 py-3  mb-20 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold shadow-lg transition"
          >
            Ver Todo el Catálogo
          </a>
        </div>
      </div>

      <Footer />
    </>
  );
};
