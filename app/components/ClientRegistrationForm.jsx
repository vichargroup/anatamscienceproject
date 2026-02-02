"use client";

import dynamic from "next/dynamic";

// 🔥 SSR completely disabled here (ALLOWED in client component)
const RegistrationForm = dynamic(
  () => import("./RegistrationForm"),
  { ssr: false }
);

export default function ClientRegistrationForm() {
  return <RegistrationForm />;
}
