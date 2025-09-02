import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const reviews = [
  {
    name: "María López",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    text: "La experiencia fue increíble. El equipo me ayudó a elegir el auto perfecto y el servicio fue de primera.",
  },
  {
    name: "Javier Torres",
    avatar: "https://randomuser.me/api/portraits/men/36.jpg",
    rating: 5,
    text: "Automóviles de lujo con un trato exclusivo. La atención al detalle y la calidad superaron mis expectativas.",
  },
  {
    name: "Ana García",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    rating: 4,
    text: "Muy buena experiencia en general. Gran variedad de autos premium y un servicio al cliente excelente.",
  },
  {
    name: "Carlos Fernández",
    avatar: "https://randomuser.me/api/portraits/men/55.jpg",
    rating: 5,
    text: "Un servicio excepcional y autos de ensueño. Definitivamente lo recomiendo.",
  },
];

export const GoogleReviews = () => {
  return (
    <section id="opiniones" className="w-full bg-black text-white py-16">
      <div className="containerWidth">
        <div className="mx-auto text-center mb-12">
          <span className="inline-block text-xs font-semibold tracking-widest text-blue-400 uppercase mb-3">
            testimonios reales
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold leading-tight uppercase">
            La experiencia de nuestros clientes en{" "}
            <span className="text-blue-400">Google</span>
          </h2>
        </div>

        {/* Carousel */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="bg-zinc-900 rounded-2xl shadow-lg p-6 flex flex-col gap-4 hover:scale-[1.02] transition-transform h-full relative">
                {/* Logo Google arriba derecha */}
                <div className="absolute top-7 right-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#FFC107"
                      d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917"
                    />
                    <path
                      fill="#FF3D00"
                      d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691"
                    />
                    <path
                      fill="#4CAF50"
                      d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.9 11.9 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44"
                    />
                    <path
                      fill="#1976D2"
                      d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917"
                    />
                  </svg>
                </div>

                {/* Avatar + nombre */}
                <div className="flex items-center gap-4">
                  <img
                    src={review.avatar}
                    alt={`Foto de ${review.name}`}
                    className="w-12 h-12 rounded-full object-cover border-2 border-amber-300/30"
                  />
                  <div>
                    <p className="font-semibold">{review.name}</p>
                    <span className="text-xs text-gray-400">
                      Comentario en Google
                    </span>
                  </div>
                </div>

                {/* Estrellas */}
                <div className="flex gap-1 text-yellow-400">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                  {review.rating < 5 &&
                    Array.from({ length: 5 - review.rating }).map((_, i) => (
                      <span key={i} className="text-gray-600">
                        ★
                      </span>
                    ))}
                </div>

                {/* Texto */}
                <p className="text-gray-300 text-sm leading-relaxed italic">
                  “{review.text}”
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
