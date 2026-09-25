import localFont from "next/font/local";

export const montserrat = localFont({
  src: [
    { path: "./Montserrat-Variable.ttf", style: "normal" },
    { path: "./Montserrat-Italic-Variable.ttf", style: "italic" },
  ],
  weight: "100 900",
  variable: "--font-montserrat",
  display: "swap",
});
