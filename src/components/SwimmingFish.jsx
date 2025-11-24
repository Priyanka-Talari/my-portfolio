import React from 'react';

const SwimmingFish = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="absolute animate-fishSwim"
          style={{
            top: `${15 + i * 30}%`,
            animationDelay: `${i * 5}s`,
            animationDuration: '20s'
          }}
        >
          <svg viewBox="0 0 200 120" className="w-32 h-20">
            <ellipse cx="80" cy="60" rx="60" ry="35" fill="#E6B941" opacity="0.9"/>
            <ellipse cx="75" cy="60" rx="50" ry="30" fill="#F4D03F" opacity="0.8"/>
            <circle cx="100" cy="50" r="6" fill="#7DBADB" opacity="0.7"/>
            <path d="M 20 60 L 0 40 L 10 60 L 0 80 Z" fill="#F4D03F" opacity="0.8"/>
            <path d="M 25 60 L 5 45 L 15 60 L 5 75 Z" fill="#E6B941" opacity="0.9"/>
          </svg>
        </div>
      ))}
    </div>
  );
};

export default SwimmingFish;