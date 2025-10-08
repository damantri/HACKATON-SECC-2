"use client";

import { useEffect, useRef, useState } from "react";

type Status = "idle" | "running" | "finished";

export default function ClickChallenge({ duration = 10 }: { duration?: number }) {
  const [status, setStatus] = useState<Status>("idle");
  const [timeLeft, setTimeLeft] = useState(duration);
  const [clicks, setClicks] = useState(0);
  const timerRef = useRef<number | null>(null);

  const stopTimer = () => {
    if (timerRef.current !== null) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const start = () => {
    if (status === "running") return;
    setClicks(0);
    setTimeLeft(duration);
    setStatus("running");
  };

  const reset = () => {
    stopTimer();
    setStatus("idle");
    setClicks(0);
    setTimeLeft(duration);
  };

  useEffect(() => {
    if (status !== "running") return;

    timerRef.current = window.setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          stopTimer();
          setStatus("finished");
          return 0;
        }
        return t - 1;
      });
    }, 1000);

    return () => stopTimer();
  }, [status]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (status !== "running") return;
      if (e.code === "Space" || e.key === " " || e.key === "Enter") {
        e.preventDefault();
        setClicks((c) => c + 1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [status]);

  const handleClick = () => {
    if (status === "running") setClicks((c) => c + 1);
  };

  return (
    <div className="card">
      <h2>No. de clicks antes de que acabe el tiempo</h2>

      <div className="count" aria-live="polite" aria-atomic="true">
        {clicks}
      </div>

      <p className="time" aria-live="polite" aria-atomic="true">
        Tiempo restante: {timeLeft} s
      </p>

      <div className="actions">
        {status !== "running" ? (
          <button className="btn primary" onClick={start}>
            {status === "idle" ? "Empezar" : "Volver a jugar"}
          </button>
        ) : (
          <button className="btn" onClick={handleClick} aria-label="sumar click">
            +
          </button>
        )}
        <button className="btn ghost" onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
