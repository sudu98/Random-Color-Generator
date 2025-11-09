import React, { useState } from 'react';
import QRCode from 'react-qr-code';
const QrCodeGenerator = () => {
  const [qrCode, setQrCode] = useState('');
  const [input, setInput] = useState('');
  const handleGenerateQrCode = () => {
    setQrCode(input);
  };
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          marginTop: '10px',
        }}
      >
        <h1>QR Code Generator</h1>
        <div>
          <input
            onChange={(e) => setInput(e.target.value)}
            type='text'
            name='qr-code'
            placeholder='Enter the value'
          />
          <button
            onClick={handleGenerateQrCode}
            disabled={input && input.trim() !== '' ? false : true}
          >
            Generate
          </button>
        </div>
        <div style={{ marginTop: '10px' }}>
          <QRCode
            id='qr-code-value'
            value={qrCode}
            size={300}
            bgColor='white'
          />
        </div>
      </div>
    </>
  );
};

export default QrCodeGenerator;
