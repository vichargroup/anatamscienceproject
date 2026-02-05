"use client";

import { motion } from "framer-motion";

export default function ThemeSection() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-emerald-50 via-white to-green-50">

      <div className="relative max-w-7xl mx-auto px-4 md:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
            🌱 Exhibition Theme
          </h2>

          <p className="font-heading text-xl md:text-2xl font-semibold text-emerald-600 mb-2">
            Science and Technology for a Greener Tomorrow
          </p>

          <p className="font-body text-gray-600 text-base md:text-lg">
            “Think Green, Create Smart”
          </p>
        </motion.div>

        {/* Theme Streams */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Physics */}
          <div className="bg-white rounded-3xl shadow-xl p-6">
            <h3 className="font-heading text-base md:text-lg font-bold text-blue-600 mb-3">🔬 PHYSICS</h3>
            <ul className="font-body space-y-1.5 text-gray-700 text-base md:text-lg leading-relaxed">
              <li>• Energy and Power</li>
              <li>• Environment and Climate</li>
              <li>• Transport and Motion</li>
              <li>• Technology for Sustainability</li>
              <li>• Space, Communication and Monitoring</li>
            </ul>
          </div>

          {/* Chemistry */}
          <div className="bg-white rounded-3xl shadow-xl p-6">
            <h3 className="font-heading text-base md:text-lg font-bold text-pink-600 mb-3">🧪 CHEMISTRY</h3>
            <ul className="font-body space-y-1.5 text-gray-700 text-base md:text-lg leading-relaxed">
              <li>• Green Chemistry</li>
              <li>• Energy and Fuels</li>
              <li>• Waste Management and Recycling</li>
              <li>• Agriculture and Food Chemistry</li>
              <li>• Smart and Eco-friendly Materials</li>
            </ul>
          </div>

          {/* Biology */}
          <div className="bg-white rounded-3xl shadow-xl p-6">
            <h3 className="font-heading text-base md:text-lg font-bold text-green-600 mb-3">🧬 BIOLOGY</h3>
            <ul className="font-body space-y-1.5 text-gray-700 text-base md:text-lg leading-relaxed">
              <li>• Food, Health and Hygiene</li>
              <li>• Ecology and Biodiversity</li>
              <li>• Climate Change and Life on Earth</li>
              <li>• Microbiology and Sustainability</li>
              <li>• Biotechnology and Future Biology</li>
            </ul>
          </div>

          {/* Mathematics */}
          <div className="bg-white rounded-3xl shadow-xl p-6">
            <h3 className="font-heading text-base md:text-lg font-bold text-purple-600 mb-3">📐 MATHEMATICS</h3>
            <ul className="font-body space-y-1.5 text-gray-700 text-base md:text-lg leading-relaxed">
              <li>• Data Statistics and Sustainability</li>
              <li>• Mathematical Modelling and Prediction</li>
              <li>• Geometry and Green Architecture</li>
              <li>• Logical Thinking and Decision Making</li>
              <li>• Arithmetic and Algebra in Sustainability</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
