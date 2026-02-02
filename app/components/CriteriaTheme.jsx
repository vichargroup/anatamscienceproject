"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "Eligibility",
    icon: "🎓",
    desc: "Students from Classes 7th to 10th are eligible to participate in the Anantam Science Exhibition.",
    color: "bg-blue-100 text-blue-700",
  },
  {
    title: "Theme",
    icon: "🌌",
    desc: "Anantam – Exploring the Infinite Possibilities. Projects should reflect creativity, innovation, and scientific thinking.",
    color: "bg-purple-100 text-purple-700",
  },
  {
    title: "Project Area",
    icon: "🧪",
    desc: "Projects can be based on Science, Mathematics, Environment, Technology, or real-life problem solving.",
    color: "bg-green-100 text-green-700",
  },
  {
    title: "Evaluation Criteria",
    icon: "🏆",
    desc: "Projects will be judged on innovation, clarity of concept, presentation, and real-world application.",
    color: "bg-orange-100 text-orange-700",
  },
];

export default function CriteriaTheme() {
  return (
    <section className="relative py-28 bg-gradient-to-b from-sky-50 via-white to-indigo-50">

      {/* Decorative blobs */}
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 -right-24 w-80 h-80 bg-purple-200 rounded-full blur-3xl opacity-30"></div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-8">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            🧭 Criteria & Theme
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
            Understand who can participate, the theme of the exhibition, and how projects will be evaluated.
          </p>
        </motion.div>

        {/* Stepper */}
        <div className="relative grid md:grid-cols-4 gap-12">

          {/* Connector Line (desktop only) */}
          <div className="hidden md:block absolute top-10 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-200 via-green-200 to-purple-200"></div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative text-center"
            >
              {/* Icon */}
              <div
                className={`w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center text-3xl shadow-md ${step.color}`}
              >
                {step.icon}
              </div>

              {/* Card */}
              <div className="bg-white/90 backdrop-blur rounded-3xl shadow-xl p-6 hover:shadow-2xl transition">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
