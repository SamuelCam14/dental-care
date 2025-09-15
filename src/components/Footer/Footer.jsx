export const Footer = () => {
  const quickLinks = [
    { href: "#welcome", text: "Inicio" },
    { href: "#services", text: "Servicios" },
    { href: "#doctors", text: "Doctores" },
    { href: "#testimonials", text: "Testimonios" },
    { href: "#contact", text: "Contacto" },
  ];

  return (
    <footer className="text-neutral-600 pt-16 pb-8 px-4 sm:px-6 lg:px-8">

        <div className="flex justify-between items-center">
            {/* About Section */}
            <div className="w-1/3">
                <h3 className="text-2xl font-bold mb-4">Dental Care</h3>
                <p className="text-neutral-500 text-lg">
                    Comprometidos con tu sonrisa. Ofrecemos cuidado dental de la más alta calidad con un equipo de profesionales apasionados y la última tecnología.
                </p>
            </div>
            <div className="flex items-center gap-8">
                <div>
                    <h4 className="text-xl font-semibold mb-4">PHONE NUMBER</h4>
                    <p className="text-neutral-500">(555) 123-4567</p>
                </div>
                <div>
                    <h4 className="text-xl font-semibold mb-4">EMAIL</h4>
                    <p className="text-neutral-500">info@clinicadental.com</p>
                </div>
            </div>
        </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-y-2 border-neutral-300 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-neutral-500 text-xs">
          &copy; {new Date().getFullYear()} Dental Care. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};