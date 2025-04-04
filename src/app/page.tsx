"use client";

import { Benefits, Course, Greetings } from "./screens";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Greetings />

      <Benefits />

      <Course />
    </main>
  );
}
