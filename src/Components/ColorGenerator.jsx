import React, { useState } from 'react';
import './ColorGen.css';
const ColorGenerator = () => {
  const [typerOfColor, setTypesOfColor] = useState('hex');
  const [color, setColor] = useState('#000');

  const radomColorUtility = (length) => {
    return Math.floor(Math.random() * length);
  };

  const hexColor = () => {
    const hex = [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
    ];
    let hexcol = '#';
    for (let i = 0; i < 6; i++) {
      hexcol += hex[radomColorUtility(hex.length)];
    }
    setColor(hexcol);
    console.log(hexcol);
    console.log(hex.length);
  };
  const rgbColor = () => {
    const r = radomColorUtility(256);
    const g = radomColorUtility(256);
    const b = radomColorUtility(256);
    setColor(`rgb(${r},${g},${b})`);
  };
  return (
    <>
      <div
        className='wrapper'
        style={{ width: '100vw', height: '100vh', background: color }}
      >
        <div className='header'>
          <div className='buttonSection'>
            <button onClick={() => setTypesOfColor('hex')}>
              Create HEX Color
            </button>
            <button onClick={() => setTypesOfColor('rgb')}>
              Create RGB Color
            </button>
            <button onClick={typerOfColor === 'hex' ? hexColor : rgbColor}>
              Generate Random Color
            </button>
          </div>
        </div>
        <div className='title'>
          <h1>{typerOfColor === 'rgb' ? 'RGB Color' : 'HEX Color'}</h1>
        </div>
        <div className='colorCode'>
          <h2>{color}</h2>
        </div>
      </div>
    </>
  );
};

export default ColorGenerator;
