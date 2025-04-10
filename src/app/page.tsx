"use client";

import React from "react";

import { useModalStore } from "./store/modalStore";
import { RootModal } from "./components/Public/RootModal";
import { ExampleModal } from "./components/Public/ExampleModal";
import {
  FAQ,
  Course,
  Header,
  AboutUs,
  Benefits,
  Greetings,
} from "./components";

export default function Home() {
  const { isOpen, close } = useModalStore();

  return (
    <React.Fragment>
      <Header />

      <div className="flex flex-col">
        <Greetings />

        <Benefits />

        <AboutUs />

        <Course />

        <FAQ />

        <RootModal isOpen={isOpen} onClose={close}>
          <ExampleModal />
        </RootModal>
      </div>

      <footer
        className="
          py-4
          w-full
          text-sm
          bg-footer
          text-center
          text-gray-600
          text-footer-text"
      >
        <p className="text-[1vw]">© {new Date().getFullYear()} Crew Helper</p>
      </footer>
    </React.Fragment>
  );
}
