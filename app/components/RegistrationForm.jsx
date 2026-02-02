"use client";

import { useState } from "react";

export default function RegistrationForm() {
  const [form, setForm] = useState({
    studentName: "",
    schoolName: "",
    academicClass: "",
    projectArea: "",
    studentContact: "",
    parentContact: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!data.success) {
        throw new Error("Something went wrong. Please try again.");
      }

      setSubmitted(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  /* ================= THANK YOU VIEW ================= */
  if (submitted) {
    return (
      <section
        className="py-28 bg-gradient-to-b from-green-50 to-white px-4"
        suppressHydrationWarning
      >
        <div className="max-w-xl mx-auto bg-white rounded-3xl shadow-xl p-10 text-center">
          <div className="text-5xl mb-4">🎉</div>
          <h2 className="text-3xl font-bold mb-4">
            Thank You for Registration!
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Dear <strong>{form.studentName}</strong>, <br /><br />
            We’re excited to have you join us on{" "}
            <strong>8 March 2026</strong> at{" "}
            <strong>Bibwewadi, Pune</strong>.
            <br /><br />
            Get ready to explore, experiment, and showcase your creativity!
            <br /><br />
            🌟 Be curious. Be creative. Be the scientist of tomorrow!
          </p>

          <p className="mt-6 font-semibold">
            – Team Anantam Science Exhibition
          </p>
        </div>
      </section>
    );
  }

  /* ================= FORM VIEW ================= */
  return (
    <section
      className="py-28 bg-gradient-to-b from-sky-50 to-white"
      suppressHydrationWarning
    >
      <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl p-8 md:p-12">
        <h2 className="text-3xl font-extrabold text-center mb-2">
          📝 Registration Form
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Participate in Anantam Science Exhibition
        </p>

        <form
          onSubmit={submitForm}
          className="space-y-5"
          autoComplete="off"
        >
          <input
            name="studentName"
            placeholder="Student Name"
            onChange={handleChange}
            required
            autoComplete="off"
            className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-400 outline-none"
          />

          <input
            name="schoolName"
            placeholder="School Name"
            onChange={handleChange}
            required
            autoComplete="off"
            className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-400 outline-none"
          />

          <select
            name="academicClass"
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-400 outline-none"
          >
            <option value="">Select Class</option>
            <option value="7th">7th</option>
            <option value="8th">8th</option>
            <option value="9th">9th</option>
            <option value="10th">10th</option>
          </select>

          <input
            name="projectArea"
            placeholder="Project Area (Eg. Environment, Robotics)"
            onChange={handleChange}
            required
            autoComplete="off"
            className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-400 outline-none"
          />

          <input
            name="studentContact"
            placeholder="Student Contact Number"
            onChange={handleChange}
            required
            inputMode="numeric"
            autoComplete="off"
            className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-400 outline-none"
          />

          <input
            name="parentContact"
            placeholder="Parent Contact Number"
            onChange={handleChange}
            required
            inputMode="numeric"
            autoComplete="off"
            className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-400 outline-none"
          />

          {error && (
            <p className="text-red-600 text-sm text-center">{error}</p>
          )}

          <button
            disabled={loading}
            className={`w-full py-3 rounded-xl font-semibold transition ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 text-white"
            }`}
          >
            {loading ? "Submitting..." : "Submit Registration"}
          </button>
        </form>
      </div>
    </section>
  );
}
