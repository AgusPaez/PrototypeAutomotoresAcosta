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
    <section className="w-full bg-black text-white py-16">
      <div className="containerWidth">
        <div className="mx-auto text-center mb-12">
          <span className="inline-block text-xs font-semibold tracking-widest text-blue-400 uppercase mb-3">
            Opiniones Reales
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight uppercase">
            Lo que dicen nuestros clientes en{" "}
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
              <div className="bg-zinc-900 rounded-2xl shadow-lg p-6 flex flex-col gap-4 hover:scale-[1.02] transition-transform h-full">
                {/* Avatar + nombre */}
                <div className="flex items-center gap-4">
                  <img
                    src={review.avatar}
                    alt={`Foto de ${review.name}`}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold">{review.name}</p>
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                        alt="Google logo"
                        className="w-4 h-4"
                      />
                      <span>Comentario en Google</span>
                    </div>
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
                <p className="text-gray-300 text-sm leading-relaxed">
                  "{review.text}"
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
