"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed w-full h-22 backdrop-blur-lg flex justify-center items-center py-4 z-50 px-3 sm:px-5 top-0">
      <nav className="h-full w-full max-w-7xl flex justify-between items-center">
        <a href="/" className="h-full flex justify-center items-center gap-2">
          <img src="/assets/logo.webp" className="h-10 sm:h-full w-auto" />
          <h1 className="text-xl sm:text-2xl sm:leading-6 font-semibold tracking-wider text-gray-800">
            Aneka Global
          </h1>
        </a>
        <div className="flex justify-center items-center">
          <ul
            id="menu"
            className="hidden bg-white/90 text-xl lg:text-base lg:bg-transparent hover:text-gray-500 lg:flex fixed top-22 w-full left-0 lg:top-auto lg:relative lg:w-fit flex-col lg:flex-row justify-between items-center lg:gap-10 transition-all duration-300 ease-in-out"
          >
            <Link
              href="#"
              className="border-t w-full text-center py-5 lg:border-none lg:w-auto lg:py-0 hover:text-black"
            >
              Beranda
            </Link>
            <Link
              href="#about"
              className="border-t w-full text-center py-5 lg:border-none lg:w-auto lg:py-0 hover:text-black"
            >
              Tentang Kami
            </Link>
            <Link
              href="#product"
              className="border-y w-full text-center py-5 lg:border-none lg:w-auto lg:py-0 hover:text-black"
            >
              Produk
            </Link>
          </ul>
          <a
            className="sm:ml-10 mr-5 lg:mr-0"
            href="https://api.whatsapp.com/send?phone=6281234523467"
          >
            <li className="flex justify-center items-center sm:gap-3 border-y w-full  text-center py-2 lg:border-none lg:w-auto bg-linear-to-br hover:bg-linear-to-tl cursor-pointer transition-all duration-1000 ease-in-out from-[#971B77] to-[#E45340] px-5 sm:px-5 text-white rounded-md">
              <img src="/assets/call.png" className="w-4 h-4" />
              <span className="text-0 hidden sm:block sm:text-base">Hubungi Kami</span>
            </li>
          </a>
          <div
            id="hamburger"
            className="lg:hidden w-7 sm:w-8 h-full flex flex-col justify-center items-end gap-1.5"
          >
            <span className="h-[0.17rem] sm:h-1 w-full bg-[#971B77] rounded-md"></span>
            <span className="h-[0.17rem] sm:h-1 w-3/4 bg-[#E45340] rounded-md"></span>
            <span className="h-[0.17rem] sm:h-1 w-full bg-[#971B77] rounded-md"></span>
          </div>
        </div>
      </nav>
    </header>
  );
}
