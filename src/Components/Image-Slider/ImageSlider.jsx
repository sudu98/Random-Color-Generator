import React, { useState } from 'react';

const ImageSlider = () => {
  const imageUrl = [
    'https://picsum.photos/id/237/800/400',
    'https://picsum.photos/seed/picsum/800/400',
    'https://picsum.photos/800/400?grayscale',
    'https://picsum.photos/800/400/?blur',
    'https://picsum.photos/id/870/800/400?grayscale&blur=2',
  ];

  const [current, setCurrent] = useState(0);
  const length = imageUrl.length;

  const nextSlide = () => setCurrent((prev) => (prev + 1) % length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + length) % length);

  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundImage: `url(${imageUrl[current]})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      transition: 'background-image 0.8s ease-in-out',
    },
    sliderBox: {
      position: 'relative',
      width: '800px',
      height: '400px',
      overflow: 'hidden',
      borderRadius: '12px',
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)',
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      borderRadius: '12px',
      transition: 'opacity 0.6s ease-in-out',
      animation: 'fadeIn 1s',
    },
    button: {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
      color: 'white',
      border: 'none',
      borderRadius: '50%',
      width: '40px',
      height: '40px',
      fontSize: '1.5rem',
      cursor: 'pointer',
      transition: 'background 0.3s',
    },
    dotsContainer: {
      position: 'absolute',
      bottom: '15px',
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      gap: '10px',
    },
    dot: {
      width: '12px',
      height: '12px',
      borderRadius: '50%',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.sliderBox}>
        <img
          key={current}
          src={imageUrl[current]}
          alt='slide'
          style={styles.image}
        />

        {/* Navigation Buttons */}
        <button style={{ ...styles.button, left: '10px' }} onClick={prevSlide}>
          ❮
        </button>
        <button style={{ ...styles.button, right: '10px' }} onClick={nextSlide}>
          ❯
        </button>

        {/* Dots Navigation */}
        <div style={styles.dotsContainer}>
          {imageUrl.map((_, index) => (
            <span
              key={index}
              style={{
                ...styles.dot,
                backgroundColor: index === current ? '#fff' : '#777',
              }}
              onClick={() => setCurrent(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
