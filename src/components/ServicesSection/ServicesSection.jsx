import doctoranim from "../../assets/pictures/kerfin7_nea_2753.png";
import chair from "../../assets/pictures/dent_chair.png";

export const ServicesSection = () => {
  const otherServices = [
    "Endodoncia",
    "Ortodoncia",
    "Implantes Dentales",
    "Periodoncia",
    "Odontopediatría",
    "Cirugía Oral",
  ];

  return (
    <section id="services" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="relative max-w-7xl mx-auto">
        {/* Main Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Cuidado Básico Dental */}
          <div className="relative bg-neutral-200/30 rounded-3xl p-8 text-neutral-600 overflow-hidden h-[300px] flex flex-col justify-between">
            <div>
              <h3 className="text-4xl font-bold">Cuidado Básico Dental</h3>
            </div>
            <img
              src={doctoranim}
              alt="Doctor sonriendo"
              className="absolute bottom-0 right-0 h-3/4 w-auto object-contain opacity-30"
              style={{ zIndex: 0 }}
            />
            <ul className="relative list-disc list-inside space-y-2 text-lg" style={{ zIndex: 1 }}>
              <li>Limpieza y Pulido</li>
              <li>Examen y Diagnóstico</li>
              <li>Aplicación de Flúor</li>
              <li>Selladores Dentales</li>
            </ul>
          </div>

          {/* Card 2: Odontología Cosmética */}
          <div className="relative bg-neutral-200/30 rounded-3xl p-8 text-neutral-600 overflow-hidden h-[300px] flex flex-col justify-between">
            <div>
              <h3 className="text-4xl font-bold">Odontología Cosmética</h3>
            </div>
            <img
              src={chair}
              alt="Herramienta dental cosmética"
              className="absolute bottom-0 right-0 h-3/4 w-auto object-contain opacity-30"
              style={{ zIndex: 0 }}
            />
            <ul className="relative list-disc list-inside space-y-2 text-lg" style={{ zIndex: 1 }}>
              <li>Blanqueamiento Dental</li>
              <li>Carillas de Porcelana</li>
              <li>Diseño de Sonrisa</li>
              <li>Coronas Estéticas</li>
            </ul>
          </div>
        </div>

        {/* Other Services Grid */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherServices.map((service) => (
            <div key={service} className="bg-neutral-200/40 backdrop-blur-sm rounded-2xl p-8 flex items-center justify-center h-32">
              <h4 className="text-2xl font-semibold text-neutral-500 text-center">{service}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
