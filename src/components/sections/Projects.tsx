"use client";

import { useState } from "react";
import Image from "next/image";
import { PROJECTS } from "@/lib/constants";
import Button from "@/components/ui/Button";

export default function Projects() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll ? PROJECTS : PROJECTS.slice(0, 6);

  const handleImageClick = (image: string, index: number) => {
    setSelectedImage(image);
    setSelectedIndex(index);
  };

  const handlePrev = () => {
    const newIndex = selectedIndex === 0 ? displayedProjects.length - 1 : selectedIndex - 1;
    setSelectedIndex(newIndex);
    setSelectedImage(displayedProjects[newIndex].image);
  };

  const handleNext = () => {
    const newIndex = selectedIndex === displayedProjects.length - 1 ? 0 : selectedIndex + 1;
    setSelectedIndex(newIndex);
    setSelectedImage(displayedProjects[newIndex].image);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") handlePrev();
    if (e.key === "ArrowRight") handleNext();
    if (e.key === "Escape") setSelectedImage(null);
  };

  return (
    <section id="projects" className="py-20 md:py-28 bg-card-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title">Projects</h2>
          <div className="section-divider" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {displayedProjects.map((project, index) => (
            <button
              key={project.id}
              onClick={() => handleImageClick(project.image, index)}
              className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent"
            >
              <Image
                src={project.image}
                alt={project.alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover"
                quality={90}
              />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/40 transition-colors duration-300 flex items-center justify-center">
                <span className="text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium">
                  View
                </span>
              </div>
            </button>
          ))}
        </div>

        {PROJECTS.length > 6 && (
          <div className="text-center mt-10">
            <Button
              variant="outline"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "Collapse" : `View All (${PROJECTS.length})`}
            </Button>
          </div>
        )}
      </div>

      {/* Lightbox with Navigation */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="dialog"
          aria-modal="true"
        >
          {/* Close button */}
          <button
            className="absolute top-4 right-4 text-foreground hover:text-accent transition-colors text-4xl z-10"
            onClick={() => setSelectedImage(null)}
            aria-label="Close"
          >
            &times;
          </button>

          {/* Previous button */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground hover:text-accent transition-colors p-2 z-10"
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            aria-label="Previous image"
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* All images preloaded - only selected one visible */}
          <div
            className="relative w-[90vw] h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {displayedProjects.map((project, index) => (
              <Image
                key={project.id}
                src={project.image}
                alt={project.alt}
                fill
                sizes="90vw"
                className={`object-contain rounded-lg transition-opacity duration-200 ${
                  index === selectedIndex ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
                quality={95}
                priority
              />
            ))}
          </div>

          {/* Next button */}
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-foreground hover:text-accent transition-colors p-2 z-10"
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            aria-label="Next image"
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Image counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-muted text-sm">
            {selectedIndex + 1} / {displayedProjects.length}
          </div>
        </div>
      )}
    </section>
  );
}
