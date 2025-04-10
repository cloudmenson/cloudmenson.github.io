import type { Metadata } from "next";

import { ScrollTo } from "@/app/components";

import { I18nProvider } from "./providers/i18nProvider";
import { AuthProvider } from "./providers/AuthProvider";

import "./globals.css";

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
          <AuthProvider>
            <ScrollTo>
              <main>{children}</main>
            </ScrollTo>
          </AuthProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
