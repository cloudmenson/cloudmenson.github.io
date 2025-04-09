"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

import { useAuthStore } from "../store/modalStore";
import { PrivateHeader } from "../components/Private/PrivateHeader";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const user = useAuthStore((state) => state.user);

  useEffect(() => {
    if (!user) {
      router.replace("/");
    }
  }, [user, router]);

  if (!user) return null;

  return (
    <React.Fragment>
      <PrivateHeader />
      <main>{children}</main>
    </React.Fragment>
  );
}
