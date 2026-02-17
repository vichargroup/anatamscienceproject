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


// "use client";

// export default function Hero() {
//   const scrollToRegistration = () => {
//     const section = document.getElementById("registration");
//     section?.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <section className="w-full bg-black flex flex-col items-center justify-center">
//       {/* 🔥 MOVING HORIZONTAL BAR */}
//       <div className="w-full overflow-hidden bg-gradient-to-r from-cyan-600 to-blue-600 py-1 marquee-wrapper">
//         <div className="whitespace-nowrap animate-marquee text-white font-semibold tracking-wide">
//           🚀 Anantam Science Exhibition – Registration Open ·{" "}
//           <span
//             onClick={scrollToRegistration}
//             className="cursor-pointer underline hover:text-gray-300 transition"
//           >
//             Join Now 👉
//           </span>
//           &nbsp;&nbsp;&nbsp;🚀 Anantam Science Exhibition – Registration Open ·{" "}
//           <span
//             onClick={scrollToRegistration}
//             className="cursor-pointer underline hover:text-gray-300 transition"
//           >
//             Join Now 👉
//           </span>
//           &nbsp;&nbsp;&nbsp;🚀 Anantam Science Exhibition – Registration Open ·{" "}
//           <span
//             onClick={scrollToRegistration}
//             className="cursor-pointer underline hover:text-gray-300 transition"
//           >
//             Join Now 👉
//           </span>
//         </div>
//       </div>

//       {/* HERO IMAGE */}
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
    <section className="w-full bg-black flex flex-col items-center justify-center relative">

      {/* 🔥 MOVING BAR */}
      <div className="w-full overflow-hidden bg-gradient-to-r from-cyan-600 to-blue-600 py-1">
        <div className="marquee-single text-white font-semibold tracking-wide marquee-wrapper animate-marquee">
          🚀 Anantam Science Exhibition – Registration Open |{" "}
          <span
            onClick={scrollToRegistration}
            className="cursor-pointer underline hover:text-gray-300 transition"
          >
            Participate Now 👉
          </span>
        </div>
      </div>
      {/* HERO IMAGE + CTA */}
      <div className="relative w-full">

        <img
          src="/herosection.png"
          alt="Hero"
          className="w-full h-[65vh] sm:h-auto max-h-screen object-fit"
        />

        {/* 🔥 LIGHTER OVERLAY (transparency reduced) */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* ✅ CTA CONTENT (thoda niche shift kiya) */}
        <div className="absolute inset-0 flex flex-col items-center justify-end text-center px-4 pb-20">



          <p className="text-gray-200 max-w-2xl mb-8 text-lg">
            Join the Anantam Science Exhibition and showcase your creativity,
            research, and groundbreaking ideas to the world.
          </p>

          <button
            onClick={scrollToRegistration}
            className="bg-blue-300 hover:bg-blue-400 text-black px-6 py-2.5 rounded-full text-base font-semibold shadow-md transition-all duration-300 hover:shadow-lg"
          >
            Register Now
          </button>

        </div>
      </div>

    </section>
  );
}