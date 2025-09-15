import doctor from "../../assets/pictures/doctor.png";

export const DoctorSection = () => {
  return (
    <section id="doctors" className="py-20 px-10 bg-neutral-50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
        {/* Content Section */}
        <div className="flex flex-col justify-center">
          <span className="text-neutral-500 font-semibold">
            CONOCE A NUESTRO EXPERTO
          </span>
          <h2 className="text-4xl font-bold text-gray-800 mt-2 mb-4">
            Dr. Andrés Torres
          </h2>
          <p className="text-gray-600 leading-relaxed text-xl mb-6">
            Con más de 15 años de experiencia en odontología cosmética y reconstructiva, el Dr. Torres es un referente en el sector. Graduado con honores de la Universidad Nacional, ha dedicado su carrera a la creación de sonrisas saludables y estéticamente perfectas, combinando arte y ciencia en cada tratamiento.
          </p>
          <div className="border-l-4 border-neutral-400 pl-4">
            <p className="text-xl italic text-gray-700">
              "Mi mayor satisfacción es ver la confianza que una nueva sonrisa le da a mis pacientes. No se trata solo de dientes, se trata de cambiar vidas."
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full h-[600px] rounded-3xl overflow-hidden shadow-lg">
          <img
            src={doctor}
            alt="Foto del Dr. Andrés Torres"
            className="w-full h-full object-cover object-top"
          />
        </div>
      </div>
    </section>
  );
};


