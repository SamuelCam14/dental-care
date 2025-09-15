import consultorio from "../../assets/pictures/consultorio2.png";

export const WelcomeSection = () => {
  return (
    <section id="welcome" className="py-20 px-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
        {/* Image Section */}
        <div className="w-full h-[600px] rounded-3xl overflow-hidden shadow-lg">
          <img
            src={consultorio}
            alt="Lobby de la clínica dental"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="flex flex-col justify-center">
          <span className="text-neutral-500 font-semibold">
            BIENVENIDO A DENTAL CARE
          </span>
          <h2 className="text-4xl font-bold text-gray-800 mt-2 mb-4">
            Tu sonrisa es nuestra pasión y tu bienestar, nuestro compromiso
          </h2>
          <p className="text-gray-600 leading-relaxed text-xl mb-6">
            En Dental Care, combinamos la última tecnología con un equipo de especialistas apasionados para ofrecerte una experiencia dental inigualable. Desde el momento en que entras, sentirás un ambiente cálido y acogedor diseñado para tu máxima comodidad.
          </p>
          <ul className="space-y-3 text-lg">
            <li className="flex items-center">
              <span className="text-neutral-500 mr-3">✔</span>
              <span>Equipos con tecnología de punta.</span>
            </li>
            <li className="flex items-center">
              <span className="text-neutral-500 mr-3">✔</span>
              <span>Profesionales altamente cualificados y en constante formación.</span>
            </li>
            <li className="flex items-center">
              <span className="text-neutral-500 mr-3">✔</span>
              <span>Atención 100% personalizada y centrada en tus necesidades.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};