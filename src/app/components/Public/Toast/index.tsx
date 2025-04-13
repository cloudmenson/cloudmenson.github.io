"use client";

import React from "react";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export const notifySuccess = (rawMessage: string) => {
  const sanitizedMessage = rawMessage.replace(/^Firebase:\s*/, "");

  toast.success(sanitizedMessage, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export const notifyError = (rawMessage: string) => {
  const sanitizedMessage = rawMessage.replace(/^Firebase:\s*/, "");

  toast.error(sanitizedMessage, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export const ToastNotifications = () => {
  return <ToastContainer />;
};
