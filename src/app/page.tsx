"use client";

import { RootModal } from "./components/RootModal";
import { useModalStore } from "./store/modalStore";
import { ExampleModal } from "./components/ExampleModal";
import { FAQ, Course, AboutUs, Benefits, Greetings } from "./components";

export default function Home() {
  const { isOpen, close } = useModalStore();

  return (
    <main className="flex flex-col">
      <Greetings />

      <Benefits />

      <AboutUs />

      <Course />

      <FAQ />

      <RootModal isOpen={isOpen} onClose={close}>
        <ExampleModal />
      </RootModal>
    </main>
  );
}
