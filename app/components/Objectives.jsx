"use client";

import { motion } from "framer-motion";

const objectives = [
  {
    img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=600&q=80",
    text: "Provide a forum for learners to pursue natural curiosity and spark innovative ideas.",
    icon: "💡",
    alt: "Curiosity and Innovation",
  },
  {
    img: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=600&q=80",
    text: "Provide scope for inventive, critical thinking and analytical problem solving.",
    icon: "🧠",
    alt: "Critical Thinking",
  },
  {
    img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=600&q=80",
    text: "Create awareness about environmental issues and sustainable global concerns.",
    icon: "🌱",
    alt: "Environmental Awareness",
  },
  {
    img: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=600&q=80",
    text: "Apply mathematics and IT to visualise and solve real-world problems.",
    icon: "📊",
    alt: "Mathematics and Data",
  },
  {
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80",
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
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-white flex items-center justify-center text-2xl shadow-md">
                  {item.icon}
                </div>
              </div>

              {/* Text */}
              <div className="p-6 text-center">
                <p className="font-body text-gray-700 text-sm md:text-base font-medium leading-relaxed">
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

