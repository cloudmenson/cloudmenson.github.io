import { I18nProvider } from "./providers/i18nProvider";
import { AuthProvider } from "./providers/AuthProvider";

import { ToastNotifications } from "@/app/components";

import { freckle, poppins, bungee, pacifico, montserrat } from "./fonts";

import "./global.css";

export const metadata = {
  title: "Crew Helper",
  description: "",
  // icons: {
  //   icon: "/favicon.ico",
  // },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${montserrat.variable} ${freckle.variable} ${pacifico.variable} ${bungee.variable} `}
    >
      <body>
        <I18nProvider>
          <AuthProvider>
            <main>{children}</main>

            <ToastNotifications />
          </AuthProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
