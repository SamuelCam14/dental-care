import backgroundImage from "../../../../assets/pictures/consultorio-dental.webp";

const Background = () => {
  return (
    <div
      className="absolute inset-0 bg-cover bg-center bg-no-repeat rounded-3xl m-10"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/5 rounded-3xl"></div>
    </div>
  );
};

export default Background;
