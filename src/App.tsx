import React from "react";
import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import Feature from "./components/Feature";
import Navbar from "./components/Navbar";

function App() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="relative bg-surface dark:bg-primary min-h-screen">
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <Feature />
    </div>
  );
}

export default App;
