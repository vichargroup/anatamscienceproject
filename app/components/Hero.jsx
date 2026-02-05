// "use client";

// export default function Hero() {
//   const scrollToRegistration = () => {
//     const section = document.getElementById("registration");
//     section?.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <section className="w-full bg-black flex flex-col items-center justify-center">
//       {/* 🔥 HORIZONTAL BAR */}
//        <div
//         onClick={scrollToRegistration}
//         className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-center py-1 font-semibold tracking-wide cursor-pointer hover:opacity-90 transition"
//       >
//         🚀 Anantam Science Exhibition – Registration Open · Join Now 👉
//       </div>
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
      {/* 🔥 MOVING HORIZONTAL BAR */}
      <div className="w-full overflow-hidden bg-gradient-to-r from-cyan-600 to-blue-600 py-1 marquee-wrapper">
        <div className="whitespace-nowrap animate-marquee text-white font-semibold tracking-wide">
          🚀 Anantam Science Exhibition – Registration Open ·{" "}
          <span
            onClick={scrollToRegistration}
            className="cursor-pointer underline hover:text-gray-300 transition"
          >
            Join Now 👉
          </span>
          &nbsp;&nbsp;&nbsp;🚀 Anantam Science Exhibition – Registration Open ·{" "}
          <span
            onClick={scrollToRegistration}
            className="cursor-pointer underline hover:text-gray-300 transition"
          >
            Join Now 👉
          </span>
          &nbsp;&nbsp;&nbsp;🚀 Anantam Science Exhibition – Registration Open ·{" "}
          <span
            onClick={scrollToRegistration}
            className="cursor-pointer underline hover:text-gray-300 transition"
          >
            Join Now 👉
          </span>
        </div>
      </div>

      {/* HERO IMAGE */}
      <img
        src="/herosection.png"
        alt="Hero"
        className="w-full h-[50vh] sm:h-auto max-h-screen object-fit"
      />
    </section>
  );
}