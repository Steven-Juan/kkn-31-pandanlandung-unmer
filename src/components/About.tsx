import Title from "./Title";

const About = () => {
  return (
    <section
      id="about"
      className="relative py-24 px-6 sm:px-12 lg:px-24 overflow-hidden"
    >
      <div className="max-w-8xl mx-auto space-y-10">
        <Title
          title="Tentang Kami"
          desc="KKN 31 Universitas Merdeka Malang merupakan kelompok mahasiswa yang melaksanakan program pengabdian masyarakat di Desa Pandanlandung, Kecamatan Wagir, Kabupaten Malang. Melalui tema konservasi sumber air, kami berkomitmen menjaga keberlanjutan lingkungan melalui kolaborasi, pemberdayaan masyarakat, dan aksi nyata yang berdampak jangka panjang."
        />

        {/* ================= CARD GRID ================= */}
        <div className="grid md:grid-cols-2 gap-6 items-stretch">
          {/* ===== VISI CARD ===== */}
          <div className="relative group rounded-3xl p-0.5 h-full">
            {/* BORDER EFFECT */}
            <div
              className="absolute inset-0 rounded-3xl 
                        opacity-0 group-hover:opacity-50 
                        transition duration-500
                        bg-linear-to-r from-primary/50 via-accent/50 to-primary/50"
            />

            {/* INNER CARD */}
            <div
              className="relative h-full rounded-[22px]
                        bg-accent/80 dark:bg-accent/20
                        text-primary dark:text-text-invert
                        backdrop-blur-xl shadow-xl
                        p-6 sm:p-8 space-y-6"
            >
              <h3 className="text-lg sm:text-xl md:text-2xl font-medium tracking-wide border-b pb-3 text-center">
                Visi
              </h3>

              <p className="leading-relaxed text-sm sm:text-base md:text-lg">
                Terwujudnya mata air desa yang lestari, bersih, dan
                berkelanjutan melalui peningkatan peran serta partisipasi aktif
                masyarakat dalam menjaga lingkungan.
              </p>
            </div>
          </div>

          {/* ===== MISI CARD ===== */}
          <div className="relative group rounded-3xl p-0.5 h-full">
            {/* BORDER EFFECT */}
            <div
              className="absolute inset-0 rounded-3xl 
                        opacity-0 group-hover:opacity-50 
                        transition duration-500
                        bg-linear-to-r from-primary/50 via-accent/50 to-primary/50"
            />

            {/* INNER CARD */}
            <div
              className="relative h-full rounded-[22px]
                        bg-accent/80 dark:bg-accent/20
                        text-primary dark:text-text-invert
                        backdrop-blur-xl shadow-xl
                        py-4 px-6 sm:py-6 sm:px-8 space-y-6"
            >
              <h3 className="text-lg sm:text-xl md:text-2xl font-medium tracking-wide border-b pb-3 text-center">
                Misi
              </h3>

              <ul className="space-y-3">
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
      </div>
    </section>
  );
};

export default About;
