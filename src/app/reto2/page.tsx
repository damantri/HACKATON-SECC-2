"use client";

import ClickChallenge from "@/components/ClickChallenge";

export default function Reto2Page() {
  return (
    <main className="center">
      <div className="card">
        <h1 style={{ marginTop: 0 }}>Reto 2 – Clicks en 10s</h1>
        <p className="muted">Presiona “+” o la barra espaciadora/Enter mientras corre.</p>
        <ClickChallenge duration={10} />
      </div>
    </main>
  );
}
