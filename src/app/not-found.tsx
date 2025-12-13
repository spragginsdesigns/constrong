import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-neutral-950 flex flex-col items-center justify-center px-4">
      {/* Shield Logo */}
      <svg
        width="80"
        height="94"
        viewBox="0 0 500 580"
        fill="none"
        className="mb-8"
      >
        <path
          d="M250 20L450 100V320C450 420 360 520 250 560C140 520 50 420 50 320V100L250 20Z"
          fill="#3d3d3d"
          stroke="#d4a853"
          strokeWidth="8"
        />
        <path
          d="M250 80L400 140V310C400 390 330 470 250 500C170 470 100 390 100 310V140L250 80Z"
          fill="#2a2a2a"
          stroke="#4a4a4a"
          strokeWidth="4"
        />
        <path
          d="M310 220C310 180 285 155 250 155C200 155 165 195 165 280C165 365 200 405 250 405C285 405 310 380 310 340"
          stroke="#d4a853"
          strokeWidth="35"
          strokeLinecap="round"
          fill="none"
        />
      </svg>

      {/* 404 Text */}
      <h1 className="text-7xl font-bold text-white mb-4 tracking-wider">404</h1>

      {/* Message */}
      <p className="text-neutral-400 text-lg mb-8 text-center max-w-md">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>

      {/* Back Home Button */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-500 text-white font-semibold px-6 py-3 rounded transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
        Back to Home
      </Link>

      {/* Contact Info */}
      <p className="text-neutral-500 text-sm mt-12">
        Need help? Call us at{" "}
        <a href="tel:+15192220700" className="text-amber-500 hover:underline">
          519-222-0700
        </a>
      </p>
    </div>
  );
}
