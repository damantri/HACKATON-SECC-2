"use client";

import ThemeToggle from "@/components/ThemeToggle";

export default function Reto4Page() {
  return (
    <main className="center">
      <div className="card">
        <h1 style={{ marginTop: 0 }}>Reto 4 – Dark Mode Toggle</h1>
        <p className="muted">Haz clic para alternar claro/oscuro. Preferencia persiste.</p>
        <ThemeToggle />
      </div>
    </main>
  );
}
