export const ServicesSection = () => {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8">
      

      {/* Grid Container */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Card 1: Cuidado Básico Dental */}
        <div className="relative bg-neutral-200/50 rounded-3xl p-8 text-neutral-800 overflow-hidden h-[420px] flex flex-col justify-between">
          <div>
            <h3 className="text-4xl font-bold">
              Cuidado Básico Dental
            </h3>
          </div>
          <img 
            src="https://res.cloudinary.com/duqzrruw2/image/upload/v1720731356/diresu/home/services/instrument-1_g8h2o4.png" 
            alt="Herramienta dental" 
            className="absolute bottom-0 right-0 h-3/4 w-auto object-contain opacity-40"
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
        <div className="relative bg-neutral-200/50 rounded-3xl p-8 text-neutral-800 overflow-hidden h-[420px] flex flex-col justify-between">
          <div>
            <h3 className="text-4xl font-bold">
              Odontología Cosmética
            </h3>
          </div>
          <img 
            src="https://res.cloudinary.com/duqzrruw2/image/upload/v1720731356/diresu/home/services/instrument-2_b5ff1p.png" 
            alt="Herramienta dental cosmética" 
            className="absolute bottom-0 right-0 h-3/4 w-auto object-contain opacity-40"
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
    </section>
  );
};
