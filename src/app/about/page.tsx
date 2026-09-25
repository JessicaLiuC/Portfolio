import type { Metadata } from "next";
import { AboutIntro, Contact, OutsideOfWork } from "@/components/sections";

export const metadata: Metadata = { title: "About" };

export default function About() {
  return (
    <>
      <AboutIntro />
      <OutsideOfWork />
      <Contact />
    </>
  );
}
