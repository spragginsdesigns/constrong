import Image from "next/image";

interface LogoProps {
  size?: number;
  className?: string;
}

export default function Logo({ size = 48, className = "" }: LogoProps) {
  return (
    <Image
      src="/logo.png"
      alt="Constrong Logo"
      width={size}
      height={size}
      className={className}
      priority
      unoptimized
    />
  );
}
