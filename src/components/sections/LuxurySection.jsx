import React from "react";

export const LuxurySection = () => {
  return (
    <section id="historia" className="w-full  text-white py-16 bg-gray-950">
      <div className="containerWidth">
        <div className="mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Columna izquierda: Texto */}
          <div>
            {/* Subtítulo */}
            <span className="inline-block text-xs font-semibold tracking-widest text-blue-400 uppercase mb-3">
              Nuestra Historia
            </span>

            {/* Título principal */}
            <h2 className="text-2xl md:text-5xl font-extrabold leading-tight mb-6 uppercase">
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
            <div className="grid grid-cols-2 gap-6 mb-10 ">
              <div className="grid grid-cols-1 text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.6em"
                  height="1.6em"
                  viewBox="0 0 24 24"
                  className="w-full"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M12 2.75a6.25 6.25 0 1 0 0 12.5a6.25 6.25 0 0 0 0-12.5M4.25 9a7.75 7.75 0 1 1 13.06 5.645a1 1 0 0 1 .062.157l.65 2.369c.303 1.107.548 1.998.659 2.69c.109.678.131 1.376-.248 1.944c-.216.323-.51.588-.856.764c-.63.32-1.317.163-1.932-.07c-.628-.236-1.416-.647-2.384-1.152l-.047-.024c-.724-.377-.913-.462-1.095-.481a1 1 0 0 0-.238 0c-.182.019-.37.104-1.095.481l-.047.024c-.968.505-1.756.915-2.384 1.152c-.615.233-1.302.39-1.932.07a2.3 2.3 0 0 1-.856-.764c-.379-.568-.357-1.266-.248-1.944c.111-.692.356-1.583.66-2.69l.649-2.37a1 1 0 0 1 .062-.156A7.73 7.73 0 0 1 4.25 9m3.71 6.615l-.522 1.906c-.32 1.164-.541 1.976-.638 2.578c-.1.625-.025.813.015.872a.8.8 0 0 0 .289.262c.023.011.166.073.722-.137c.533-.201 1.24-.569 2.267-1.103l.103-.054c.568-.297 1.025-.535 1.526-.589q.278-.03.556 0c.5.053.958.292 1.526.589l.103.054c1.026.534 1.734.902 2.267 1.103c.556.21.7.148.722.137a.8.8 0 0 0 .29-.262c.04-.06.114-.247.014-.872c-.097-.602-.319-1.414-.637-2.578l-.523-1.906A7.7 7.7 0 0 1 12 16.75a7.7 7.7 0 0 1-4.04-1.135"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-3xl font-bold text-blue-400">25+</p>
                <p className="text-gray-400 text-sm">Años de experiencia</p>
              </div>
              <div className="grid grid-cols-1 text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.6em"
                  height="1.6em"
                  viewBox="0 0 24 24"
                  className="w-full"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87" />
                    <circle cx="9" cy="7" r="4" />
                  </g>
                </svg>
                <p className="text-3xl font-bold text-blue-400">10K+</p>
                <p className="text-gray-400 text-sm">Clientes satisfechos</p>
              </div>
              <div className="grid grid-cols-1 text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.6em"
                  height="1.6em"
                  viewBox="0 0 512 512"
                  className="w-full"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="32"
                    d="M469.71 234.6c-7.33-9.73-34.56-16.43-46.08-33.94s-20.95-55.43-50.27-70S288 112 256 112s-88 4-117.36 18.63s-38.75 52.52-50.27 70s-38.75 24.24-46.08 33.97S29.8 305.84 32.94 336s9 48 9 48h86c14.08 0 18.66-5.29 47.46-8c31.6-3 62.6-4 80.6-4s50 1 81.58 4c28.8 2.73 33.53 8 47.46 8h85s5.86-17.84 9-48s-2.04-91.67-9.33-101.4M400 384h56v16h-56zm-344 0h56v16H56z"
                  />
                  <path
                    fill="currentColor"
                    d="M364.47 309.16c-5.91-6.83-25.17-12.53-50.67-16.35S279 288 256.2 288s-33.17 1.64-57.61 4.81s-42.79 8.81-50.66 16.35C136.12 320.6 153.42 333.44 167 335c13.16 1.5 39.47.95 89.31.95s76.15.55 89.31-.95c13.56-1.65 29.62-13.6 18.85-25.84m67.1-66.11a3.23 3.23 0 0 0-3.1-3c-11.81-.42-23.8.42-45.07 6.69a93.9 93.9 0 0 0-30.08 15.06c-2.28 1.78-1.47 6.59 1.39 7.1a455 455 0 0 0 52.82 3.1c10.59 0 21.52-3 23.55-12.44a52.4 52.4 0 0 0 .49-16.51m-351.14 0a3.23 3.23 0 0 1 3.1-3c11.81-.42 23.8.42 45.07 6.69a93.9 93.9 0 0 1 30.08 15.06c2.28 1.78 1.47 6.59-1.39 7.1a455 455 0 0 1-52.82 3.1c-10.59 0-21.52-3-23.55-12.44a52.4 52.4 0 0 1-.49-16.51"
                  />
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="32"
                    d="M432 192h16m-384 0h16m-2 19s46.35-12 178-12s178 12 178 12"
                  />
                </svg>
                <p className="text-3xl font-bold text-blue-400">500+</p>
                <p className="text-gray-400 text-sm">Vehículos vendidos</p>
              </div>
              <div className="grid grid-cols-1 text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.6em"
                  height="1.6em"
                  viewBox="0 0 1024 1024"
                  className="w-full"
                >
                  <path
                    fill="currentColor"
                    d="M512 64L128 192v384c0 212.1 171.9 384 384 384s384-171.9 384-384V192zm312 512c0 172.3-139.7 312-312 312S200 748.3 200 576V246l312-110l312 110z"
                  />
                  <path
                    fill="currentColor"
                    d="M378.4 475.1a35.91 35.91 0 0 0-50.9 0a35.91 35.91 0 0 0 0 50.9l129.4 129.4l2.1 2.1a33.98 33.98 0 0 0 48.1 0L730.6 434a33.98 33.98 0 0 0 0-48.1l-2.8-2.8a33.98 33.98 0 0 0-48.1 0L483 579.7z"
                  />
                </svg>
                <p className="text-3xl font-bold text-blue-400">100%</p>
                <p className="text-gray-400 text-sm">Garantía premium</p>
              </div>
            </div>

            {/* Botón CTA */}
            {/* <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold shadow-md transition">
              Conocer Más
            </button> */}
          </div>

          {/* Columna derecha: Imagen */}
          <div className="relative">
            <img
              src="https://fotografias.lasexta.com/clipping/cmsimages02/2022/07/14/22D26FB7-9AFA-44A9-A540-2D32D5F909C5/exposicion-motion-autos-art-architecture-museo-guggenheim_103.jpg?crop=1440,1080,x0,y0&width=1200&height=900&optimize=low&format=webply"
              alt="Automóviles de lujo en exposición"
              className="rounded-2xl shadow-lg object-cover w-full h-[70vh]"
            />

            {/* Tarjeta de certificación */}
            <div className="absolute bottom-1 left-1 bg-black/50 rounded-xl shadow-lg px-6 py-4 flex items-center gap-3">
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
