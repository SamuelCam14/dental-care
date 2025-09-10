export const ServicesSection = () => {
  return (
    <section className="h-[700px] relative overflow-hidden rounded-3xl max-w-7xl mx-auto">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/8272093/pexels-photo-8272093.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div> {/* Overlay */}
      </div>

      {/* Content Card */}
      <div className="absolute top-10 left-10 max-w-xl bg-white/95 pt-5 pr-5 rounded-tr-3xl">
        <div className="bg-neutral-200 backdrop-blur-sm rounded-3xl p-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-gray-800">
              Nuestros Servicios
            </h2>
            <p className="text-gray-600 leading-relaxed text-xl">
              Ofrecemos una gama completa de servicios dentales para asegurar que tu sonrisa no solo se vea increíble, sino que también esté completamente sana. Desde limpiezas de rutina hasta procedimientos cosméticos avanzados, estamos aquí para ayudarte.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};