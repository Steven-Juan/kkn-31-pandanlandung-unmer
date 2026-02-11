import assets from "../assets";

const Hero: React.FC = () => {
  return (
    <div className="relative isolate min-h-screen overflow-hidden text-text-invert">
      {/* BACKGROUND SVG */}
      <img
        src={assets.background}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover object-center -z-10 opacity-30 blur-[10px]"
      />

      {/* HERO SECTION */}
      <section className="flex flex-col md:flex-row items-center justify-between mt-20 px-4 md:px-16 lg:px-24 xl:px-32 pb-20 gap-16">
        <div className="text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-secondary text-xs mb-4">
            Desa Pandanlandung, Kec. Wagir, Kab Malang, Jawa Timur
          </div>

          <h1 className="text-5xl md:text-6xl leading-tight font-bold max-w-xl">
            KKN 31 UNMER Pandanlandung
          </h1>

          <p className="text-sm text-muted max-w-lg mt-3">
            Dokumentasi kinerja, kolaborasi tim, dan program pengabdian
            masyarakat yang dijalankan secara terstruktur dan profesional.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center md:justify-start">
            <button className="bg-surface text-text-primary px-7 h-11 rounded-md hover:bg-accent transition">
              Get started
            </button>

            <button className="border border-secondary px-6 h-11 rounded-md hover:bg-white/10 transition">
              Watch After Movie
            </button>
          </div>
        </div>

        <img
          src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/hero-section-showcase-3.png"
          alt="Hero illustration"
          className="max-w-xs sm:max-w-sm lg:max-w-md"
        />
      </section>
    </div>
  );
};

export default Hero;
