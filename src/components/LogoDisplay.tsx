import React from "react";
import { company_logos } from "../assets";

const LogoDisplay: React.FC = () => {
  return (
    <section className="w-full py-16 overflow-hidden select-none relative">
      {/* Left Gradient */}
      <div className="absolute left-0 top-0 h-full" />

      {/* Marquee Container */}
      <div className="flex w-max animate-marquee">
        {[...company_logos, ...company_logos].map(
          (logo: string, index: number) => (
            <img
              key={index}
              src={logo}
              alt="Company Logo"
              className="
                mx-4 sm:mx-8 md:mx-10 lg:mx-14
                h-15 sm:h-20 md:h-20 lg:h-25
                opacity-60 hover:opacity-100
                transition duration-300
                "
            />
          ),
        )}
      </div>

      {/* Right linear */}
      <div className="absolute right-0 top-0 h-full" />
    </section>
  );
};

export default LogoDisplay;
