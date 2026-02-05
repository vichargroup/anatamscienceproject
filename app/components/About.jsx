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
            {/* Text */}
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
