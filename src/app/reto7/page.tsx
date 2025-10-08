"use client";

import QuoteCarousel from "@/components/QuoteCarousel";

export default function Reto7Page() {
  return (
    <main className="center">
      <div className="card" style={{ width: "min(900px, 96vw)" }}>
        <h1 style={{ marginTop: 0 }}>Reto 7 – Quote Carousel</h1>
        <p className="muted">Navega con los botones o las flechas del teclado. Comparte en redes.</p>
        <QuoteCarousel autoPlay={false} />
      </div>
    </main>
  );
}
