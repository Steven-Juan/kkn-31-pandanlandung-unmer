import React from "react";
import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import LogoDisplay from "./components/LogoDisplay";
import About from "./components/About";

function App() {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    return savedTheme ? savedTheme : "dark";
  });

  return (
    <div className="relative bg-surface dark:bg-primary min-h-screen">
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero theme={theme} setTheme={setTheme} />
      <About/>      
    </div>
  );
}

export default App;
