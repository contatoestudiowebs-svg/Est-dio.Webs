import React from 'react';

interface EstudioWebsLogoProps {
  className?: string;
  size?: number;
  color?: string;
}

export function EstudioWebsLogo({
  className = 'w-9 h-9',
  size,
  color = '#D80050'
}: EstudioWebsLogoProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={size ? { width: size, height: size } : undefined}
      role="img"
      aria-label="Logo Oficial Estúdio Webs"
    >
      {/* Official Estúdio Webs Brandmark: Magenta circular disc with studio notch */}
      <path
        d="M 68 15
           C 72 17.5 73.8 21 72.8 25
           C 71.5 30 67 33.5 67.5 37.5
           C 68 41.5 72.5 45 77 47.5
           C 81.5 50 83.5 54 82 59
           A 42 42 0 1 1 68 15 Z"
        fill={color}
      />
    </svg>
  );
}
