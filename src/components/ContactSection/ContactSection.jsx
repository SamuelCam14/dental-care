const ContactInfo = ({ icon, title, children }) => (
  <div className="flex items-start">
    <div className="flex-shrink-0 mr-4 mt-1">{icon}</div>
    <div>
      <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      <div className="text-gray-600 text-lg">{children}</div>
    </div>
  </div>
);

export const ContactSection = () => {
  return (
    <section className="py-20 px-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
          Encuéntranos y Agenda tu Cita
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white p-10 rounded-3xl shadow-lg">
          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-8">
            <ContactInfo
              title="Dirección"
              icon={<svg className="w-8 h-8 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>}
            >
              <p>Av. Siempre Viva 742, Springfield</p>
            </ContactInfo>
            <ContactInfo
              title="Teléfono"
              icon={<svg className="w-8 h-8 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>}
            >
              <p>(555) 123-4567</p>
            </ContactInfo>
            <ContactInfo
              title="Email"
              icon={<svg className="w-8 h-8 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
            >
              <p>contacto@dentalcare.com</p>
            </ContactInfo>
          </div>

          {/* Google Maps */}
          <div className="w-full h-[450px] rounded-2xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019492989293!2d-122.4194154846813!3d37.77492957975904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064d347156f%3A0x1e1a5e1e6f1b4f0!2sSan%20Francisco%20City%20Hall!5e0!3m2!1sen!2sus!4v1616161616161"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};


