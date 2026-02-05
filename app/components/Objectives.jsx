"use client";

import { motion } from "framer-motion";

const objectives = [
  {
    img: "/innovativeideas.jpeg",
    text: "Provide a forum for learners to pursue natural curiosity and spark innovative ideas.",
    icon: "💡",
    alt: "Curiosity and Innovation",
  },
  {
    img: "/criticalthinking.jpeg",
    text: "Provide scope for inventive, critical thinking and analytical problem solving.",
    icon: "🧠",
    alt: "Critical Thinking",
  },
  {
    img: "/environmentalissues.jpeg",
    text: "Create awareness about environmental issues and sustainable global concerns.",
    icon: "🌱",
    alt: "Environmental Awareness",
  },
  {
    img: "/mathematics.jpeg",
    text: "Apply mathematics and IT to visualise and solve real-world problems.",
    icon: "📊",
    alt: "Mathematics and Data",
  },
  {
    img: "/encouragelearners.jpeg",
    text: "Encourage learners to foresee the future of the planet as responsible human beings.",
    icon: "🌍",
    alt: "Future of Earth",
  },
];

export default function Objectives() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-indigo-50 via-white to-sky-50 overflow-hidden">

      {/* Decorative blobs */}
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 -right-24 w-80 h-80 bg-purple-200 rounded-full blur-3xl opacity-30"></div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
            🎯 Objectives of the Science Exhibition
          </h2>
          <p className="font-body text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
            Designed to inspire curiosity, creativity, and scientific thinking.
          </p>
        </motion.div>

        {/* ================= MOBILE SWIPE | DESKTOP GRID ================= */}
        <div
          className="flex gap-6 overflow-x-auto touch-pan-x snap-x snap-mandatory md:grid md:grid-cols-3 md:gap-10 md:overflow-visible scrollbar-none pb-6 md:pb-0"
        >
          {/* LEFT SPACER (IMPORTANT) */}
          <div className="shrink-0 w-[7.5%] md:hidden"></div>

          {objectives.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="min-w-[85%] sm:min-w-[70%] md:min-w-0 bg-white/90 backdrop-blur rounded-3xl shadow-xl overflow-hidden snap-center"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.alt}
                  className="w-full h-full object-fit"
                />
                <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-white flex items-center justify-center text-2xl shadow-md">
                  {item.icon}
                </div>
              </div>

              {/* Text */}
              <div className="p-6 text-center">
                <p className="font-body text-gray-700 text-base  md:text-lg leading-relaxed">
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}

          {/* RIGHT SPACER (IMPORTANT) */}
          <div className="shrink-0 w-[7.5%] md:hidden"></div>
        </div>


        {/* Mobile hint only */}
        <p className="mt-4 text-center text-sm text-gray-400 md:hidden">
          ← Swipe to explore →
        </p>

      </div>
    </section>
  );
}

