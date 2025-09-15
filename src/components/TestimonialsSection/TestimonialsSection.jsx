const StarIcon = () => (
  <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.367 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.367-2.448a1 1 0 00-1.175 0l-3.367 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.24 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z" />
  </svg>
);

const TestimonialCard = ({ quote, author }) => (
  <div className="bg-white p-8 rounded-2xl shadow-sm flex flex-col h-full">
    <div className="flex items-center mb-4">
      {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
    </div>
    <p className="text-gray-600 italic mb-6 flex-grow">"{quote}"</p>
    <p className="font-bold text-gray-800 text-right">- {author}</p>
  </div>
);

export const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "El trato fue excepcional y los resultados superaron mis expectativas. ¡Nunca me había sentido tan cómodo en el dentista!",
      author: "Carla M."
    },
    {
      quote: "Transformaron mi sonrisa por completo. El equipo es profesional, amable y utiliza la mejor tecnología. Lo recomiendo al 100%.",
      author: "Javier G."
    },
    {
      quote: "Desde la primera consulta hasta el final del tratamiento, todo fue perfecto. Me explicaron cada paso y me sentí muy segura.",
      author: "Sofía L."
    }
  ];

  return (
    <section className="py-20 px-10 bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
          Lo que dicen nuestros pacientes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} quote={testimonial.quote} author={testimonial.author} />
          ))}
        </div>
      </div>
    </section>
  );
};


