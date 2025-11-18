"use client";

import { useState, useEffect } from "react";

export default function Visi() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="visi-misi"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 lg:pt-10 px-3 sm:px-5 xl:px-0"
    >
      {/* Background Soft Gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-white via-gray-50 to-gray-100">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-linear-to-br from-[#A6205A]/20 to-[#D41E84]/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-linear-to-br from-[#D41E84]/20 to-[#E85545]/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* VISI */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <h2 className="text-5xl font-serif font-bold text-[#A6205A] mb-6">
              Visi Kami
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Menjadi mitra distribusi bahan kimia yang unggul dan terpercaya di
              tingkat nasional maupun internasional, dengan komitmen pada
              inovasi berkelanjutan dan keberlanjutan industri.
            </p>
          </div>

          {/* MISI */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <h2 className="text-5xl font-serif font-bold text-[#D41E84] mb-6">
              Misi Kami
            </h2>
            <ul className="space-y-4 text-gray-700 text-lg leading-relaxed">
              <li>• Menyediakan produk bahan kimia berkualitas dengan layanan yang terpercaya.</li>
              <li>• Menjaga kelancaran rantai pasokan melalui kemitraan dengan pemasok terpilih.</li>
              <li>• Mendorong praktik bisnis yang berkelanjutan dan ramah lingkungan.</li>
              <li>• Meningkatkan kompetensi tim untuk memberikan dukungan terbaik kepada pelanggan.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
