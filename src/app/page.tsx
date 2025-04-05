"use client";

import { RootModal } from "./components/RootModal";
import { useModalStore } from "./store/modalStore";
import { ExampleModal } from "./components/ExampleModal";
import { Benefits, Course, FAQ, Greetings, AboutUs } from "./screens";

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
