"use client";

import { Benefits, Course, FAQ, Greetings } from "./screens";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Greetings />

      <Benefits />

      <Course />

      <FAQ />
    </main>
  );
}
