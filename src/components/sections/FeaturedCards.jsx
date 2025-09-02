import { useState } from "react";
import { Link } from "react-router-dom";
import img1 from "../../assets/img1.webp";
import img2 from "../../assets/img2.webp";

const cars = [
  {
    id: 1,
    title: "Mercedes-AMG GT 63 S",
    anio: "2024",
    price: "$185,000",
    tag: "Deportivo",
    hp: "630 HP",
    acceleration: "0-100 km/h: 3.2s",
    motor: "V8 Biturbo",
    features: [
      "Tracción integral",
      "Suspensión adaptativa",
      "Interior de cuero Nappa",
    ],
    img1: img1,
    img2: img2,
  },
  {
    id: 2,
    title: "BMW X7 M50i",
    anio: "2025",
    price: "$165,000",
    tag: "SUV de Lujo",
    hp: "523 HP",
    acceleration: "7 Asientos",
    motor: "V8 TwinPower",
    features: [
      "Techo panorámico",
      "Sistema de sonido Harman Kardon",
      "Asientos ventilados",
    ],
    img1: img1,
    img2: img2,
  },
  {
    id: 3,
    title: "Porsche Taycan Turbo S",
    anio: "2025",
    price: "$210,000",
    tag: "Eléctrico Deportivo",
    hp: "750 HP",
    acceleration: "0-100 km/h: 2.8s",
    motor: "Motores Eléctricos Dual",
    features: [
      "Autonomía de 450 km",
      "Pantalla curva de 16,8''",
      "Carga rápida de 270 kW",
    ],
    img1: img2,
    img2: img1,
  },
];

export const FeaturedCars = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section id="autos" className="py-20 bg-black text-white ">
      <div className="containerWidth">
        <div className=" mx-auto text-center mb-12">
          <span className="px-4 py-1 rounded-full text-sm border border-gray-600 uppercase  ">
            Colección Exclusiva
          </span>
          <h2 className="text-4xl font-bold mt-4 uppercase">
            Vehículos <span className="text-blue-400">Destacados</span>
          </h2>
          <p className="mt-2 text-gray-400">
            Descubre nuestra selección de vehículos de lujo, cada uno elegido
            por su excepcional calidad, rendimiento y diseño innovador.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cars.map((car) => (
            <div
              key={car.id}
              className="rounded-2xl bg-gradient-to-br from-gray-900 to-black overflow-hidden border border-gray-800 hover:border-blue-400 hover:shadow-[0_0_20px_rgba(0,123,255,0.5)] transition-all duration-300"
            >
              {/* Imagen con hover para cambiar */}
              <div
                className="relative w-full h-70 overflow-hidden"
                onMouseEnter={() => setHoveredId(car.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <img
                  src={car.img1}
                  alt={car.title}
                  className={`w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-700 ${
                    hoveredId === car.id ? "opacity-0" : "opacity-100"
                  }`}
                />
                <img
                  src={car.img2}
                  alt={car.title}
                  className={`w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-700 ${
                    hoveredId === car.id ? "opacity-100" : "opacity-0"
                  }`}
                />

                <span className="absolute top-3 left-3 bg-blue-500 text-xs px-3 py-1 rounded-full">
                  {car.tag}
                </span>
                <span className="absolute top-3 right-3 bg-black/70 px-2 py-1 text-xs rounded-lg">
                  {car.anio}
                </span>
              </div>

              {/* Contenido */}
              <div className="p-6">
                <h3 className="text-xl font-bold">{car.title}</h3>
                <p className="text-blue-400 text-lg font-semibold">
                  USD {car.price}
                </p>

                <ul className="mt-3 text-sm text-gray-300 space-y-1">
                  <li>{car.hp}</li>
                  <li>{car.acceleration}</li>
                  <li>Motor: {car.motor}</li>
                </ul>

                <ul className="mt-2 text-xs text-gray-400 space-y-1">
                  {car.features.map((f, i) => (
                    <li key={i}>• {f}</li>
                  ))}
                </ul>

                {/* Botones */}
                <div className="flex gap-3 mt-5">
                  <Link
                    to="/auto"
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-sm py-2 rounded-lg transition cursor-pointer text-center block text-white"
                  >
                    Ver Detalles
                  </Link>
                  {/* <button className="flex-1 border border-blue-500 hover:bg-blue-500 hover:text-white text-sm py-2 rounded-lg transition cursor-pointer">
                    Agendar Prueba
                  </button> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
