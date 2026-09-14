import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

export const Logo: React.FC<LogoProps> = ({ className = 'w-10 h-10', size }) => {
  return (
    <svg
      viewBox="115 150 270 190"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={size ? { width: size, height: size } : undefined}
      aria-label="VHGlobals Official Logo"
    >
      <defs>
        {/* V Left Outer 3D Bevel Facet - Deep Navy */}
        <linearGradient id="vh-v-bevel" x1="120" y1="190" x2="165" y2="325" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#172554" />
          <stop offset="60%" stopColor="#1e3a8a" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>

        {/* V Left Main Face - Rich Royal Blue */}
        <linearGradient id="vh-v-face" x1="140" y1="190" x2="195" y2="325" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="40%" stopColor="#1d4ed8" />
          <stop offset="100%" stopColor="#1e40af" />
        </linearGradient>

        {/* V Right Arm & Left H Pillar */}
        <linearGradient id="vh-h-left-stem" x1="195" y1="325" x2="275" y2="190" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1e3a8a" />
          <stop offset="45%" stopColor="#1d4ed8" />
          <stop offset="100%" stopColor="#0284c7" />
        </linearGradient>

        {/* H Crossbar */}
        <linearGradient id="vh-h-crossbar" x1="260" y1="270" x2="335" y2="298" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0284c7" />
          <stop offset="100%" stopColor="#2596be" />
        </linearGradient>

        {/* H Right Pillar - Vibrant Cyan */}
        <linearGradient id="vh-h-right-stem" x1="325" y1="215" x2="355" y2="325" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0284c7" />
          <stop offset="50%" stopColor="#2596be" />
          <stop offset="100%" stopColor="#38bdf8" />
        </linearGradient>

        {/* Dynamic Swoosh & Arrowhead Gradient */}
        <linearGradient id="vh-swoosh-grad" x1="180" y1="330" x2="380" y2="160" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1e40af" />
          <stop offset="30%" stopColor="#0284c7" />
          <stop offset="70%" stopColor="#2596be" />
          <stop offset="100%" stopColor="#38bdf8" />
        </linearGradient>

        {/* Subtle drop shadow for 3D depth on swoosh */}
        <filter id="vh-shadow" x="-10%" y="-10%" width="130%" height="130%">
          <feDropShadow dx="1" dy="2" stdDeviation="2" floodColor="#0f172a" floodOpacity="0.15" />
        </filter>
      </defs>

      {/* --- LETTERFORMS: V & H --- */}

      {/* V Left Stem - 3D outer bevel */}
      <path
        d="M 125 190 L 162 190 L 195 325 L 180 325 Z"
        fill="url(#vh-v-bevel)"
      />

      {/* V Left Stem - Front Face */}
      <path
        d="M 160 190 L 195 190 L 210 325 L 185 325 Z"
        fill="url(#vh-v-face)"
      />

      {/* V Right Arm & Left H Pillar */}
      <path
        d="M 188 325 L 242 190 L 275 190 L 275 325 L 245 325 L 245 250 L 212 325 Z"
        fill="url(#vh-h-left-stem)"
      />

      {/* H Horizontal Crossbar */}
      <rect
        x="260"
        y="270"
        width="75"
        height="28"
        fill="url(#vh-h-crossbar)"
      />

      {/* H Right Pillar */}
      <rect
        x="325"
        y="215"
        width="30"
        height="110"
        fill="url(#vh-h-right-stem)"
      />

      {/* --- DYNAMIC RISING ARROW SWOOSH --- */}

      {/* Lower Ribbon Flow of the Swoosh */}
      <path
        d="M 185 325 C 205 315 220 285 255 268 C 290 250 330 220 355 195 L 350 205 C 325 230 285 262 250 280 C 215 298 198 322 185 325 Z"
        fill="url(#vh-swoosh-grad)"
        filter="url(#vh-shadow)"
      />

      {/* Upper Ribbon Flow of the Swoosh */}
      <path
        d="M 188 322 C 200 300 225 260 262 245 C 300 230 335 195 358 175 C 352 185 325 215 290 232 C 255 250 220 285 200 320 Z"
        fill="url(#vh-swoosh-grad)"
        filter="url(#vh-shadow)"
      />

      {/* Dynamic Arrowhead */}
      <path
        d="M 335 178 L 382 160 L 375 206 L 362 195 L 355 195 Z"
        fill="url(#vh-swoosh-grad)"
        filter="url(#vh-shadow)"
      />
    </svg>
  );
};
