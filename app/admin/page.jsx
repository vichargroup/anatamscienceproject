"use client";

import { useEffect, useState } from "react";

export default function AdminPage() {
  const [students, setStudents] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const key = prompt("🔐 Enter Admin Key");

    fetch("/api/admin/students", {
      headers: {
        "x-admin-key": key,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.success) {
          setError("Unauthorized Access");
        } else {
          setStudents(data.students);
        }
      })
      .catch(() => setError("Server Error"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center text-xl">
        Loading dashboard...
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-screen flex items-center justify-center text-red-600 text-xl">
        ❌ {error}
      </div>
    );
  }

  const filtered = students.filter(
    (s) =>
      s.studentName.toLowerCase().includes(search.toLowerCase()) ||
      s.schoolName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-10">
      {/* ================= HEADER ================= */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900">
            📋 Admin Dashboard
          </h1>
          <p className="text-gray-500">
            Anantam Science Exhibition – Registrations
          </p>
        </div>

        <div className="mt-4 md:mt-0 bg-white px-6 py-3 rounded-xl shadow">
          <span className="text-sm text-gray-500">Total Registrations</span>
          <p className="text-2xl font-bold text-blue-600">
            {students.length}
          </p>
        </div>
      </div>

      {/* ================= SEARCH ================= */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="🔍 Search by student or school name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/2 p-3 rounded-xl border bg-white shadow focus:ring-2 focus:ring-blue-400 outline-none"
        />
      </div>

      {/* ================= TABLE ================= */}
      <div className="bg-white rounded-2xl shadow-xl overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-slate-100 text-gray-700">
            <tr>
              <th className="p-4 text-left">Student</th>
              <th className="p-4 text-left">School</th>
              <th className="p-4">Class</th>
              <th className="p-4 text-left">Project Area</th>
              <th className="p-4">Student Contact</th>
              <th className="p-4">Parent Contact</th>
            </tr>
          </thead>

          <tbody>
            {filtered.length === 0 && (
              <tr>
                <td
                  colSpan="6"
                  className="p-6 text-center text-gray-500"
                >
                  No matching records found
                </td>
              </tr>
            )}

            {filtered.map((s, i) => (
              <tr
                key={s._id}
                className={`border-t hover:bg-blue-50 transition ${
                  i % 2 === 0 ? "bg-white" : "bg-slate-50"
                }`}
              >
                <td className="p-4 font-medium text-gray-900">
                  {s.studentName}
                </td>
                <td className="p-4">{s.schoolName}</td>
                <td className="p-4 text-center font-semibold">
                  {s.academicClass}
                </td>
                <td className="p-4">{s.projectArea}</td>
                <td className="p-4 text-center">
                  {s.studentContact}
                </td>
                <td className="p-4 text-center">
                  {s.parentContact}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ================= FOOT NOTE ================= */}
      <p className="text-xs text-gray-400 mt-6 text-center">
        © Anantam Science Exhibition · Admin Panel
      </p>
    </div>
  );
}
