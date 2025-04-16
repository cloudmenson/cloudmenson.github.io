"use client";

import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { Formik, Form, Field, ErrorMessage } from "formik";

import { Google, Signin } from "@/app/assets";
import { useAuth } from "@/app/hooks/useAuth";
import { useFirebaseLogin } from "@/app/hooks/useAuthWithGoogle";

import { loginSchema } from "../validation";

export default function SigninPage() {
  const { signInWithEmail } = useAuth();
  const { signInWithGoogle } = useFirebaseLogin();

  const { t } = useTranslation();

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
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={loginSchema}
          onSubmit={async (values, { setSubmitting }) => {
            await signInWithEmail(values.email, values.password);
            setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <Form className="max-w-[400px] w-[90%] md:w-[70%] p-6 rounded shadow space-y-6 text-center">
              <h1 className="text-2xl font-bold mb-4">Sign in</h1>

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
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
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
                  placeholder="••••••••••••••"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
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
                className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition mb-[10px] cursor-pointer"
              >
                {isSubmitting ? "Signing in..." : "Sign in"}
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
                className="text-sm text-blue-500 hover:underline block text-end cursor-pointer"
              >
                Forgot your password?
              </Link>

              <Link
                className="block text-sm text-gray-600 mt-4 cursor-pointer"
                href="/signup"
              >
                {t("Don't have an account?")}
              </Link>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
}
