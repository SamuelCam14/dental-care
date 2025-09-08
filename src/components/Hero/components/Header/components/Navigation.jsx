import React from "react";

const Navigation = () => {
  const navItems = [
    { href: "#inicio", label: "Inicio" },
    { href: "#servicios", label: "servicios" },
    { href: "#contacto", label: "contacto" },
  ];

  return (
    <div className="flex justify-center">
      <div className="bg-white/95 backdrop-blur-sm rounded-b-3xl px-6 py-4">
        <nav>
          <ul className="flex space-x-8 text-gray-800">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="hover:text-gray-600 transition-colors duration-300 font-semibold text-lg"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
