interface LogoProps {
  size?: number;
  className?: string;
}

export default function Logo({ size = 48, className = "" }: LogoProps) {
  return (
    <img
      src="/logo.png"
      alt="Constrong Logo"
      width={size}
      height={size}
      className={className}
    />
  );
}
