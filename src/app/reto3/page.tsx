'use client';
import { useState } from 'react';

export default function Reto3() {
  const [board, setBoard] = useState(Array(9).fill(null)); 
  const [turn, setTurn] = useState<'X' | 'O'>('X');

  const handleClick = (i: number) => {
    if (board[i]) return;

    const next = [...board];
    next[i] = turn;
    setBoard(next);
    setTurn((prev) => (prev === 'X' ? 'O' : 'X'));
  };

  const reset = () => {
    setBoard(Array(9).fill(null));
    setTurn('X');
  };
  const lineColor = 'border-teal-800';

  const cellClass = (i: number) => {
    const rightLine = i % 3 !== 2 ? `border-r-4 ${lineColor}` : '';
    const bottomLine = i < 6 ? `border-b-4 ${lineColor}` : '';
    return [
      'flex items-center justify-center text-5xl md:text-6xl font-semibold select-none',
      'h-24 w-24 md:h-28 md:w-28',
      rightLine,
      bottomLine,
      'cursor-pointer'
    ].join(' ');
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6">
      <h1 className="text-3xl font-bold">Reto 3 — Tic Tac Toe</h1>

      <div className="text-lg">
        Turno: <span className="font-bold">{turn}</span>
      </div>

      <div
        className="grid grid-cols-3"
        role="grid"
        aria-label="Tablero Tic Tac Toe"
      >
        {board.map((value, i) => (
          <button
            key={i}
            className={cellClass(i)}
            onClick={() => handleClick(i)}
            aria-label={`Casilla ${i + 1}`}
          >
            <span className={value === 'X' ? 'text-rose-600' : 'text-sky-600'}>
              {value}
            </span>
          </button>
        ))}
      </div>

      <div className="flex gap-3">
        <button
          onClick={reset}
          className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300"
        >
          Reiniciar
        </button>
      </div>
    </main>
  );
}
