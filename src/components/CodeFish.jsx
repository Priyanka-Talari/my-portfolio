import React from 'react';

const CodeFish = () => {
  const symbols = ['<>', '{}', '[]', '/>', '()'];
  
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {symbols.map((symbol, i) => (
        <div
          key={i}
          className="absolute animate-floatSlow"
          style={{
            top: `${10 + i * 18}%`,
            left: `${5 + i * 15}%`,
            animationDelay: `${i * 2}s`,
            animationDuration: `${8 + i}s`
          }}
        >
          <div className="relative">
            <svg viewBox="0 0 80 50" className="w-16 h-10">
              <ellipse cx="35" cy="25" rx="25" ry="15" fill="#F4D03F" opacity="0.6"/>
              <circle cx="42" cy="20" r="3" fill="#7DBADB" opacity="0.5"/>
              <path d="M 10 25 L 0 15 L 5 25 L 0 35 Z" fill="#F4D03F" opacity="0.6"/>
            </svg>
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xs font-mono text-blue-600 font-bold">
              {symbol}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CodeFish;