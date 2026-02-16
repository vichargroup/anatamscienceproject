// "use client";

// import { motion } from "framer-motion";
// import { Calendar, FlaskConical, MapPin } from "lucide-react";

// export default function About() {
//   return (
//     <section className="relative py-20 bg-gradient-to-b from-sky-50 via-white to-indigo-50">
//       {/* Background blobs */}
//       <div className="absolute -top-24 -left-24 w-80 h-80 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
//       <div className="absolute top-1/3 -right-24 w-80 h-80 bg-purple-200 rounded-full blur-3xl opacity-30"></div>

//       <div className="relative max-w-7xl mx-auto px-4 md:px-8">
//         {/* ================= MAIN CONTAINER ================= */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           className="bg-white/90 backdrop-blur rounded-2xl shadow-2xl p-6 md:p-12 space-y-16"
//         >
//           {/* ================= TIMELINE ================= */}
//           <div className="grid grid-cols-3 gap-6 md:gap-8 text-center relative">


//             <div>
//               <div className="w-14 h-14 mx-auto mb-3 rounded-2xl bg-blue-100 flex items-center justify-center shadow-md">
//                 <Calendar className="text-blue-600" size={26} />
//               </div>
//               <h4 className="font-heading font-semibold text-gray-900">
//                 Registration Ends On
//               </h4>
//               <p className="font-body text-sm text-gray-500">
//                 10th March 2026
//               </p>
//             </div>

//             <div>
//               <div className="w-14 h-14 mx-auto mb-3 rounded-2xl bg-green-100 flex items-center justify-center text-2xl shadow-md">
//                 <FlaskConical size={26} className="text-green-600" />
//               </div>
//               <h4 className="font-heading font-semibold text-gray-900">
//                 Event Date
//               </h4>
//               <p className="font-body text-sm text-gray-500">
//                 22nd March 2026
//               </p>
//             </div>

//             <div>
//               <div className="w-14 h-14 mx-auto mb-3 rounded-2xl bg-purple-100 flex items-center justify-center text-2xl shadow-md">
//                 <MapPin size={26} className="text-purple-600" />
//               </div>
//               <h4 className="font-heading font-semibold text-gray-900">
//                 Location
//               </h4>
//               <p className="font-body text-sm text-gray-500">
//                 Bibwewadi, Pune
//               </p>
//             </div>
//           </div>

//           {/* ================= ABOUT ================= */}
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             {/* Image */}
//             <motion.div
//               initial={{ opacity: 0, x: -40 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6 }}
//               className="rounded-xl overflow-hidden shadow-xl"
//             >
//               <img
//                 src="/aboutsciexibition.jpeg"
//                 alt="Students working on science experiments"
//                 className="w-full h-[260px] md:h-[380px] object-fit"
//               />
//             </motion.div>

//             {/* Text */}
//             <motion.div
//               initial={{ opacity: 0, x: 40 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6 }}
//             >
//               <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 flex items-center gap-3">
//                 About Science Exhibition
//               </h2>

//               <p className="font-body text-gray-700 text-base md:text-lg leading-relaxed mb-4">
//                 Science is not just a subject — it is how we explore, question,
//                 and understand the world around us. It builds curiosity,
//                 creativity, and confidence in young minds.
//               </p>

//               <p className="font-body text-gray-700 text-base md:text-lg leading-relaxed">
//                 Anantam Science Exhibition encourages students to connect ideas,
//                 experiment boldly, and present their innovative thinking with
//                 pride.
//               </p>
//             </motion.div>
//           </div>

//           {/* ================= WHY PARTICIPATE ================= */}
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             {/* Text */}
//             <motion.div
//               initial={{ opacity: 0, x: -40 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6 }}
//               className="order-2 md:order-1"
//             >
//               <h3 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
//                 Why should students participate?
//               </h3>

//               <p className="font-body text-gray-700 text-base md:text-lg leading-relaxed">
//                 Students get a chance to explore real-world challenges, apply
//                 scientific thinking, work in teams, and gain confidence by
//                 showcasing their ideas — all in a fun and inspiring
//                 environment.
//               </p>
//             </motion.div>

//             {/* Image */}
//             <motion.div
//               initial={{ opacity: 0, x: 40 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6 }}
//               className="order-1 md:order-2 rounded-xl overflow-hidden shadow-xl"
//             >
//               <img
//                 src="/whystudentparticipate.jpeg"
//                 alt="Students presenting science projects"
//                 className="w-full h-[260px] md:h-[380px] object-fit"
//               />
//             </motion.div>
//           </div>
//           {/* ================= PRIZES & RECOGNITION ================= */}
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="
//     mt-12
//     rounded-2xl
//     bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900
//     p-6 md:p-10
//     shadow-2xl
//   "
//           >
//             {/* Heading */}
//             <h3 className="text-center text-2xl md:text-3xl font-heading font-bold text-cyan-400 mb-8">
//               🏆 Prizes & Recognition
//             </h3>

//             {/* Prize Cards */}
//             <div
//               className="
//       grid gap-5
//       grid-cols-1
//       md:grid-cols-4
//       max-w-6xl mx-auto
//     "
//             >
//               {/* 1st Prize */}
//               <div className="bg-white/10 backdrop-blur rounded-xl p-5 text-white flex items-center gap-4 md:flex-col md:text-center">
//                 <span className="text-3xl">🥇</span>
//                 <p className="font-body text-base md:text-lg">
//                   <span className="font-semibold block">1st Prize</span>
//                   ₹10,000 + Medal
//                 </p>
//               </div>

//               {/* 2nd Prize */}
//               <div className="bg-white/10 backdrop-blur rounded-xl p-5 text-white flex items-center gap-4 md:flex-col md:text-center">
//                 <span className="text-3xl">🥈</span>
//                 <p className="font-body text-base md:text-lg">
//                   <span className="font-semibold block">2nd Prize</span>
//                   ₹5,000 + Medal
//                 </p>
//               </div>

//               {/* 3rd Prize */}
//               <div className="bg-white/10 backdrop-blur rounded-xl p-5 text-white flex items-center gap-4 md:flex-col md:text-center">
//                 <span className="text-3xl">🥉</span>
//                 <p className="font-body text-base md:text-lg">
//                   <span className="font-semibold block">3rd Prize</span>
//                   ₹3,000 + Medal
//                 </p>
//               </div>

//               {/* Certificate */}
//               <div className="bg-white/10 backdrop-blur rounded-xl p-5 text-white flex items-center gap-4 md:flex-col md:text-center">
//                 <span className="text-3xl">📜</span>
//                 <p className="font-body text-base md:text-lg">
//                   <span className="font-semibold block">
//                     Certificate
//                   </span>
//                   For All Participants
//                 </p>
//               </div>
//             </div>
//           </motion.div>

//         </motion.div>
//       </div>
//     </section>
//   );
// }


"use client";

import { motion } from "framer-motion";
import { Calendar, FlaskConical, MapPin } from "lucide-react";

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
          <div className="grid grid-cols-3 gap-6 md:gap-8 text-center relative">
            <div>
              <div className="w-14 h-14 mx-auto mb-3 rounded-2xl bg-blue-100 flex items-center justify-center shadow-md">
                <Calendar className="text-blue-600" size={26} />
              </div>
              <h4 className="font-heading font-semibold text-gray-900">
                Registration Ends On
              </h4>
              <p className="font-body text-sm text-gray-500">
                10th March 2026
              </p>
            </div>

            <div>
              <div className="w-14 h-14 mx-auto mb-3 rounded-2xl bg-green-100 flex items-center justify-center text-2xl shadow-md">
                <FlaskConical size={26} className="text-green-600" />
              </div>
              <h4 className="font-heading font-semibold text-gray-900">
                Event Date
              </h4>
              <p className="font-body text-sm text-gray-500">
                22nd March 2026
              </p>
            </div>

            <div>
              <div className="w-14 h-14 mx-auto mb-3 rounded-2xl bg-purple-100 flex items-center justify-center text-2xl shadow-md">
                <MapPin size={26} className="text-purple-600" />
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

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 flex items-center gap-3">
                About Science Exhibition
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
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="order-2 md:order-1"
            >
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                Why should students participate?
              </h3>

              <p className="font-body text-gray-700 text-base md:text-lg leading-relaxed">
                Students get a chance to explore real-world challenges, apply
                scientific thinking, work in teams, and gain confidence by
                showcasing their ideas — all in a fun and inspiring environment.
              </p>
            </motion.div>

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

          {/* ================= PRIZES & RECOGNITION ================= */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-12 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6 md:p-10 shadow-2xl"
          >
            <h3 className="text-center text-2xl md:text-3xl font-heading font-bold text-cyan-400 mb-8">
              🏆 Prizes & Recognition
            </h3>

            <div className="grid gap-5 grid-cols-1 md:grid-cols-4 max-w-6xl mx-auto">
              <div className="bg-white/10 backdrop-blur rounded-xl p-5 text-white flex items-center gap-4 md:flex-col md:text-center">
                <span className="text-3xl">🥇</span>
                <p className="font-body text-base md:text-lg">
                  <span className="font-semibold block">1st Prize</span>
                  ₹10,000 + Medal
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur rounded-xl p-5 text-white flex items-center gap-4 md:flex-col md:text-center">
                <span className="text-3xl">🥈</span>
                <p className="font-body text-base md:text-lg">
                  <span className="font-semibold block">2nd Prize</span>
                  ₹5,000 + Medal
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur rounded-xl p-5 text-white flex items-center gap-4 md:flex-col md:text-center">
                <span className="text-3xl">🥉</span>
                <p className="font-body text-base md:text-lg">
                  <span className="font-semibold block">3rd Prize</span>
                  ₹3,000 + Medal
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur rounded-xl p-5 text-white flex items-center gap-4 md:flex-col md:text-center">
                <span className="text-3xl">📜</span>
                <p className="font-body text-base md:text-lg">
                  <span className="font-semibold block">Certificate</span>
                  For All Participants
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}