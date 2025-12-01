interface LogoProps {
  size?: number;
  className?: string;
}

export default function Logo({ size = 48, className = "" }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Shield outline */}
      <path
        d="M50 5L10 20V45C10 70 25 88 50 95C75 88 90 70 90 45V20L50 5Z"
        fill="#1a1a1a"
        stroke="#d4a853"
        strokeWidth="3"
      />
      {/* Inner shield */}
      <path
        d="M50 12L18 24V45C18 66 30 81 50 87C70 81 82 66 82 45V24L50 12Z"
        fill="#0f0f0f"
        stroke="#d4a853"
        strokeWidth="1.5"
      />
      {/* Letter C */}
      <text
        x="50"
        y="62"
        textAnchor="middle"
        fill="#ededed"
        fontSize="40"
        fontWeight="bold"
        fontFamily="Arial, sans-serif"
      >
        C
      </text>
    </svg>
  );
}
