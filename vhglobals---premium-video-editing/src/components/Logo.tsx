import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

export const Logo: React.FC<LogoProps> = ({ className = 'w-10 h-10', size }) => {
  return (
    <svg
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={size ? { width: size, height: size } : undefined}
      aria-label="VHGLOBALS Official Logo"
    >
      <defs>
        {/* V Left Outer 3D Bevel Facet - Deep Navy Blue */}
        <linearGradient id="vh-v-bevel-comp" x1="90" y1="180" x2="175" y2="360" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0e2340" />
          <stop offset="60%" stopColor="#143460" />
          <stop offset="100%" stopColor="#0a192f" />
        </linearGradient>

        {/* V Left Main Face - Rich Royal Blue */}
        <linearGradient id="vh-v-face-comp" x1="135" y1="175" x2="218" y2="360" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="40%" stopColor="#1d4ed8" />
          <stop offset="100%" stopColor="#173da8" />
        </linearGradient>

        {/* V Right Arm & Left H Stem */}
        <linearGradient id="vh-h-left-stem-comp" x1="195" y1="360" x2="295" y2="175" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#163c78" />
          <stop offset="50%" stopColor="#1d4ed8" />
          <stop offset="100%" stopColor="#0284c7" />
        </linearGradient>

        {/* H Horizontal Crossbar */}
        <linearGradient id="vh-h-crossbar-comp" x1="258" y1="268" x2="360" y2="306" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0284c7" />
          <stop offset="100%" stopColor="#2596be" />
        </linearGradient>

        {/* H Right Pillar - Radiant Sky & Ocean Blue */}
        <linearGradient id="vh-h-right-stem-comp" x1="358" y1="205" x2="396" y2="360" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0284c7" />
          <stop offset="50%" stopColor="#2596be" />
          <stop offset="100%" stopColor="#38bdf8" />
        </linearGradient>

        {/* Soaring Arrow & Curved Ribbon Gradient */}
        <linearGradient id="vh-arrow-grad-comp" x1="190" y1="360" x2="425" y2="135" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1d4ed8" />
          <stop offset="35%" stopColor="#0284c7" />
          <stop offset="70%" stopColor="#2596be" />
          <stop offset="100%" stopColor="#38bdf8" />
        </linearGradient>

        {/* Crisp drop shadow for 3D depth */}
        <filter id="vh-glow-comp" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#0b1b33" floodOpacity="0.25" />
        </filter>
      </defs>

      {/* === LETTERFORMS: V & H === */}

      {/* V Left Stem: Outer Bevel */}
      <path
        d="M 90 188 L 138 175 L 195 360 L 166 360 Z"
        fill="url(#vh-v-bevel-comp)"
      />

      {/* V Left Stem: Front Face */}
      <path
        d="M 138 175 L 180 175 L 218 360 L 195 360 Z"
        fill="url(#vh-v-face-comp)"
      />

      {/* V Right Arm & H Left Pillar */}
      <path
        d="M 195 360 L 255 175 L 295 175 L 295 360 L 258 360 L 258 268 L 220 360 Z"
        fill="url(#vh-h-left-stem-comp)"
      />

      {/* H Horizontal Crossbar */}
      <rect
        x="258"
        y="268"
        width="102"
        height="38"
        fill="url(#vh-h-crossbar-comp)"
      />

      {/* H Right Pillar */}
      <rect
        x="358"
        y="205"
        width="38"
        height="155"
        fill="url(#vh-h-right-stem-comp)"
      />

      {/* === DYNAMIC SOARING ARROW & RIBBON SWOOSH === */}

      {/* Lower Flow of Swoosh */}
      <path
        d="M 188 358 C 215 342 245 305 288 285 C 332 265 375 225 405 188 L 398 200 C 368 238 322 278 280 298 C 238 318 208 350 188 358 Z"
        fill="url(#vh-arrow-grad-comp)"
        filter="url(#vh-glow-comp)"
      />

      {/* Upper Flow of Swoosh */}
      <path
        d="M 194 350 C 215 320 248 275 295 258 C 342 240 385 195 410 166 L 402 178 C 378 208 335 248 290 268 C 248 288 218 330 194 350 Z"
        fill="url(#vh-arrow-grad-comp)"
        filter="url(#vh-glow-comp)"
      />

      {/* Aerodynamic White Separation Contour */}
      <path
        d="M 191 354 C 215 328 246 288 292 270 C 338 252 382 208 406 178"
        stroke="#ffffff"
        strokeWidth="3.5"
        strokeLinecap="round"
        opacity="0.95"
      />

      {/* Soaring Arrowhead */}
      <path
        d="M 372 172 L 426 142 L 418 204 L 400 188 L 388 190 Z"
        fill="url(#vh-arrow-grad-comp)"
        filter="url(#vh-glow-comp)"
      />
    </svg>
  );
};
