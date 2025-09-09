import React from "react";

const ContentCard = () => {
  return (
    <div className="absolute bottom-10 left-10 max-w-xl bg-white/95 pt-5 pr-5 rounded-tr-3xl">
      <div className="bg-neutral-200 backdrop-blur-sm rounded-3xl p-8">
        <div className="space-y-4">
            <div className="flex flex-col">
                <h1 className="text-4xl font-bold text-gray-800">
                    Sonríe con confianza
                </h1>

                <h2 className="text-4xl font-semibold text-gray-800">
                    Expertos en salud y estética dental
                </h2>
            </div>

          <p className="text-gray-600 leading-relaxed text-xl">
            Bienvenido a Clínica Dental donde transformamos tu sonrisa con
            tratamientos personalizados.
          </p>

          <div className="pt-2">
            <button className="cursor-pointer bg-neutral-500 hover:bg-neutral-600 text-white px-6 py-5 rounded-xl font-medium transition-colors duration-300 w-full">
              Agenda tu cita ahora
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
