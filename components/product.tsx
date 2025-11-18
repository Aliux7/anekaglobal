export default function Products() {
  const products = [
    {
      name: "Texapon / SLES Emal 270N",
      code: "TEXN-68",
      description:
        "SLES Texapon Emal 270N (Made in KAO) adalah surfaktan anionik dengan kemampuan tinggi dalam menghasilkan busa, mengangkat lemak, serta mengemulsi kotoran. Umumnya digunakan sebagai bahan baku utama dalam produk pembersih.",
      specifications: [
        "Konsentrasi Aktif: ± 70%",
        "pH: 6.5 – 7.5",
        "Bentuk: Cairan kental putih kekuningan",
        "Sifat: Tinggi menghasilkan busa dan mudah larut",
        "Brand: KAO (Emal 270N)",
      ],
      functions: [
        "Sebagai surfaktan untuk mengangkat lemak dan kotoran",
        "Pembentuk busa utama pada produk pembersih",
        "Agen emulsifier untuk menyatukan minyak dan air",
        "Bahan baku detergent",
        "Bahan baku shampoo",
        "Bahan baku sabun cair",
        "Bahan baku cairan pencuci piring",
        "Bahan baku pembersih lantai dan mesin",
      ],
      applications:
        "Detergent, Shampoo, Sabun Cair, Pencuci Piring, Pembersih Lantai dan Industri",
      image: "/assets/texapon.jpg",
    },

    {
      name: "Methanol",
      code: "MEOH-99",
      description:
        "Methanol (CH₃OH) adalah alkohol paling sederhana yang berbentuk cairan bening, mudah menguap, mudah terbakar, dan banyak digunakan dalam industri sebagai pelarut, bahan bakar, serta bahan baku kimia.",
      specifications: [
        "Kemurnian: 99.8%",
        "Densitas: 0.791 g/cm³",
        "Titik Didih: 64.7°C",
        "Stabilitas: Excellent",
      ],
      functions: [
        "Sebagai pelarut industri untuk resin, tinta, dan bahan kimia",
        "Bahan baku kimia seperti formaldehida dan asam asetat",
        "Bahan bakar alternatif dan aditif",
        "Antifreeze (antibeku) dalam sistem pendingin",
        "Bahan baku produksi biodiesel",
        "Digunakan dalam laboratorium sebagai reagen",
      ],
      applications:
        "Bahan Baku Kimia, Pelarut, Industri Farmasi, Biodiesel, Antifreeze",
      image: "/assets/methanol.jpg",
    },
  ];

  return (
    <section id="product" className="py-20 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold mb-3">Produk Unggulan</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Dua produk pilihan dengan kualitas premium untuk memenuhi standar
            industri tertinggi.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {products.map((product, index) => (
            <div
              key={index}
              className="p-8 hover:shadow-lg rounded-lg border-l-4 overflow-hidden"
              style={{ borderLeftColor: "#D41E84" }}
            >
              <div className="mb-6 overflow-hidden rounded-lg h-64">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="mb-4">
                <span
                  className="text-sm font-mono"
                  style={{ color: "#D41E84" }}
                >
                  {product.code}
                </span>
                <h3 className="text-3xl font-serif font-bold text-gray-900 mt-2 mb-3">
                  {product.name}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {product.description}
                </p>
              </div>

              <div className="mb-6">
                <h4 className="font-bold text-gray-900 mb-3">Fungsi:</h4>
                <ul className="space-y-2">
                  {product.functions.map((spec, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-gray-600 flex items-start"
                    >
                      <span className="mr-2" style={{ color: "#E85545" }}>
                        •
                      </span>
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="font-bold text-gray-900 mb-3">Spesifikasi:</h4>
                <ul className="space-y-2">
                  {product.specifications.map((spec, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-gray-600 flex items-start"
                    >
                      <span className="mr-2" style={{ color: "#E85545" }}>
                        •
                      </span>
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 mb-2">Aplikasi:</h4>
                <p className="text-sm text-gray-600">{product.applications}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
