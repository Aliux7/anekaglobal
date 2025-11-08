export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="text-white border-t border-gray-200"
      style={{ backgroundColor: "#A6205A" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-end">
          <div>
            <h3 className="font-serif text-xl font-bold mb-4">Aneka Global</h3>
            <p className="text-white/70 text-sm">
              Penyedia solusi kimia industri berkualitas tinggi untuk Indonesia.
            </p>
          </div>

          <div className="text-end text-sm text-white/60 ">
            <p>&copy; {currentYear} Aneka Global. Hak cipta dilindungi.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
