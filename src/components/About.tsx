import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="relative py-24 px-6 sm:px-12 lg:px-24 overflow-hidden"
    >
      <div className="max-w-8xl mx-auto space-y-6">
        {/* ================= INTRO ================= */}
        <div className="text-center space-y-6">
          <h2 className="text-primary dark:text-text-invert text-3xl sm:text-4xl md:text-5xl font-semibold">
            Tentang Kami
          </h2>

          <p className="text-primary dark:text-text-invert text-sm sm:text-base md:text-lg max-w-6xl mx-auto leading-relaxed">
            KKN 31 Universitas Merdeka Malang merupakan kelompok mahasiswa yang
            melaksanakan program pengabdian masyarakat di Desa Pandanlandung,
            Kecamatan Wagir, Kabupaten Malang. Melalui tema konservasi sumber
            air, kami berkomitmen menjaga keberlanjutan lingkungan melalui
            kolaborasi, pemberdayaan masyarakat, dan aksi nyata yang berdampak
            jangka panjang.
          </p>
        </div>

        {/* ================= VISI MISI CARD ================= */}
        <div className="grid md:grid-cols-2 gap-4">
          {/* ===== VISI CARD ===== */}
          <div
            className="bg-accent/80 dark:bg-accent/20 
               text-primary dark:text-text-invert 
               backdrop-blur-xl rounded-3xl 
               shadow-xl p-6 sm:p-8 space-y-6"
          >
            <h3 className="text-lg sm:text-xl md:text-2xl font-medium tracking-wide border-b pb-3 text-center">
              Visi
            </h3>

            <p className="leading-relaxed text-sm sm:text-base md:text-lg">
              Terwujudnya mata air desa yang lestari, bersih, dan berkelanjutan
              melalui peningkatan peran serta partisipasi aktif masyarakat dalam
              menjaga lingkungan.
            </p>
          </div>

          {/* ===== MISI CARD ===== */}
          <div
            className="bg-accent/80 dark:bg-accent/20 
               text-primary dark:text-text-invert 
               backdrop-blur-xl rounded-3xl 
               shadow-xl py-4 px-6 sm:py-6 sm:px-8 space-y-6"
          >
            <h3 className="text-lg sm:text-xl md:text-2xl font-medium tracking-wide border-b pb-3 text-center">
              Misi
            </h3>

            <ul className="space-y-4">
              {[
                "Melakukan konservasi mata air melalui pembersihan dan penataan lingkungan.",
                "Menguatkan peran masyarakat dalam menjaga dan melestarikan mata air.",
                "Mendorong partisipasi aktif masyarakat dalam perlindungan sumber air.",
                "Mendukung pemanfaatan air desa secara bijak dan berkelanjutan.",
                "Menumbuhkan budaya peduli lingkungan demi keberlanjutan generasi mendatang.",
              ].map((item, index) => (
                <li key={index} className="flex gap-4">
                  <span
                    className="flex items-center justify-center 
                                min-w-6 h-6 sm:min-w-7 sm:h-7 
                                rounded-full bg-primary dark:bg-accent 
                                text-white dark:text-primary 
                                text-xs sm:text-sm font-semibold"
                  >
                    {index + 1}
                  </span>
                  <p className="leading-relaxed text-sm sm:text-base md:text-lg">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
