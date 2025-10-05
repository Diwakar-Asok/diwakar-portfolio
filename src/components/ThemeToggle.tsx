import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    // load from localStorage or default to dark
    return localStorage.getItem("theme") || "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <button className="theme-toggle" onClick={toggleTheme}>
        {theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}
    </button>
  );
}
