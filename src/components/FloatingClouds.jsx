import React from 'react';

const FloatingClouds = () => {
  const clouds = [
    { top: '10%', left: '5%', size: 'large', delay: 0 },
    { top: '20%', left: '80%', size: 'medium', delay: 2 },
    { top: '60%', left: '10%', size: 'small', delay: 1 },
    { top: '70%', left: '75%', size: 'large', delay: 3 },
    { top: '40%', left: '50%', size: 'medium', delay: 1.5 },
    { top: '85%', left: '30%', size: 'small', delay: 2.5 }
  ];

  const sizeClasses = {
    small: 'w-24 h-16',
    medium: 'w-32 h-20',
    large: 'w-40 h-24',
  };

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {clouds.map((cloud, i) => (
        <div
          key={i}
          className={`absolute ${sizeClasses[cloud.size]} animate-cloudFloat opacity-90`}
          style={{
            top: cloud.top,
            left: cloud.left,
            animationDelay: `${cloud.delay}s`,
            animationDuration: `${20 + i * 2}s`
          }}
        >
          <svg viewBox="0 0 200 120" className="w-full h-full">
            <path
              d="M 30 60 Q 30 40 50 40 Q 50 20 70 20 Q 90 20 90 40 Q 110 40 110 60 Q 110 80 90 80 L 50 80 Q 30 80 30 60"
              fill="white"
              opacity="0.8"
            />
          </svg>
        </div>
      ))}
    </div>
  );
};

export default FloatingClouds;