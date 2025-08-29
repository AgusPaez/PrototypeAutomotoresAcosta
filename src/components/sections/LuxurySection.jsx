import React from "react";

export const LuxurySection = () => {
  return (
    <section className="w-full  text-white py-16 bg-gray-950">
      <div className="containerWidth">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Columna izquierda: Texto */}
          <div>
            {/* Subtítulo */}
            <span className="inline-block text-xs font-semibold tracking-widest text-blue-400 uppercase mb-3">
              Nuestra Historia
            </span>

            {/* Título principal */}
            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6 uppercase">
              Excelencia en Automóviles de{" "}
              <span className="text-blue-400">Lujo</span>
            </h2>

            {/* Descripción */}
            <p className="text-gray-300 mb-6">
              Durante más de dos décadas, hemos sido el destino preferido para
              los conocedores de automóviles de lujo. Nuestra pasión por la
              excelencia y el compromiso con la satisfacción del cliente nos han
              convertido en líderes del mercado premium.
            </p>
            <p className="text-gray-300 mb-10">
              Cada vehículo en nuestra colección es cuidadosamente seleccionado
              por nuestros expertos, garantizando que solo ofrecemos lo mejor en
              términos de rendimiento, diseño y exclusividad.
            </p>

            {/* Métricas */}
            <div className="grid grid-cols-2 gap-6 mb-10">
              <div>
                <p className="text-3xl font-bold text-blue-400">25+</p>
                <p className="text-gray-400 text-sm">Años de experiencia</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-400">10K+</p>
                <p className="text-gray-400 text-sm">Clientes satisfechos</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-400">500+</p>
                <p className="text-gray-400 text-sm">Vehículos vendidos</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-400">100%</p>
                <p className="text-gray-400 text-sm">Garantía premium</p>
              </div>
            </div>

            {/* Botón CTA */}
            <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold shadow-md transition">
              Conocer Más
            </button>
          </div>

          {/* Columna derecha: Imagen */}
          <div className="relative">
            <img
              src="https://fotografias.lasexta.com/clipping/cmsimages02/2022/07/14/22D26FB7-9AFA-44A9-A540-2D32D5F909C5/exposicion-motion-autos-art-architecture-museo-guggenheim_103.jpg?crop=1440,1080,x0,y0&width=1200&height=900&optimize=low&format=webply"
              alt="Automóviles de lujo en exposición"
              className="rounded-2xl shadow-lg object-cover w-full h-[400px]"
            />

            {/* Tarjeta de certificación */}
            <div className="absolute -bottom-6 left-6 bg-black rounded-xl shadow-lg px-6 py-4 flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center bg-blue-500 rounded-full">
                <span className="text-xl">🔑</span>
              </div>
              <div>
                <p className="font-semibold">Certificación</p>
                <p className="text-sm text-gray-400">
                  Dealer Autorizado Premium
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
