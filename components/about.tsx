export default function About() {
  const features = [
    {
      number: "01",
      title: "Siap Membantu",
      description:
        "Kami menyediakan konsultasi gratis untuk membantu Anda menemukan solusi terbaik sesuai kebutuhan Anda.",
      icon: "✓",
    },
    {
      number: "02",
      title: "Komitmen",
      description:
        "Bagi kami, kepercayaan pelanggan adalah hal utama. Itulah sebabnya kami selalu memastikan pengiriman dilakukan tepat waktu.",
      icon: "→",
    },
    {
      number: "03",
      title: "Kepuasan",
      description:
        "Kami senantiasa menjaga kualitas layanan demi memastikan kepuasan pelanggan tetap menjadi prioritas.",
      icon: "★",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 md:py-32 bg-transparent"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold mb-3">Tentang Kami</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            PT Aneka Global Industri telah berdiri sejak 2020 hingga saat ini.
            Kami merupakan perusahaan supplier dan distributor yang menyediakan
            berbagai jenis bahan kimia, seperti Texapon SLES, Ethanol 70%,
            Ethanol 96%, Methanol, dan lainnya.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="/assets/about.jpg"
              alt="Pabrik Aneka Global"
              className="rounded-lg shadow-lg w-full h-[400] object-cover"
            />
          </div>
          <div>
            <h3 className="text-3xl font-serif font-bold mb-4 text-gray-900">
              Pengalaman Selama 5 Tahun
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Sejak berdiri pada tahun 2020, Aneka Global telah tumbuh pesat
              sebagai salah satu penyedia solusi kimia terpercaya di Indonesia.
              Kami berkomitmen untuk menghadirkan produk berkualitas tinggi
              dengan pelayanan yang profesional dan harga yang kompetitif.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Dengan fasilitas produksi yang modern dan tim yang berpengalaman,
              kami terus berinovasi untuk menjawab kebutuhan industri yang terus
              berkembang.
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <div
                  className="w-2 h-2 rounded-full mr-3"
                  style={{ backgroundColor: "#D41E84" }}
                ></div>
                <span className="text-gray-700">Bersertifikasi</span>
              </div>
              <div className="flex items-center">
                <div
                  className="w-2 h-2 rounded-full mr-3"
                  style={{ backgroundColor: "#D41E84" }}
                ></div>
                <span className="text-gray-700">
                  Beroperasi di 1 cabang utama di Indonesia
                </span>
              </div>
              <div className="flex items-center">
                <div
                  className="w-2 h-2 rounded-full mr-3"
                  style={{ backgroundColor: "#D41E84" }}
                ></div>
                <span className="text-gray-700">Ratusan pelanggan puas</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="product-card">
              <div
                className="text-5xl font-serif font-bold mb-4"
                style={{ color: "#E85545" }}
              >
                {feature.number}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
