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
          bg-footer
          text-center
          text-white"
      >
        <p className="text-[3.2vw] sm:text-[2.5vw] md:text-[2vw] lg:text-[2vw] xl:text-[1.5vw] 2xl:text-[1vw]">
          © {new Date().getFullYear()} Crew Helper
        </p>
      </footer>
    </React.Fragment>
  );
}
