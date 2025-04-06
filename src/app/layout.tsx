import type { Metadata } from "next";

import { Header } from "@/app/components";

import { cn } from "./utils/tailwind-merge";
import { I18nProvider } from "./providers/i18nProvider";

import "./globals.scss";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const isUk = params.locale === "uk";

  return {
    title: isUk
      ? "Crew Helper - Курс бортпровідника | Онлайн навчання"
      : "Crew Helper - Flight attendant course | Online Training",
    description: isUk
      ? "Пройди онлайн-курс і отримай ментора, щоб стати бортпровідником."
      : "Take an online course and get a mentor to become a flight attendant.",
  };
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={params.locale}>
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
