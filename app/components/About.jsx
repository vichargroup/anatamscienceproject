// "use client";

// import { motion } from "framer-motion";

// export default function About() {
//   return (
//     <section className="relative py-32 bg-gradient-to-b from-sky-50 via-white to-indigo-50">

//       {/* Background blobs */}
//       <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
//       <div className="absolute top-1/3 -right-32 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-30"></div>

//       <div className="relative max-w-7xl mx-auto px-4 md:px-8">

//         {/* ================= MAIN CONTAINER ================= */}
//         <motion.div
//           initial={{ opacity: 0, y: 60 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="bg-white/90 backdrop-blur rounded-2xl shadow-2xl p-8 md:p-14 space-y-24"
//         >

//           {/* ================= TIMELINE ================= */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center relative">

//             <div className="hidden md:block absolute top-10 left-1/2 w-[70%] h-[2px] bg-gradient-to-r from-blue-200 via-green-200 to-purple-200 -translate-x-1/2"></div>

//             <div>
//               <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-blue-100 flex items-center justify-center text-3xl shadow-md">
//                 📅
//               </div>
//               <h4 className="font-bold text-gray-900">Registration End</h4>
//               <p className="text-sm text-gray-500">10 March 2026</p>
//             </div>

//             <div>
//               <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-green-100 flex items-center justify-center text-3xl shadow-md">
//                 🧪
//               </div>
//               <h4 className="font-bold text-gray-900">Event Date</h4>
//               <p className="text-sm text-gray-500">22 March 2026</p>
//             </div>

//             <div>
//               <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-purple-100 flex items-center justify-center text-3xl shadow-md">
//                 📍
//               </div>
//               <h4 className="font-bold text-gray-900">Location</h4>
//               <p className="text-sm text-gray-500">Bibwewadi, Pune</p>
//             </div>
//           </div>

//           {/* ================= ABOUT ================= */}
//           <div className="grid md:grid-cols-2 gap-16 items-center">

//             {/* Image */}
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.7 }}
//               className="rounded-xl overflow-hidden shadow-xl"
//             >
//               <img
//                 src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1000&q=80"
//                 alt="Students working on science experiments"
//                 className="w-full h-[300px] md:h-[420px] object-cover"
//               />
//             </motion.div>

//             {/* Text */}
//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.7 }}
//             >
//               <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 flex items-center gap-3">
//                 🔬 About Science Exhibition
//               </h2>

//               <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
//                 Science is not just a subject — it is how we explore, question,
//                 and understand the world around us. It builds curiosity,
//                 creativity, and confidence in young minds.
//               </p>

//               <p className="text-gray-700 text-base md:text-lg leading-relaxed">
//                 Anantam Science Exhibition encourages students to connect ideas,
//                 experiment boldly, and present their innovative thinking with
//                 pride.
//               </p>
//             </motion.div>
//           </div>

//           {/* ================= WHY PARTICIPATE ================= */}
//           <div className="grid md:grid-cols-2 gap-16 items-center">

//             {/* Text */}
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.7 }}
//               className="order-2 md:order-1"
//             >
//               <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
//                 🚀 Why should students participate?
//               </h3>

//               <p className="text-gray-700 text-base md:text-lg leading-relaxed">
//                 Students get a chance to explore real-world challenges, apply
//                 scientific thinking, work in teams, and gain confidence by
//                 showcasing their ideas — all in a fun and inspiring
//                 environment.
//               </p>
//             </motion.div>

//             {/* Image */}
//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.7 }}
//               className="order-1 md:order-2 rounded-xl overflow-hidden shadow-xl"
//             >
//               <img
//                 src="https://images.unsplash.com/photo-1606229365485-93a3b8ee0385?auto=format&fit=crop&w=1000&q=80"
//                 alt="Students presenting science projects"
//                 className="w-full h-[300px] md:h-[420px] object-cover"
//               />
//             </motion.div>
//           </div>

//         </motion.div>
//       </div>
//     </section>
//   );
// }


"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-sky-50 via-white to-indigo-50">
      {/* Background blobs */}
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute top-1/3 -right-24 w-80 h-80 bg-purple-200 rounded-full blur-3xl opacity-30"></div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        {/* ================= MAIN CONTAINER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white/90 backdrop-blur rounded-2xl shadow-2xl p-6 md:p-12 space-y-16"
        >
          {/* ================= TIMELINE ================= */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center relative">
            <div className="hidden md:block absolute top-10 left-1/2 w-[65%] h-[2px] bg-gradient-to-r from-blue-200 via-green-200 to-purple-200 -translate-x-1/2"></div>

            <div>
              <div className="w-14 h-14 mx-auto mb-3 rounded-2xl bg-blue-100 flex items-center justify-center text-2xl shadow-md">
                📅
              </div>
              <h4 className="font-heading font-semibold text-gray-900">
                Registration End
              </h4>
              <p className="font-body text-sm text-gray-500">
                10 March 2026
              </p>
            </div>

            <div>
              <div className="w-14 h-14 mx-auto mb-3 rounded-2xl bg-green-100 flex items-center justify-center text-2xl shadow-md">
                🧪
              </div>
              <h4 className="font-heading font-semibold text-gray-900">
                Event Date
              </h4>
              <p className="font-body text-sm text-gray-500">
                22 March 2026
              </p>
            </div>

            <div>
              <div className="w-14 h-14 mx-auto mb-3 rounded-2xl bg-purple-100 flex items-center justify-center text-2xl shadow-md">
                📍
              </div>
              <h4 className="font-heading font-semibold text-gray-900">
                Location
              </h4>
              <p className="font-body text-sm text-gray-500">
                Bibwewadi, Pune
              </p>
            </div>
          </div>

          {/* ================= ABOUT ================= */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="rounded-xl overflow-hidden shadow-xl"
            >
              <img
                src="/aboutsciexibition.jpeg"
                alt="Students working on science experiments"
                className="w-full h-[260px] md:h-[380px] object-fit"
              />
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 flex items-center gap-3">
                🔬 About Science Exhibition
              </h2>

              <p className="font-body text-gray-700 text-base md:text-lg leading-relaxed mb-4">
                Science is not just a subject — it is how we explore, question,
                and understand the world around us. It builds curiosity,
                creativity, and confidence in young minds.
              </p>

              <p className="font-body text-gray-700 text-base md:text-lg leading-relaxed">
                Anantam Science Exhibition encourages students to connect ideas,
                experiment boldly, and present their innovative thinking with
                pride.
              </p>
            </motion.div>
          </div>

          {/* ================= WHY PARTICIPATE ================= */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="order-2 md:order-1"
            >
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                🚀 Why should students participate?
              </h3>

              <p className="font-body text-gray-700 text-base md:text-lg leading-relaxed">
                Students get a chance to explore real-world challenges, apply
                scientific thinking, work in teams, and gain confidence by
                showcasing their ideas — all in a fun and inspiring
                environment.
              </p>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="order-1 md:order-2 rounded-xl overflow-hidden shadow-xl"
            >
              <img
                src="/whystudentparticipate.jpeg"
                alt="Students presenting science projects"
                className="w-full h-[260px] md:h-[380px] object-fit"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
