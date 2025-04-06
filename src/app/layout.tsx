import type { Metadata } from "next";

import { Header } from "@/app/components";

import { cn } from "./utils/tailwind-merge";
import { I18nProvider } from "./providers/i18nProvider";

import "./globals.scss";

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
        <I18nProvider>
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
            <p className="text-[1vw]">
              © {new Date().getFullYear()} Crew Helper
            </p>
          </footer>
        </I18nProvider>
      </body>
    </html>
  );
}
