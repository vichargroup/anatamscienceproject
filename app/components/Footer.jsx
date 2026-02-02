import { Globe, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#020617] text-gray-300 overflow-hidden">

      {/* Subtle background effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,255,255,0.08),_transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* LEFT : BRAND */}
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-cyan-400 tracking-wider mb-4">
              VICHAR GROUP
            </h2>

            <p className="text-gray-400 leading-relaxed max-w-md">
              Leading the scientific revolution in Pune since 2023.
              <br /><br />
              We focus on conceptual clarity, logical reasoning, and
              hands-on scientific exploration for school-level students.
            </p>
          </div>

          {/* RIGHT : SUPPORT HUB */}
          <div className="md:text-right">
            <h3 className="text-sm font-semibold text-cyan-400 tracking-[0.3em] mb-6">
              SUPPORT HUB
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center gap-4 md:flex-row-reverse md:justify-start">
                <Phone size={18} className="text-cyan-400 shrink-0" />
                <span className="text-right">
                  +91 9970361906 | 9270189405
                </span>
              </li>

              <li className="flex items-center gap-4 md:flex-row-reverse md:justify-start">
                <Mail size={18} className="text-cyan-400 shrink-0" />
                <span className="text-right">
                  info@vichargroup.com
                </span>
              </li>

              <li className="flex items-center gap-4 md:flex-row-reverse md:justify-start">
                <MapPin size={18} className="text-cyan-400 shrink-0" />
                <span className="text-right">
                  Bibwewadi, Pune – 411037
                </span>
              </li>

              <li className="flex items-center gap-4 md:flex-row-reverse md:justify-start">
                <Globe size={18} className="text-cyan-400 shrink-0" />
                <span className="text-right">
                  www.vichargroup.com
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="mt-4 border-t border-white/10 pt-4 text-center text-xs text-gray-500 tracking-widest">
          © 2023–26 VICHAR GROUP · ALL RIGHTS RESERVED
        </div>
      </div>
    </footer>
  );
}
