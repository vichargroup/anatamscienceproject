// export default function Hero() {
//   return (
//     <section
//       className="relative h-screen w-full bg-cover bg-center"
//       style={{ backgroundImage: "url('/hero.jpg')" }}
//     >
//       {/* Dark overlay */}
//       <div className="absolute inset-0 bg-black/60"></div>

//       {/* Content */}
//       <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
//         <div>
//           <h1 className="text-3xl md:text-6xl font-bold text-white leading-tight">
//             ANANTAM
//             Exploring the Infinite Possibilities
//           </h1>

//           <p className="mt-4 text-lg md:text-2xl text-gray-200">
//             - Powered by Vichar Group
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default function Hero() {
//   return (
//     <section
//       className="relative h-screen w-full bg-cover bg-center"
//       style={{ backgroundImage: "url('/herosection.png')" }}
//     >
//       <div className="absolute inset-0 bg-black/60"></div>

//       <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
//         <div>
//           <h1 className="font-heading text-3xl md:text-6xl font-extrabold text-white leading-tight">
//             ANANTAM
//             <br />
//             Exploring the Infinite Possibilities
//           </h1>

//           <p className="font-body mt-3 text-lg md:text-2xl text-gray-200">
//             – Powered by Vichar Group
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }


export default function Hero() {
  return (
    <section className="w-full bg-black flex items-center justify-center">
      <img
        src="/herosection.png"
        alt="Hero"
        className="w-full h-auto max-h-screen object-contain"
      />
    </section>
  );
}