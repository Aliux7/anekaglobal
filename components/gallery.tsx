export default function Gallery() {
  const images = [
    "/assets/1.jpg",
    "/assets/2.jpg",
    "/assets/3.jpg",
    "/assets/5.jpg",
  ];

  return (
    <section
      id="visi-misi"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-32 lg:py-10 px-3 sm:px-5 xl:px-0"
    >
      {/* Background Soft Gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-white via-gray-50 to-gray-100">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-linear-to-br from-[#A6205A]/20 to-[#D41E84]/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-linear-to-br from-[#D41E84]/20 to-[#E85545]/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div> 

      <div className="grid grid-cols-1 sm:grid-cols-2 z-10 gap-6 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {images.map((src, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow"
          >
            <img
              src={src}
              alt={`Gallery ${index + 1}`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
