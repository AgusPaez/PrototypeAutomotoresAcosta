import React from "react";
export const Services = () => {
  const servicios = [
    {
      titulo: "Lavadero Premium",
      descripcion:
        "Cuidado integral para su vehículo con productos de alta gama y atención personalizada, garantizando un brillo impecable.",
      icono: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10 text-transparent bg-clip-text bg-gradient-to-br from-indigo-400 to-blue-600" // Gradiente sofisticado
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3 15h18M5 21h14a2 2 0 002-2v-4a6 6 0 00-6-6H9a6 6 0 00-6 6v4a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      titulo: "Alquiler de Autos Exclusivos",
      descripcion:
        "Acceda a nuestra selecta flota de vehículos de alta gama, disponibles en ubicaciones premium para su máxima conveniencia.",
      icono: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10 text-transparent bg-clip-text bg-gradient-to-br from-indigo-400 to-blue-600" // Gradiente sofisticado
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M4 16V8a4 4 0 014-4h8a4 4 0 014 4v8m-2 4h-4m-4 0H6m3-10h6"
          />
        </svg>
      ),
    },
  ];

  return (
    <section id="servicios" className="relative overflow-hidden py-20">
      {/* Capa de la imagen de fondo */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://hoydia.com.ar/wp-content/uploads/2022/06/autos_0_km_2-optimized.jpg')",
            opacity: 0.8, // Ajusta la opacidad para que no interfiera con el texto
          }}
        ></div>
      </div>

      {/* Capa de superposición para un efecto de color */}
      <div className="absolute inset-0 bg-gray-700 opacity-90 z-0"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <h2 className="text-4xl font-extrabold text-white text-center tracking-tight leading-tight uppercase">
          Exclusividad en Cada <span className="text-blue-400"> Servicio</span>
        </h2>
        <p className="text-gray-200 text-md text-center mt-6 max-w-3xl mx-auto font-light leading-relaxed">
          Diseñamos experiencias que superan las expectativas, con atención
          impecable a cada detalle para nuestros clientes más distinguidos.
        </p>

        <div className="mt-20 grid gap-10 md:grid-cols-2">
          {servicios.map((servicio, index) => (
            <div
              key={index}
              className="group flex flex-col items-start p-8 md:p-10 bg-white/10 backdrop-blur-sm rounded-xl shadow-2xl transition-all duration-500 ease-in-out transform hover:scale-[1.02] hover:shadow-3xl relative overflow-hidden border border-white/20"
            >
              <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out pointer-events-none"></div>

              <div className="mb-6 w-16 h-16 flex items-center justify-center rounded-full bg-white/20 group-hover:bg-white/30 transition-all duration-300 ease-in-out transform group-hover:rotate-6">
                {servicio.icono}
              </div>
              <h3 className="text-3xl font-bold text-white mt-4 leading-tight">
                {servicio.titulo}
              </h3>
              <p className="mt-4 text-gray-300 leading-relaxed text-lg font-light">
                {servicio.descripcion}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
