'use client';
import { useState } from 'react';

export default function Reto1() {
  const [progress, setProgress] = useState(0);

  const handleChange = (e: { target: { value: string; }; }) => {
    let value = parseInt(e.target.value);
    if (isNaN(value)) value = 0;
    if (value < 0) value = 0;
    if (value > 100) value = 100;
    setProgress(value);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-6">
      <h1 className="text-3xl font-semibold">Progress bar</h1>

      <div className="relative w-3/5 h-8 bg-gray-300 rounded-full overflow-hidden">
        <div
          className="h-full bg-red-400 transition-all duration-300 rounded-full"
          style={{ width: `${progress}%` }}
        >
          <span
            className="absolute -top-6 left-[calc(var(--pos)_-_10px)] bg-red-400 text-white text-xs font-bold px-2 py-1 rounded-full shadow-md"
            style={{
              left: `calc(${progress}% - 20px)`,
            }}
          >
            {progress}%
          </span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <label htmlFor="input" className="font-medium">
          Input Percentage:
        </label>
        <input
          id="input"
          type="number"
          min="0"
          max="100"
          value={progress}
          onChange={handleChange}
          className="w-20 border-2 border-gray-500 rounded-full text-center p-1 outline-none focus:border-blue-500"
        />
      </div>
    </div>
  );
}
