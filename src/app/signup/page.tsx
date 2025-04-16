"use client";

import Link from "next/link";
import Image from "next/image";
import { Formik, Form, Field, ErrorMessage } from "formik";

import { Signin, Google } from "@/app/assets";
import { useSignUp } from "@/app/hooks/useSignUp";
import { useFirebaseLogin } from "@/app/hooks/useAuthWithGoogle";

import { registrationSchema } from "../validation";

export default function SignupPage() {
  const { signInWithGoogle } = useFirebaseLogin();
  const { signUpWithEmail } = useSignUp();

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
        <Formik
          initialValues={{ name: "", email: "", password: "" }}
          validationSchema={registrationSchema}
          onSubmit={async (values, { setSubmitting }) => {
            await signUpWithEmail(values.name, values.email, values.password);
            setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <Form className="max-w-[400px] w-[90%] md:w-[70%] p-6 rounded shadow space-y-6 text-center">
              <h1 className="text-2xl font-bold mb-4 text-center">Sign up</h1>

              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block mb-1 font-medium text-start"
                >
                  Name
                </label>
                <Field
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="mt-1 text-red-600 text-sm text-left"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block mb-1 font-medium text-start"
                >
                  Email
                </label>
                <Field
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="mt-1 text-red-600 text-sm text-left"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="block mb-1 font-medium text-start"
                >
                  Password
                </label>
                <Field
                  id="password"
                  name="password"
                  type="password"
                  placeholder="•••••••"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="mt-1 text-red-600 text-sm text-left"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition mb-[10px]"
              >
                {isSubmitting ? "Signing up..." : "Sign up"}
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
                <span>Sign up with Google</span>
              </button>

              <Link href="/signin" className="text-sm block text-gray-600 mt-4">
                Already have an account?
                <span className="ml-[0.5vw] text-blue-600 hover:underline">
                  Sign in
                </span>
              </Link>
            </Form>
          )}
        </Formik>
      </div>
    </main>
  );
}
