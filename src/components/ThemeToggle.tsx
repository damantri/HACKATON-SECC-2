"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

function applyTheme(t: Theme) {
  const root = document.documentElement;
  if (t === "dark") root.classList.add("dark");
  else root.classList.remove("dark");
  root.setAttribute("data-theme", t);
  localStorage.setItem("theme", t);
}

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const stored = localStorage.getItem("theme") as Theme | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial: Theme = stored ?? (prefersDark ? "dark" : "light");
    setTheme(initial);
    applyTheme(initial);
    setMounted(true);
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    applyTheme(next);
  };

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <button
      aria-label="Cambiar modo de color"
      onClick={toggle}
      className={`dm-toggle ${isDark ? "dm-on" : "dm-off"}`}
      title={isDark ? "Cambiar a claro" : "Cambiar a oscuro"}
    >
      <span className="dm-icon">{isDark ? "🌙" : "☀️"}</span>
      <span className="dm-knob" />
    </button>
  );
}
