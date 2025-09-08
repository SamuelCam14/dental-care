import React from "react";

const Header = () => {
  return (
    <header className="absolute top-10 left-0 w-full z-20 px-8">
      {/* Logo Container - Left */}
      <div className="absolute top-0 left-10">
        <div className="bg-white/95 backdrop-blur-sm rounded-br-2xl p-4 shadow-lg">
          <div className="w-8 h-8 bg-gray-800 rounded-br-lg flex items-center justify-center">
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
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-lg">
          <nav>
            <ul className="flex space-x-8 text-gray-800">
              <li>
                <a
                  href="#inicio"
                  className="hover:text-gray-600 transition-colors duration-300 font-medium text-sm"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#servicios"
                  className="hover:text-gray-600 transition-colors duration-300 font-medium text-sm"
                >
                  servicios
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  className="hover:text-gray-600 transition-colors duration-300 font-medium text-sm"
                >
                  contacto
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
