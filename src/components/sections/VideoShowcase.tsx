"use client";

import { useRef, useState } from "react";

export default function VideoShowcase() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
  };

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title">See Us In Action</h2>
          <div className="section-divider" />
          <p className="text-muted mt-4 max-w-2xl mx-auto">
            Watch our team deliver quality concrete work across the Kitchener-Waterloo region
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl">
          <video
            ref={videoRef}
            className="w-full aspect-video object-cover"
            poster="/images/projects/foundations/foundations-01.webp"
            onEnded={handleVideoEnd}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            controls={isPlaying}
            playsInline
          >
            <source src="/images/video/constrong-montage.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Play button overlay */}
          {!isPlaying && (
            <button
              onClick={togglePlay}
              className="absolute inset-0 flex items-center justify-center bg-background/30 hover:bg-background/20 transition-colors group"
              aria-label="Play video"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-accent/90 group-hover:bg-accent flex items-center justify-center transition-all group-hover:scale-110 shadow-lg">
                <svg
                  className="w-8 h-8 md:w-10 md:h-10 text-background ml-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
