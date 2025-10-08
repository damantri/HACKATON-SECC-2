'use client';
import Link from 'next/link';

export default function Home() {
  return (
    <main style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>Índice</h1>
      <p>Selecciona un reto:</p>
      <Link
        href="/reto1"
        style={{
          padding: '10px 20px',
          backgroundColor: '#0070f3',
          color: 'white',
          borderRadius: '8px',
          textDecoration: 'none',
        }}
      >
        Reto 1 - Progress Bar
      </Link>
    </main>
  );
}
