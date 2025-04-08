"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export const ScrollTo = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  useEffect(() => {
    //windows undefined
    window.scrollTo(0, 0);
  }, [pathname]);

  return <>{children}</>;
};
