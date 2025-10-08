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
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>Progress bar</h1>

      <div
        style={{
          position: 'relative',
          width: '60%',
          margin: '30px auto',
          height: '30px',
          backgroundColor: '#d3d3d3',
          borderRadius: '15px',
        }}
      >
        <div
          style={{
            height: '100%',
            width: `${progress}%`,
            backgroundColor: '#ff6b6b',
            borderRadius: '15px',
            transition: 'width 0.3s ease',
            position: 'relative',
          }}
        >
          <span
            style={{
              position: 'absolute',
              right: '-35px',
              top: '-25px',
              backgroundColor: '#ff6b6b',
              color: 'white',
              padding: '5px 8px',
              borderRadius: '50%',
              fontSize: '12px',
              fontWeight: 'bold',
              boxShadow: '0 0 5px rgba(0,0,0,0.3)',
            }}
          >
            {progress}%
          </span>
        </div>
      </div>

      <div>
        <label htmlFor="input">Input Percentage: </label>
        <input
          id="input"
          type="number"
          min="0"
          max="100"
          value={progress}
          onChange={handleChange}
          style={{
            padding: '8px',
            border: '2px solid black',
            borderRadius: '20px',
            width: '80px',
            textAlign: 'center',
            outline: 'none',
          }}
        />
      </div>
    </div>
  );
}
