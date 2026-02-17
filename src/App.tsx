import React from "react";
import { useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import ProgramKerja from "./components/ProgramKerja";

function App() {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    return savedTheme ? savedTheme : "dark";
  });

  return (
    <div className="relative bg-surface dark:bg-primary min-h-screen">
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero theme={theme} setTheme={setTheme} />
      <About />
      <ProgramKerja theme={theme} />
    </div>
  );
}

export default App;
