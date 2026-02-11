import React from "react";
import { useEffect, useState } from "react";
import Hero from "./components/Hero";
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
      <Feature />
    </div>
  );
}

export default App;
