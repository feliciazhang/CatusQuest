import React from "react";

const Console = ({ color="#4D31BF" }) => (
  <svg
    viewBox="0 0 1134 940"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="4" width="1126" height="470" rx="40" fill={color} />
    <rect x="4" y="470" width="1126" height="470" rx="40" fill={color} />
    <circle cx="50.5" cy="118.5" r="6.5" fill="#080010" />
    <circle cx="50.5" cy="139.5" r="6.5" fill="#080010" />
    <ellipse cx="50.5" cy="161" rx="6.5" ry="6" fill="#080010" />
    <circle cx="50.5" cy="181.5" r="6.5" fill="#080010" />
    <circle cx="50.5" cy="203.5" r="6.5" fill="#080010" />
    <ellipse cx="50.5" cy="224" rx="6.5" ry="6" fill="#080010" />
    <circle cx="50.5" cy="245.5" r="6.5" fill="#080010" />
    <circle cx="50.5" cy="266.5" r="6.5" fill="#080010" />
    <circle cx="50.5" cy="288.5" r="6.5" fill="#080010" />
    <ellipse cx="50.5" cy="309" rx="6.5" ry="6" fill="#080010" />
    <circle cx="50.5" cy="330.5" r="6.5" fill="#080010" />
    <circle cx="50.5" cy="351.5" r="6.5" fill="#080010" />
    <circle cx="1083.5" cy="118.5" r="6.5" fill="#080010" />
    <circle cx="1083.5" cy="139.5" r="6.5" fill="#080010" />
    <ellipse cx="1083.5" cy="161" rx="6.5" ry="6" fill="#080010" />
    <circle cx="1083.5" cy="181.5" r="6.5" fill="#080010" />
    <circle cx="1083.5" cy="203.5" r="6.5" fill="#080010" />
    <ellipse cx="1083.5" cy="224" rx="6.5" ry="6" fill="#080010" />
    <circle cx="1083.5" cy="245.5" r="6.5" fill="#080010" />
    <circle cx="1083.5" cy="266.5" r="6.5" fill="#080010" />
    <circle cx="1083.5" cy="288.5" r="6.5" fill="#080010" />
    <ellipse cx="1083.5" cy="309" rx="6.5" ry="6" fill="#080010" />
    <circle cx="1083.5" cy="330.5" r="6.5" fill="#080010" />
    <circle cx="1083.5" cy="351.5" r="6.5" fill="#080010" />
    <g filter="url(#filter0_di)">
      <rect x="4" y="445" width="1126" height="56" rx="20" fill={color} />
    </g>
    <path
      d="M996.578 448C1002.41 454.911 1005.08 482.232 996.578 502M129.422 448C123.587 454.911 120.92 482.232 129.422 502"
      stroke="black"
      strokeOpacity="0.43"
      strokeWidth="4"
      strokeLinecap="round"
    />
    <defs>
      <filter
        id="filter0_di"
        x="0"
        y="445"
        width="1134"
        height="64"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="2" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
        />
        <feBlend mode="normal" in2="shape" result="effect2_innerShadow" />
      </filter>
    </defs>
  </svg>
);

export default Console;
