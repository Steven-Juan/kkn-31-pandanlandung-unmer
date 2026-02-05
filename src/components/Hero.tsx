import { useState } from "react";

const Hero: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const navItems: string[] = ["Home", "Products", "Stories", "Pricing"];

  return (
    <div className="relative isolate min-h-screen bg-[#3E2522] overflow-hidden">
      {/* BACKGROUND SVG */}
      <svg
        className="absolute inset-0 z-0 w-full h-full pointer-events-none"
        viewBox="0 0 1440 720"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path stroke="#D3A376" strokeOpacity={0.35} d="M-15.227 702.342H1439.7" />
        <circle cx="711.819" cy="372.562" r="308.334" stroke="#FFE0B2" strokeOpacity={0.25} />
        <circle cx="16.942" cy="20.834" r="308.334" stroke="#8C6E63" strokeOpacity={0.25} />
        <path stroke="#8C6E63" strokeOpacity={0.3} d="M-15.227 573.66H1439.7M-15.227 164.029H1439.7" />
        <circle cx="782.595" cy="411.166" r="308.334" stroke="#D3A376" strokeOpacity={0.25} />
      </svg>

      {/* NAVBAR */}
      <nav className="px-6 md:px-16 lg:px-24 xl:px-32 z-50">
        <div className="flex items-center justify-between py-4 text-[#FFF2DF] backdrop-blur">
          {/* LEFT: LOGO */}
          <a href="/" className="flex items-center">
            <img
              src="/logo-kkn31.png"
              alt="Logo KKN 31"
              className="h-25 w-auto"
            />
          </a>

          {/* CENTER: NAV LINKS */}
          <div className="hidden md:flex gap-8 text-sm">
            {navItems.map((item) => (
              <a
                key={item}
                href="/"
                className="hover:text-[#D3A376] transition"
              >
                {item}
              </a>
            ))}
          </div>

          {/* RIGHT: CTA & MOBILE MENU */}
          <div className="flex items-center gap-4">
            <button className="hidden md:block bg-[#FFF2DF] text-[#3E2522] px-6 py-2.5 rounded-full hover:bg-[#FFE0B2] transition">
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
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-[100] bg-black/40 backdrop-blur flex flex-col items-center justify-center gap-8 text-[#FFF2DF] text-lg transition-transform duration-300 md:hidden
        ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {navItems.map((item) => (
          <a
            key={item}
            href="/"
            onClick={() => setMenuOpen(false)}
          >
            {item}
          </a>
        ))}

        <button
          onClick={() => setMenuOpen(false)}
          className="bg-[#FFF2DF] text-[#3E2522] rounded-md size-10 flex items-center justify-center"
          aria-label="Close menu"
        >
          ✕
        </button>
      </div>

      {/* HERO SECTION */}
      <section className="flex flex-col md:flex-row items-center justify-between mt-20 px-4 md:px-16 lg:px-24 xl:px-32 pb-20 gap-16">
        <div className="text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#8C6E63] text-xs text-[#FFF2DF] mb-4">
            Join community of 1m+ founders
          </div>

          <h1 className="text-5xl md:text-6xl leading-tight font-bold text-[#FFF2DF] max-w-xl">
            KKN 31 UNMER Pandanlandung
          </h1>

          <p className="text-sm text-white max-w-lg mt-3">
            Unlock smarter workflows with AI tools designed to boost productivity and simplify tasks.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center md:justify-start">
            <button className="bg-[#FFF2DF] text-[#3E2522] px-7 h-11 rounded-md hover:bg-[#FFEOB2] transition">
              Get started
            </button>

            <button className="border border-[#8C6E63] text-[#FFF2DF] px-6 h-11 rounded-md hover:bg-white/10 transition">
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
