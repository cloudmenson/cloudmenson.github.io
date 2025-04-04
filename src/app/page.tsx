"use client";

import { ExampleModal } from "./components/ExampleModal";
import { RootModal } from "./components/RootModal";
import { Benefits, Course, FAQ, Greetings, AboutUs } from "./screens";
import { useModalStore } from "./store/modalStore";

export default function Home() {
  const { isOpen, close } = useModalStore();

  return (
    <main className="flex flex-col">
      <Greetings />

      <Benefits />

      <Course />

      <AboutUs />

      <FAQ />

      <RootModal isOpen={isOpen} onClose={close}>
        <ExampleModal />
      </RootModal>
    </main>
  );
}
