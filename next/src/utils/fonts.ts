import { Plus_Jakarta_Sans, Lato } from "next/font/google";
import localFont from "next/font/local";

export const cityStreetwear = localFont({
  src: "../../public/fonts/city-streetwaer.ttf",
  weight: "400",
  variable: "--font-city-streetwear",
});

export const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plus-jakarta-sans",
});

export const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
});
