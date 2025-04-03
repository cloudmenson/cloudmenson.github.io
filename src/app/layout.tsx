import type { Metadata } from "next";

import { Header } from "@/app/components";

import "./globals.css";
import { cn } from "./utils/tailwind-merge";

export const metadata: Metadata = {
  title: "Crew Helper",
  description: "Отримай ментора та дізнайся про професію бортпровідника",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk">
      <body>
        <Header />

        <main className="">{children}</main>

        <footer
          className={cn(
            "py-4 ",
            "w-full",
            "text-sm",
            "bg-footer",
            "text-center",
            "text-gray-600",
            "text-footer-text"
          )}
        >
          © {new Date().getFullYear()} Crew Helper. Всі права захищено.
        </footer>
      </body>
    </html>
  );
}
