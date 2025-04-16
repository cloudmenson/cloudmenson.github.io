import {
  Poppins,
  Pacifico,
  Bungee_Spice,
  Freckle_Face,
  Montserrat,
} from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const freckle = Freckle_Face({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-freckle",
  display: "swap",
});

export const bungee = Bungee_Spice({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bungee",
  display: "swap",
});

export const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pacifico",
  display: "swap",
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});
