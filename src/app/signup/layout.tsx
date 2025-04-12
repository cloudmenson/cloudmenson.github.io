"use client";

import { Header } from "@/app/components";

export default function SignInLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <Header />

      <main className="flex-1 overflow-hidden">{children}</main>
    </div>
  );
}
