"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";

import { Google, Signin } from "@/app/assets";
import { useAuth } from "@/app/hooks/useAuth";
import { useFirebaseLogin } from "@/app/hooks/useAuthWithGoogle";

export default function SigninPage() {
  const { signInWithEmail } = useAuth();
  const { signInWithGoogle } = useFirebaseLogin();

  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await signInWithEmail(email, password);
  };

  return (
    <section className="h-screen flex overflow-hidden text-black">
      <div className="relative w-1/2 hidden lg:block">
        <Image
          fill
          src={Signin}
          alt="Crew Helper"
          className="object-cover object-center"
        />
      </div>

      <div className="flex-1 flex items-center justify-center bg-white">
        <form className="max-w-[400px] w-[90%] md:w-[70%] p-6 rounded shadow space-y-6 text-center">
          <h1 className="text-2xl font-bold mb-4">Sign in</h1>

          <div className="mb-4">
            <label className="block mb-1 font-medium text-start">Email</label>

            <input
              required
              type="email"
              value={email}
              placeholder="you@example.com"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>

          <div className="mb-6">
            <label className="block mb-1 font-medium text-start">
              Password
            </label>

            <input
              required
              type="password"
              value={password}
              placeholder="••••••••••••••"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>

          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition cursor-pointer mb-[10px]"
          >
            Sign in
          </button>

          <p className="text-gray-500 text-sm mb-[10px]">or</p>

          <button
            type="button"
            onClick={signInWithGoogle}
            className="flex items-center justify-center gap-2 border border-gray-300 rounded px-4 py-2 hover:bg-gray-100 w-full cursor-pointer"
          >
            <Image
              width={20}
              height={20}
              src={Google}
              alt="Google"
              loading="lazy"
            />
            <span>Sign in with Google</span>
          </button>

          <Link
            href="/reset-password"
            className="text-sm text-blue-500 hover:underline block text-end"
          >
            Forgot your password?
          </Link>

          <Link
            className="underline block text-sm text-gray-600 mt-4"
            href="/signup"
          >
            {t("Don't have an account?")}
          </Link>
        </form>
      </div>
    </section>
  );
}
