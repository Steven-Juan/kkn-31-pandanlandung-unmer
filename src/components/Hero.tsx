import { useState } from "react";
import assets from "../assets";

const Hero: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const navItems: string[] = ["Home", "Products", "Stories", "Pricing"];

  return (
    <div className="relative isolate min-h-screen overflow-hidden text-text-invert">
      {/* BACKGROUND SVG */}
      <img
        src={assets.background}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover object-center -z-10 opacity-30 blur-sm"
      />

      {/* NAVBAR */}
      <nav className="w-full bg-primary">
        <div className="px-6 md:px-16 lg:px-24 xl:px-32 z-50">
          <div className="flex items-center justify-between py-4">
            {/* LOGO */}
            <a href="/" className="flex items-center">
              <img
                src={assets.logo}
                alt="Logo KKN 31"
                className="h-20 w-auto"
              />
            </a>

            {/* NAV LINKS */}
            <div className="hidden md:flex gap-8 text-sm">
              {navItems.map((item) => (
                <a key={item} href="/" className="hover:text-accent transition">
                  {item}
                </a>
              ))}
            </div>

            {/* CTA & MOBILE */}
            <div className="flex items-center gap-4">
              <button className="hidden md:block bg-surface text-text-primary px-6 py-2.5 rounded-full hover:bg-accent transition">
                Contact us
              </button>

              <button
                onClick={() => setMenuOpen(true)}
                className="md:hidden active:scale-90 transition text-xl"
                aria-label="Open menu"
              >
                ☰
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-100 bg-black/40 backdrop-blur flex flex-col items-center justify-center gap-8 text-lg transition-transform duration-300 md:hidden
        ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {navItems.map((item) => (
          <a key={item} href="/" onClick={() => setMenuOpen(false)}>
            {item}
          </a>
        ))}

        <button
          onClick={() => setMenuOpen(false)}
          className="bg-surface text-text-primary rounded-md size-10 flex items-center justify-center"
          aria-label="Close menu"
        >
          ✕
        </button>
      </div>

      {/* HERO SECTION */}
      <section className="flex flex-col md:flex-row items-center justify-between mt-20 px-4 md:px-16 lg:px-24 xl:px-32 pb-20 gap-16">
        <div className="text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-secondary text-xs mb-4">
            Join community of 1m+ founders
          </div>

          <h1 className="text-5xl md:text-6xl leading-tight font-bold max-w-xl">
            KKN 31 UNMER Pandanlandung
          </h1>

          <p className="text-sm text-muted max-w-lg mt-3">
            Dokumentasi kinerja, kolaborasi tim, dan program pengabdian
            masyarakat yang dijalankan secara terstruktur dan profesional.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center md:justify-start">
            <button className="bg-surface text-text-primary px-7 h-11 rounded-md hover:bg-muted transition">
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
