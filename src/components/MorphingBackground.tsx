import React, { useEffect } from 'react';
import KUTE from 'kute.js';

const MorphingBackground = () => {
  useEffect(() => {
    const tween = KUTE.fromTo(
      '#blob1',
      { path: '#blob1' },
      { path: '#blob2' },
      { repeat: 999, duration: 3000, yoyo: true }
    );
    tween.start();
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <svg
        viewBox="0 0 900 600"
        preserveAspectRatio="none"
        className="w-full h-full opacity-10 dark:opacity-5"
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#818cf8' }} />
            <stop offset="50%" style={{ stopColor: '#6366f1' }} />
            <stop offset="100%" style={{ stopColor: '#4f46e5' }} />
          </linearGradient>
        </defs>
        <path
          id="blob1"
          d="M437.5,308.5Q411,367,355.5,396Q300,425,234,424Q168,423,129.5,371Q91,319,63,254.5Q35,190,85,135.5Q135,81,201,70.5Q267,60,328.5,81Q390,102,427,151Q464,200,450.5,250Q437,300,437.5,308.5Z"
          fill="url(#gradient)"
        />
        <path
          id="blob2"
          d="M423,303.5Q397,357,350,396Q303,435,242.5,425.5Q182,416,138.5,371Q95,326,74,258Q53,190,98.5,137Q144,84,206.5,67Q269,50,331.5,72Q394,94,421.5,147Q449,200,423,303.5Z"
          fill="url(#gradient)"
          style={{ visibility: 'hidden' }}
        />
      </svg>
    </div>
  );
};

export default MorphingBackground;