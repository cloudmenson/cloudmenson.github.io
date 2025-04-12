"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { Signin, Google } from "@/app/assets";
import { useFirebaseLogin } from "@/app/hooks/useAuthWithGoogle";

export default function SignUpPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signInWithGoogle } = useFirebaseLogin();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Логіка реєстрації:
    console.log("Registering user:", { email, password });
  };

  return (
    <main className="h-screen flex overflow-hidden text-black">
      <div className="relative w-1/2 hidden lg:block">
        <Image
          fill
          src={Signin}
          alt="Crew Helper Signup"
          className="object-cover object-center"
        />
      </div>

      <div className="flex-1 flex items-center justify-center bg-white">
        <form
          onSubmit={handleSubmit}
          className="max-w-[400px] w-[90%] md:w-[70%] p-6 rounded shadow space-y-6 text-center"
        >
          <h1 className="text-2xl font-bold mb-4 text-center">Sign up</h1>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Name</label>

            <input
              required
              type="text"
              value={name}
              placeholder="Ваше ім’я"
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Email</label>

            <input
              required
              type="email"
              value={email}
              placeholder="you@example.com"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          <div className="mb-6">
            <label className="block mb-1 font-medium">Password</label>

            <input
              required
              type="password"
              value={password}
              placeholder="•••••••"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
          >
            Sign up
          </button>

          <div className="text-gray-500 text-sm">or</div>

          <button
            type="button"
            onClick={signInWithGoogle}
            className="flex items-center justify-center gap-2 border border-gray-300 rounded px-4 py-2 hover:bg-gray-100 w-full"
          >
            <Image
              width={20}
              height={20}
              src={Google}
              alt="Google"
              loading="lazy"
            />
            <span>Sign up with Google</span>
          </button>

          <Link className="underline flex justify-center" href="/signin">
            Already have an account? Sign in
          </Link>
        </form>
      </div>
    </main>
  );
}
