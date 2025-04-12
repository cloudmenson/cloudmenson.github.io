"use client";

import { useState } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

export default function ResetPasswordPage() {
  const { t } = useTranslation();

  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);

      console.log("Password was sended");
    } catch (err) {
      console.log("Error resetting password:", err);
    }
  };

  return (
    <section className="h-screen flex items-center justify-center text-black bg-white">
      <div className="max-w-md w-full bg-white p-6 rounded shadow">
        <h1 className="text-2xl font-bold mb-4 text-center">
          {t("Reset Password")}
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              {t("Email")}
            </label>

            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition cursor-pointer mb-[30px]"
          >
            {t("Reset Password")}
          </button>

          <Link
            href="/signin"
            className="text-sm underline block text-gray-600 text-center"
          >
            {t("Back to Sign in")}
          </Link>
        </form>
      </div>
    </section>
  );
}
