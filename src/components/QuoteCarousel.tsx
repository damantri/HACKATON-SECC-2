"use client";

import { useEffect, useMemo, useState } from "react";

type Quote = { text: string; author: string };

const QUOTES: Quote[] = [
  {
    text:
      "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
    author: "Albert Schweitzer",
  },
  {
    text:
      "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    text:
      "Whether you think you can or you think you can’t—you’re right.",
    author: "Henry Ford",
  },
  {
    text:
      "It always seems impossible until it’s done.",
    author: "Nelson Mandela",
  },
];

export default function QuoteCarousel({ autoPlay = false, interval = 6000 }) {
  const [idx, setIdx] = useState(0);

  const total = QUOTES.length;
  const quote = useMemo(() => QUOTES[idx], [idx]);

  const prev = () => setIdx((i) => (i - 1 + total) % total);
  const next = () => setIdx((i) => (i + 1) % total);

  // teclado: flechas izquierda/derecha
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // auto-play opcional
  useEffect(() => {
    if (!autoPlay) return;
    const id = setInterval(next, interval);
    return () => clearInterval(id);
  }, [autoPlay, interval]);

  const shareText = `"${quote.text}" — ${quote.author}`;
  const shareUrl = typeof window !== "undefined" ? window.location.href : "https://";
  const twitter = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
  const whatsapp = `https://wa.me/?text=${encodeURIComponent(shareText + " " + shareUrl)}`;

  return (
    <section className="quote">
      <div className="quote__bar" />
      <div className="quote__card">
        <div className="quote__mark">“</div>

        <p className="quote__text">{quote.text}</p>
        <p className="quote__author">— {quote.author}</p>

        <div className="quote__row">
          <div className="quote__nav">
            <button className="circle-btn" aria-label="Anterior" onClick={prev}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="circle-btn" aria-label="Siguiente" onClick={next}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          <div className="quote__share">
            <span className="muted">Share at:</span>
            <a className="share-btn" href={twitter} target="_blank" rel="noreferrer" aria-label="Compartir en Twitter">𝕏</a>
            <a className="share-btn" href={whatsapp} target="_blank" rel="noreferrer" aria-label="Compartir en WhatsApp">🟢</a>
          </div>
        </div>

        <div className="quote__dots">
          {QUOTES.map((_, i) => (
            <button
              key={i}
              className={`dot ${i === idx ? "dot--active" : ""}`}
              aria-label={`Ir a la frase ${i + 1}`}
              onClick={() => setIdx(i)}
            />
          ))}
        </div>
      </div>
      <div className="quote__bar quote__bar--bottom" />
    </section>
  );
}
