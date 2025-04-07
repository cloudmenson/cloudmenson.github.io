"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { Signin } from "../assets";
import Link from "next/link";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // ...
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // ... логіка
    router.push("/userpage");
  };

  return (
    <main className="min-h-screen flex overflow-hidden text-black">
      <div className="relative w-1/2 hidden md:block">
        <Image
          fill
          src={Signin}
          alt="Crew Helper"
          className="object-cover object-center"
        />
      </div>

      <div className="flex-1 flex items-center justify-center bg-white">
        <form
          onSubmit={handleSubmit}
          className="max-w-[400px] w-[90%] md:w-[70%] p-6 rounded shadow"
        >
          <h1 className="text-2xl font-bold mb-4 text-center">Вхід</h1>
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
            <label className="block mb-1 font-medium">Пароль</label>

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
            className="w-full bg-blue-600 text-white py-2 px-4 mb-[1.5vw] rounded hover:bg-blue-700 transition"
          >
            Увійти
          </button>

          <Link className="underline flex justify-center" href={"/signup"}>
            Already have an account?
          </Link>
        </form>
      </div>
    </main>
  );
}
