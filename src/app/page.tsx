'use client';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-3xl font-bold mb-4">Índice</h1>
      <p className="mb-6">Selecciona un reto:</p>
      <Link
        href="/reto1"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Reto 1 - Progress Bar
      </Link>
      <Link
        href="/reto2"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Reto 2 - clicks en 10s
      </Link>
      <Link href="/reto3" 
      className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Reto 3 – Tic Tac Toe
      </Link>
      <Link
        href="/reto4"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Reto 4 - Dark Mode Toggle
      </Link>
      <Link href="/reto5" 
      className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Reto 5 - Navbar
      </Link>
      <Link
        href="/reto6"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Reto 6 - Text Analyzer
      </Link>
    </main>
  );
}