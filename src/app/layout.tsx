import type { Metadata } from "next";
import { montserrat } from "@/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chien-Chi Liu - Portfolio",
  description: "Personal portfolio of Chien-Chi Liu - Designer and Developer",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body>{children}</body>
    </html>
  );
}
