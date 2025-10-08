"use client";

import TextAnalyzer from "@/components/TextAnalyzer";

export default function Reto6Page() {
  return (
    <main className="center">
      <div className="card" style={{ width: "min(920px, 96vw)" }}>
        <h1 style={{ marginTop: 0 }}>Reto 6 – Text Analyzer</h1>
        <p className="muted">Pega o escribe texto y mira los conteos en tiempo real.</p>
        <TextAnalyzer />
      </div>
    </main>
  );
}
