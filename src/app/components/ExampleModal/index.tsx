import { useEffect, useState } from "react";
import * as yup from "yup";
import { useFormik } from "formik";

const validationSchema = yup.object({
  name: yup.string().required("Введіть імʼя. Приклад: Daniel"),
  email: yup
    .string()
    .email("Некоректний email")
    .required("Введіть email. Приклад: daniel@gmail.com"),
});

export const ExampleModal = () => {
  const [step, setStep] = useState(1);

  useEffect(() => {
    const savedStep = localStorage.getItem("modal-step");
    
    if (savedStep) {
      setStep(Number(savedStep));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("modal-step", String(step));
  }, [step]);

  const formik = useFormik({
    initialValues: { name: "", email: "" },
    validationSchema,
    onSubmit: () => {
      setStep(step + 1);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-6">
      <h2 className="text-2xl font-bold mb-[1vw]">
        {step === 1 ? "Залиште заявку" : "Перевірте дані перед оплатою"}
      </h2>

      {step === 1 && (
        <>
          <div>
            <label className="block mb-2 text-sm font-medium">Імʼя</label>

            <input
              name="name"
              type="text"
              placeholder="Введіть ваше імʼя"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
            {formik.touched.name && formik.errors.name && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.name}</p>
            )}
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">Email</label>

            <input
              name="email"
              type="text"
              placeholder="Введіть ваш Email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
            )}
          </div>
        </>
      )}

      {step === 2 && (
        <>
          <div className="flex gap-[1vw] items-center">
            <label className="block text-sm font-medium">Імʼя:</label>

            {formik.values.name}
          </div>

          <div className="flex gap-[1vw] items-center">
            <label className="block text-sm font-medium">Email:</label>

            {formik.values.email}
          </div>
        </>
      )}

      <div className="flex justify-between mt-6">
        {step > 1 ? (
          <button
            type="button"
            onClick={() => setStep((prev) => prev - 1)}
            className="text-sm text-gray-600 hover:underline"
          >
            Назад
          </button>
        ) : (
          <div />
        )}

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          {step === 1 ? "Next" : "Завершити"}
        </button>
      </div>
    </form>
  );
};
