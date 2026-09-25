import type { Metadata } from "next";
import { Footer, Nav } from "@/components/layout";
import { site } from "@/content/site";
import { montserrat } from "@/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: `${site.name} - Portfolio`, template: `%s · ${site.name}` },
  description: `Personal portfolio of ${site.name} - Designer and Developer`,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${montserrat.variable} scroll-smooth`}>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
