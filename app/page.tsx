"use client";
import About from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Gallery from "@/components/gallery";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Products from "@/components/product";
import Visi from "@/components/visi";
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
    <main className="min-h-screen bg-linear-to-br from-white via-gray-50 to-gray-100">
      <Navbar />
      <Hero />
      <About />
      <Visi />
      <Products />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}
