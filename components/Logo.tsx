import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo = ({ className }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 400 400"
      className={className}
      fill="none"
      role="img"
      aria-label="AIRAX Logo"
    >
      <defs>
        <linearGradient id="pulseGradientProfile" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: '#001F5B', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#00C2FF', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <g transform="translate(200, 200)" textAnchor="middle">
        <g transform="translate(-56, -100) scale(1)">
          <path
            d="M0,30 L15,30 L22,15 L37,45 L52,5 L67,50 L82,0 L97,30 L112,30"
            stroke="url(#pulseGradientProfile)"
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle
            cx="82"
            cy="0"
            r="6"
            fill="#00C2FF"
            stroke="#ffffff"
            strokeWidth="2"
          />
        </g>
        <text
          x="0"
          y="80"
          fontFamily="sans-serif"
          fontSize="64"
          fontWeight="900"
          fill="#ffffff"
          letterSpacing="4"
          style={{ textTransform: 'uppercase' }}
        >
          AIRAX
        </text>
      </g>
    </svg>
  );
};

export default Logo;