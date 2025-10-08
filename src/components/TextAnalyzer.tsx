"use client";

import { useMemo, useState } from "react";

type Stats = {
  words: number;
  characters: number;          
  sentences: number;
  paragraphs: number;
  avgReadingTime: string;     
  longestWord: string | "-";
};

const WORD_RE = /[A-Za-zÁÉÍÓÚÜÑáéíóúüñ0-9]+(?:['’-][A-Za-zÁÉÍÓÚÜÑáéíóúüñ0-9]+)*/g; 
const SENTENCE_RE = /[^.!?…]+[.!?…]+|[^.!?…]+$/g; 


const WPM = 200;

function getStats(text: string): Stats {
  const trimmed = text.trim();


  const wordsArr = trimmed.match(WORD_RE) ?? [];
  const words = wordsArr.length;


  const characters = text.length;


  const sentences = (trimmed.match(SENTENCE_RE) ?? []).filter(s => s.trim().length > 0).length;

  const paragraphs = trimmed.length === 0
    ? 0
    : trimmed.split(/\n\s*\n/).filter(p => p.trim().length > 0).length;

  const minutes = words / WPM; 
  const totalSeconds = Math.max(1, Math.round(minutes * 60));
  const mm = Math.floor(totalSeconds / 60);
  const ss = totalSeconds % 60;
  const avgReadingTime = mm > 0 ? `${mm}m ${ss}s` : `${ss}s`;


  let longestWord: string | "-" = "-";
  if (wordsArr.length) {
    longestWord = wordsArr.reduce((a, b) => (b.length > a.length ? b : a));
  }

  return { words, characters, sentences, paragraphs, avgReadingTime, longestWord };
}

export default function TextAnalyzer() {
  const [text, setText] = useState("");

  const stats = useMemo(() => getStats(text), [text]);

  return (
    <div className="analyzer">
      <header className="analyzer__header">Text Analyzer</header>

      <section className="analyzer__summary">
        <div className="analyzer__tile">
          <span className="analyzer__label">Words</span>
          <span className="analyzer__value">{stats.words}</span>
        </div>
        <div className="analyzer__tile">
          <span className="analyzer__label">Characters</span>
          <span className="analyzer__value">{stats.characters}</span>
        </div>
        <div className="analyzer__tile">
          <span className="analyzer__label">Sentences</span>
          <span className="analyzer__value">{stats.sentences}</span>
        </div>
        <div className="analyzer__tile">
          <span className="analyzer__label">Paragraphs</span>
          <span className="analyzer__value">{stats.paragraphs}</span>
        </div>
      </section>

      <textarea
        className="analyzer__input"
        placeholder="Paste your text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <footer className="analyzer__footer">
        <div>Average Reading Time: <strong>{stats.avgReadingTime}</strong></div>
        <div>Longest word: <strong>{stats.longestWord}</strong></div>
      </footer>
    </div>
  );
}
