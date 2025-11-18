"use client"
import About from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Products from "@/components/product";
import LocomotiveScroll from "locomotive-scroll";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    let locomotiveScroll: LocomotiveScroll;

    if (typeof window !== "undefined") {
      import("locomotive-scroll").then((LocomotiveScrollModule) => {
        locomotiveScroll = new LocomotiveScrollModule.default();
      });
    }

    return () => {
      locomotiveScroll?.destroy();
    };
  }, []);

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Contact />
      <Footer />
    </main>
  );
}
