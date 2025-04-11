"use client";

import { useState } from "react";
import Image from "next/image";
// import Link from "next/link";

import { Google, Signin } from "../assets";
import { useEmailPasswordAuth } from "../hooks/useAuth";
import { useFirebaseLogin } from "../hooks/useAuthWithGoogle";

export default function SignInPage() {
  const { signInWithGoogle } = useFirebaseLogin();
  const { signInWithEmail } = useEmailPasswordAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await signInWithEmail(email, password);
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
        <form className="max-w-[400px] w-[90%] md:w-[70%] p-6 rounded shadow">
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
            type="button"
            onClick={handleSubmit}
            className="w-full bg-blue-600 text-white py-2 px-4 mb-[1.5vw] rounded hover:bg-blue-700 transition"
          >
            Увійти
          </button>

          <button
            type="button"
            onClick={signInWithGoogle}
            className="flex justify-center mx-auto outline outline-offset-2 p-[0.2vw] rounded w-[30px] h-[30px] cursor-pointer"
          >
            <Image
              width={30}
              height={30}
              src={Google}
              alt="Google"
              loading="lazy"
            />
          </button>

          {/* <Link className="underline flex justify-center" href={"/signup"}>
            Already have an account?
          </Link> */}
        </form>
      </div>
    </main>
  );
}
