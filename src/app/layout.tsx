import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chien-Chi Liu - Portfolio",
  description: "Personal portfolio of Chien-Chi Liu - Designer and Developer",
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
