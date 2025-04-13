import React, { useEffect, useState } from 'react';

const Hex = () => {
  const [typeofColor, setTypeofColor] = useState('hex');
  const [color, setColor] = useState('#000000');

  const handleCreateRandomColorUtility = (length) => {
    return Math.floor(Math.random() * length);
  };

  const handlecreatehexColor = () => {
    let hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    let symbol = '#';
    for (let i = 0; i < 6; i++) {
      symbol += hex[handleCreateRandomColorUtility(hex.length)];
    }
    setColor(symbol);
  };

  const handlecreatergbColor = () => {
    let r = handleCreateRandomColorUtility(256);
    let g = handleCreateRandomColorUtility(256);
    let b = handleCreateRandomColorUtility(256);
    setColor(`rgb(${r}, ${g}, ${b})`);
  };

  useEffect(() => {
    if (typeofColor === 'rgb') {
      handlecreatergbColor();
    } else {
      handlecreatehexColor();
    }
  }, [typeofColor]);

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        backgroundColor: color,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '30px',
        fontFamily: 'Arial, sans-serif',
        transition: 'background-color 0.5s ease',
      }}
    >
      <div style={{ display: 'flex', gap: '20px' }}>
        <button
          onClick={() => setTypeofColor('hex')}
          style={{
            padding: '10px 20px',
            fontSize: '18px',
            borderRadius: '8px',
            border: 'none',
            backgroundColor: '#ffffffcc',
            cursor: 'pointer',
            fontWeight: 'bold',
            color: '#333',
          }}
        >
          Create Hex Color
        </button>
        <button
          onClick={() => setTypeofColor('rgb')}
          style={{
            padding: '10px 20px',
            fontSize: '18px',
            borderRadius: '8px',
            border: 'none',
            backgroundColor: '#ffffffcc',
            cursor: 'pointer',
            fontWeight: 'bold',
            color: '#333',
          }}
        >
          Create RGB Color
        </button>
      </div>

      <button
        onClick={typeofColor === 'hex' ? handlecreatehexColor : handlecreatergbColor}
        style={{
          padding: '20px 30px',
          fontSize: '32px',
          borderRadius: '12px',
          border: 'none',
          backgroundColor: '#222222aa',
          color: '#fff',
          cursor: 'pointer',
          fontWeight: 'bold',
          transition: 'transform 0.2s',
        }}
        onMouseOver={(e) => (e.target.style.transform = 'scale(1.05)')}
        onMouseOut={(e) => (e.target.style.transform = 'scale(1)')}
      >
        Generate Random Color
      </button>

      <h3 style={{ color: '#fff', fontSize: '24px' }}>
        {typeofColor === 'rgb' ? 'RGB Color' : 'HEX Color'}
      </h3>
      <h3 style={{ color: '#fff', fontSize: '24px' }}>{color}</h3>
    </div>
  );
};

export default Hex;
