import React, { useState, type Dispatch, type SetStateAction } from "react";
import assets from "../assets";
import ThemeToggleBtn from "./ThemeToggleBtn";

type NavbarProps = {
  theme: "light" | "dark";
  setTheme: Dispatch<SetStateAction<"light" | "dark">>;
};

const Navbar: React.FC<NavbarProps> = ({ theme }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Our Work", href: "/our-work" },
    { label: "Contact Us", href: "/contact-us" },
  ];

  return (
    <nav className="sticky top-0 z-20 backdrop-blur-xl bg-surface/50 dark:bg-primary/70">
      <div className="flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 font-medium">
        <a href="/" className="flex items-center">
          <img
            src={assets.logo}
            className="w-auto h-20"
            alt="Logo KKN 31 Pandanlandung"
          />
        </a>

        <div
          className={`
            text-primary dark:text-text-invert sm:text-sm
            ${!sidebarOpen ? "max-sm:w-0 overflow-hidden" : "max-sm:w-60 max-sm:pl-10"}
            max-sm:fixed top-0 bottom-0 right-0
            max-sm:min-h-screen max-sm:h-full
            max-sm:flex-col max-sm:bg-secondary max-sm:text-white max-sm:pt-20
            flex sm:items-center gap-5 transition-all
          `}
        >
          <img
            src={assets.close_icon}
            className="w-5 h-5 absolute top-4 right-4 sm:hidden cursor-pointer"
            onClick={() => setSidebarOpen(false)}
            alt="Close"
          />

          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className=" sm:hover:border-b transition"
              onClick={() => setSidebarOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <ThemeToggleBtn theme={theme} setTheme={() => {}} />

          <img
            src={theme === "dark" ? assets.menu_icon_dark : assets.menu_icon}
            alt="Open menu"
            className="w-8 sm:hidden cursor-pointer"
            onClick={() => setSidebarOpen(true)}
          />

          <a
            href="#contact-us"
            className="text-sm max-sm:hidden flex items-center gap-2 bg-surface text-primary px-6 py-2 rounded-full cursor-pointer hover:scale-105 transition-all"
          >
            Connect
            <assets.ArrowIcon className="w-4 h-4" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
