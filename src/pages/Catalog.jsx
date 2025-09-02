import React, { useState } from "react";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import img1 from "../assets/img1.webp";
import img2 from "../assets/img2.webp";
import { Link } from "react-router-dom";

// Datos de ejemplo para el catálogo. En una aplicación real, esto vendría de una API.
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

export const Catalog = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const [filters, setFilters] = useState({
    brand: "",
    type: "",
    minPrice: 0,
    maxPrice: 500000,
    minYear: 2000,
    maxYear: 2025,
  });

  // Función para manejar los cambios en los filtros
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  // Lógica para filtrar los autos basados en los criterios seleccionados
  const filteredCars = cars.filter((car) => {
    // Obtenemos la marca desde el title (ej: "Mercedes-AMG GT 63 S" → "Mercedes")
    const carBrand = car.title.split(" ")[0];

    const matchesBrand =
      filters.brand === "" ||
      carBrand.toLowerCase() === filters.brand.toLowerCase();

    const matchesType =
      filters.type === "" ||
      car.tag.toLowerCase().includes(filters.type.toLowerCase());

    const carPrice = parseFloat(car.price.replace(/[^0-9.]/g, ""));
    const matchesPrice =
      carPrice >= filters.minPrice && carPrice <= filters.maxPrice;

    const carYear = parseInt(car.anio, 10);
    const matchesYear =
      carYear >= filters.minYear && carYear <= filters.maxYear;

    return matchesBrand && matchesType && matchesPrice && matchesYear;
  });

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-950 text-gray-200 font-sans pt-28">
        {/* Contenedor de Filtros y Catálogo */}
        <div className="flex flex-col lg:flex-row container containerWidth">
          {/* Columna de Filtros (Izquierda) */}
          <aside className="w-full lg:w-1/5 p-6 bg-gray-900 rounded-2xl shadow-xl lg:mr-8 mb-8 lg:mb-0">
            <h2 className="text-xl font-bold mb-6 text-white tracking-wide">
              Filtros
            </h2>
            <div className="space-y-6">
              {/* Filtro por Marca */}
              <div className="flex flex-col">
                <label
                  htmlFor="brand"
                  className="text-sm font-light text-gray-400 mb-2"
                >
                  Marca
                </label>
                <select
                  id="brand"
                  name="brand"
                  value={filters.brand}
                  onChange={handleFilterChange}
                  className="p-3 bg-gray-800 rounded-lg text-gray-200 border-none focus:outline-none focus:ring-2 focus:ring-gray-600 appearance-none"
                >
                  <option value="">Todas</option>
                  {[...new Set(cars.map((c) => c.title.split(" ")[0]))].map(
                    (brand) => (
                      <option key={brand} value={brand}>
                        {brand}
                      </option>
                    )
                  )}
                </select>
              </div>

              {/* Filtro por Tipo de Vehículo */}
              <div className="flex flex-col">
                <label
                  htmlFor="type"
                  className="text-sm font-light text-gray-400 mb-2"
                >
                  Tipo
                </label>
                <select
                  id="type"
                  name="type"
                  value={filters.type}
                  onChange={handleFilterChange}
                  className="p-3 bg-gray-800 rounded-lg text-gray-200 border-none focus:outline-none focus:ring-2 focus:ring-gray-600 appearance-none"
                >
                  <option value="">Todos</option>
                  <option value="Deportivo">Deportivo</option>
                  <option value="SUV">SUV</option>
                  <option value="Sedán">Sedán</option>
                </select>
              </div>

              {/* Filtro por Rango de Precio */}
              <div className="flex flex-col">
                <label
                  htmlFor="price"
                  className="text-sm font-light text-gray-400 mb-2"
                >
                  Rango de Precio (USD)
                </label>
                <div className="flex items-center space-x-2">
                  <input
                    type="number"
                    name="minPrice"
                    value={filters.minPrice}
                    onChange={handleFilterChange}
                    className="w-1/2 p-3 bg-gray-800 rounded-lg text-gray-200 border-none focus:outline-none focus:ring-2 focus:ring-gray-600"
                    placeholder="Mínimo"
                  />
                  <span className="text-gray-500">-</span>
                  <input
                    type="number"
                    name="maxPrice"
                    value={filters.maxPrice}
                    onChange={handleFilterChange}
                    className="w-1/2 p-3 bg-gray-800 rounded-lg text-gray-200 border-none focus:outline-none focus:ring-2 focus:ring-gray-600"
                    placeholder="Máximo"
                  />
                </div>
              </div>

              {/* Filtro por Año */}
              <div className="flex flex-col">
                <label
                  htmlFor="year"
                  className="text-sm font-light text-gray-400 mb-2"
                >
                  Año
                </label>
                <div className="flex items-center space-x-2">
                  <input
                    type="number"
                    name="minYear"
                    value={filters.minYear}
                    onChange={handleFilterChange}
                    className="w-1/2 p-3 bg-gray-800 rounded-lg text-gray-200 border-none focus:outline-none focus:ring-2 focus:ring-gray-600"
                    placeholder="Mínimo"
                  />
                  <span className="text-gray-500">-</span>
                  <input
                    type="number"
                    name="maxYear"
                    value={filters.maxYear}
                    onChange={handleFilterChange}
                    className="w-1/2 p-3 bg-gray-800 rounded-lg text-gray-200 border-none focus:outline-none focus:ring-2 focus:ring-gray-600"
                    placeholder="Máximo"
                  />
                </div>
              </div>
            </div>
          </aside>

          {/* Catálogo de Autos (Derecha) */}
          <main className="w-full lg:w-4/5">
            <h1 className="text-2xl md:text-3xl font-bold mb-8 text-white tracking-wide">
              Nuestra Colección
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCars.length > 0 ? (
                filteredCars.map((car) => (
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
                ))
              ) : (
                <p className="text-center col-span-full text-gray-500 text-lg">
                  No se encontraron vehículos que coincidan con los filtros.
                </p>
              )}
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
};
