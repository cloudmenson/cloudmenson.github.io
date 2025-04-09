"use client";

import React from "react";

import { PrivateHeader } from "../components/Private/PrivateHeader";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <React.Fragment>
      <PrivateHeader />

      <main>{children}</main>
    </React.Fragment>
  );
}
