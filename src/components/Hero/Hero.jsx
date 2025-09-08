import React from "react";

const Hero = () => {
  return (
    <section className="h-dvh relative overflow-hidden rounded-3xl max-w-[1800px] mx-auto">
      {/* Background Image - Full Hero */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat rounded-3xl m-10"
        style={{
          backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" fill="%23f5f5f5"><rect width="800" height="600" fill="%23e5e7eb"/><g fill="%23374151" opacity="0.1"><circle cx="200" cy="150" r="80"/><circle cx="600" cy="400" r="120"/><rect x="300" y="200" width="200" height="100" rx="10"/><rect x="100" y="350" width="150" height="80" rx="8"/><rect x="500" y="100" width="180" height="120" rx="12"/></g></svg>')`,
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/5 rounded-3xl"></div>
      </div>

      {/* Header - Integrated */}
      <header className="absolute top-10 left-0 w-full z-20 px-8">
        {/* Logo Container - Left */}
        <div className="absolute top-0 left-10">
          <div className="bg-white/95 backdrop-blur-sm rounded-br-3xl p-4">
            <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center">
              <svg
                className="w-5 h-5 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Navigation Menu Container - Centered */}
        <div className="flex justify-center">
          <div className="bg-white/95 backdrop-blur-sm rounded-b-3xl px-6 py-4">
            <nav>
              <ul className="flex space-x-8 text-gray-800">
                <li>
                  <a
                    href="#inicio"
                    className="hover:text-gray-600 transition-colors duration-300 font-semibold text-lg"
                  >
                    Inicio
                  </a>
                </li>
                <li>
                  <a
                    href="#servicios"
                    className="hover:text-gray-600 transition-colors duration-300 font-semibold text-lg"
                  >
                    servicios
                  </a>
                </li>
                <li>
                  <a
                    href="#contacto"
                    className="hover:text-gray-600 transition-colors duration-300 font-semibold text-lg"
                  >
                    contacto
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* Content Card - Bottom Left */}
      <div className="absolute bottom-10 left-10 max-w-md">
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-gray-800 leading-tight">
              Sonríe con confianza
            </h1>

            <h2 className="text-xl font-semibold text-gray-700">
              Expertos en salud y estética dental
            </h2>

            <p className="text-gray-600 leading-relaxed">
              Bienvenido a Clínica Dental donde transformamos tu sonrisa con
              tratamientos personalizados.
            </p>

            <div className="pt-2">
              <button className="bg-gray-700 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300 w-full">
                Agenda tu cita ahora
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media - Right Side Centered */}
      <div className="absolute right-10 top-1/2 transform -translate-y-1/2 z-10">
        <div className="flex flex-col space-y-4 bg-white/95 rounded-l-3xl">
          {/* Facebook */}
          <a
            href="#"
            className="w-12 h-12 flex items-center justify-center transition-all duration-300 hover:scale-110"
          >
            <svg
              className="w-5 h-5 text-blue-600"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="#"
            className="w-12 h-12  flex items-center justify-center transition-all duration-300 hover:scale-110"
          >
            <svg
              className="w-5 h-5 text-pink-500"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>

          {/* TikTok */}
          <a
            href="#"
            className="w-12 h-12  flex items-center justify-center transition-all duration-300 hover:scale-110"
          >
            <svg
              className="w-5 h-5 text-black"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
