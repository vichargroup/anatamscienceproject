// export default function Hero() {
//   return (
//     <section className="w-full bg-black flex items-center justify-center">
//       <img
//         src="/herosection.png"
//         alt="Hero"
//         className="w-full h-[50vh] sm:h-auto max-h-screen object-fit"
//       />
//     </section>
//   );
// }


"use client";

export default function Hero() {
  const scrollToRegistration = () => {
    const section = document.getElementById("registration");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="w-full bg-black flex flex-col items-center justify-center">
       <div
        onClick={scrollToRegistration}
        className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-center py-1 font-semibold tracking-wide cursor-pointer hover:opacity-90 transition"
      >
        🚀 Anantam Science Exhibition – Registration Open · Click Here
      </div>
      <img
        src="/herosection.png"
        alt="Hero"
        className="w-full h-[50vh] sm:h-auto max-h-screen object-fit"
      />

      {/* 🔥 HORIZONTAL BAR */}
     
    </section>
  );
}