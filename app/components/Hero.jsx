export default function Hero() {
  return (
    <section
      className="relative h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: "url('/hero.jpg')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
        <div>
          <h1 className="text-3xl md:text-6xl font-bold text-white leading-tight">
            Anantam Science Exhibition
          </h1>

          <p className="mt-4 text-lg md:text-2xl text-gray-200">
            Powered by Vichar Group
          </p>
        </div>
      </div>
    </section>
  );
}
