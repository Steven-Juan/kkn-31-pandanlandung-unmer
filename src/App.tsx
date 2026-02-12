import React from "react";
import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import Hero1 from "./components/Hero1";
import Feature from "./components/Feature";
import Navbar from "./components/Navbar";

function App() {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    return savedTheme ? savedTheme : "dark";
  });

  return (
    <div className="relative bg-surface dark:bg-primary min-h-screen">
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero theme={theme} setTheme={setTheme} />
      <Hero1 theme={theme} setTheme={setTheme} />
      <Feature theme={theme} setTheme={setTheme} />
    </div>
  );
}

export default App;
