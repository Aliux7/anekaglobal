"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 lg:pt-10 px-3 sm:px-5 xl:px-0"
    >
      <div className="absolute inset-0 bg-linear-to-br from-white via-gray-50 to-gray-100">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-linear-to-br from-[#A6205A]/20 to-[#D41E84]/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-linear-to-br from-[#D41E84]/20 to-[#E85545]/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 right-0 w-80 h-80 bg-linear-to-br from-[#E85545]/15 to-[#A6205A]/15 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="inline-flex items-center gap-2 bg-[#D41E84]/10 text-[#A6205A] px-4 py-2 rounded-full">
              <span className="w-2 h-2 bg-[#D41E84] rounded-full"></span>
              <span className="text-sm font-semibold">
                Terdepan dalam Industri Kimia
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-6xl lg:text-7xl font-serif font-bold leading-tight mb-6 text-balance">
              <span className="bg-linear-to-r from-[#A6205A] via-[#D41E84] to-[#E85545] bg-clip-text text-transparent">
                Supplier
              </span>{" "}
              Bahan Kimia
            </h1>

            {/* Subheading */}
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-xl">
              Kami menyediakan produk kimia berkualitas tinggi seperti Texapon
              SLES, Metil Ester Sulfonat (MES), dan Methanol.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="https://api.whatsapp.com/send?phone=6285168618070"
                className="px-8 py-4 bg-linear-to-r from-[#A6205A] to-[#D41E84] text-white font-semibold rounded-lg hover:shadow-2xl transition-all hover:-translate-y-1 flex items-center gap-2"
              >
                Hubungi Kami
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
              <Link
                href="#product"
                className="px-8 py-4 border-2 border-[#A6205A] text-[#A6205A] font-semibold rounded-lg hover:bg-[#A6205A]/5 transition-all"
              >
                Lihat Produk
              </Link>
            </div>
          </div>

          <div
            className={`relative transform transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative z-10 flex flex-col justify-center items-end">
              <div className="absolute -inset-4 bg-linear-to-br from-[#A6205A]/20 via-[#D41E84]/20 to-[#E85545]/20 rounded-2xl blur-2xl"></div>

              <div className="relative w-full h-[70vh] bg-linear-to-br from-[#A6205A] to-[#D41E84] rounded-xl shadow-2xl overflow-hidden">
                <img
                  src="/assets/4.jpg"
                  alt="Laboratorium Kimia Modern"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#A6205A]/20 to-transparent"></div>
              </div>

              <div className="absolute grid grid-cols-3 gap-6 py-5 pt-15 text-center bottom-0 bg-linear-to-t w-full rounded-xl from-white/70 via-white/50 to-transparent">
                <div>
                  <div className="text-3xl font-bold text-[#A6205A]">5+</div>
                  <p className="text-sm text-gray-600">Tahun Pengalaman</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#D41E84]">100+</div>
                  <p className="text-sm text-gray-600">Klien Terpercaya</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#E85545]">100%</div>
                  <p className="text-sm text-gray-600">Kualitas Terjamin</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-linear-to-br from-[#E85545]/30 to-[#D41E84]/30 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <svg
          className="w-6 h-6 text-[#A6205A]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
