import { Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 md:py-32 bg-white relative overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url('/industrial-warehouse-logistics-chemical-storage.jpg')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold mb-3">Hubungi Kami</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Tim kami siap membantu kebutuhan produk kimia Anda. Jangan ragu
            untuk menghubungi.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Link
            href="https://api.whatsapp.com/send?phone=6281234523467"
            className="border rounded-lg p-8 border-gray-300 flex flex-col items-center text-center hover:shadow-xl transition-shadow"
          >
            <div
              className="w-16 h-16 rounded-lg flex items-center justify-center mb-4"
              style={{ backgroundColor: "#E855451a" }}
            >
              <Phone className="w-8 h-8" style={{ color: "#E85545" }} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Telepon</h3>
            <p className="text-gray-600">0812-3452-3467</p>
            <p className="text-gray-600">Hubungi Kami</p>
          </Link> 
          <div className="border rounded-lg p-8 border-gray-300 flex flex-col items-center text-center hover:shadow-xl transition-shadow">
            <div
              className="w-16 h-16 rounded-lg flex items-center justify-center mb-4"
              style={{ backgroundColor: "#A6205A1a" }}
            >
              <MapPin className="w-8 h-8" style={{ color: "#A6205A" }} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Alamat</h3>
            <p className="text-gray-600">
              Jl. Raya Jelidro, Sambikerep, Surabaya, Jawa Timur 60217
            </p>
            <p className="text-gray-600">Indonesia</p>
          </div>
        </div>
      </div>
    </section>
  );
}
