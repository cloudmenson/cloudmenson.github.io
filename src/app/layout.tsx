import { I18nProvider } from "./providers/i18nProvider";
import { AuthProvider } from "./providers/AuthProvider";

import { ToastNotifications } from "@/app/components";

import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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
