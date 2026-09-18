"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react";

type Props = {
  images: string[];
  title: string;
};

// Zoom in / out feature for Gallery View
const MIN_SCALE = 1;
const MAX_SCALE = 3;
const STEP = 0.5;

export default function ProjectGallery({ images, title }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [scale, setScale] = useState(1);
  const [origin, setOrigin] = useState({ x: 50, y: 50 });
  const imgWrapperRef = useRef<HTMLDivElement>(null);

  const openAt = (i: number) => {
    setOpenIndex(i);
    setScale(1);
    setOrigin({ x: 50, y: 50 });
  };
  const close = () => {
    setOpenIndex(null);
    setScale(1);
    setOrigin({ x: 50, y: 50 });
  };
  const prev = () => {
    setOpenIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length));
    setScale(1);
    setOrigin({ x: 50, y: 50 });
  };
  const next = () => {
    setOpenIndex((i) => (i === null ? null : (i + 1) % images.length));
    setScale(1);
    setOrigin({ x: 50, y: 50 });
  };

  const updateOriginFromPointer = (clientX: number, clientY: number) => {
    const rect = imgWrapperRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((clientX - rect.left) / rect.width) * 100;
    const y = ((clientY - rect.top) / rect.height) * 100;
    setOrigin({
      x: Math.min(100, Math.max(0, x)),
      y: Math.min(100, Math.max(0, y)),
    });
  };

  const zoomIn = () => setScale((s) => Math.min(MAX_SCALE, +(s + STEP).toFixed(2)));
  const zoomOut = () => setScale((s) => Math.max(MIN_SCALE, +(s - STEP).toFixed(2)));
  
  const toggleZoom = (clientX: number, clientY: number) => {
    updateOriginFromPointer(clientX, clientY);
    setScale((s) => (s > 1 ? 1 : 2));
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    updateOriginFromPointer(e.clientX, e.clientY);
    if (e.deltaY < 0) zoomIn();
    else zoomOut();
  };

  return (
    <>
      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => openAt(i)}
            className="aspect-video overflow-hidden rounded-lg border border-line"
          >
            <Image
              src={src}
              alt={`${title} screenshot ${i + 1}`}
              width={400}
              height={225}
              className="h-full w-full object-cover transition-transform hover:scale-105"
            />
          </button>
        ))}
      </div>

      {openIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 px-6"
          onClick={close}
          onWheel={handleWheel}
        >
          <button
            type="button"
            onClick={close}
            className="absolute right-6 top-6 text-white/70 hover:text-white"
            aria-label="Close"
          >
            <X size={28} />
          </button>

          {/* Zoom controls */}
          <div
            className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={zoomOut}
              disabled={scale <= MIN_SCALE}
              className="text-white/70 hover:text-white disabled:opacity-30"
              aria-label="Zoom out"
            >
              <ZoomOut size={20} />
            </button>
            <span className="w-12 text-center text-xs text-white/70">
              {Math.round(scale * 100)}%
            </span>
            <button
              type="button"
              onClick={zoomIn}
              disabled={scale >= MAX_SCALE}
              className="text-white/70 hover:text-white disabled:opacity-30"
              aria-label="Zoom in"
            >
              <ZoomIn size={20} />
            </button>
          </div>

          {images.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-4 text-white/70 hover:text-white"
              aria-label="Previous image"
            >
              <ChevronLeft size={32} />
            </button>
          )}

          <div ref={imgWrapperRef} className="h-[85vh] w-auto max-w-full overflow-hidden">
            <Image
              src={images[openIndex]}
              alt={`${title} screenshot ${openIndex + 1}`}
              width={1920}
              height={1080}
              onClick={(e) => {
                e.stopPropagation();
                toggleZoom(e.clientX, e.clientY);
              }}
              onDoubleClick={(e) => {
                e.stopPropagation();
                toggleZoom(e.clientX, e.clientY);
              }}
              style={{
                transform: `scale(${scale})`,
                transformOrigin: `${origin.x}% ${origin.y}%`,
              }}
              className="h-[85vh] w-auto max-w-full rounded-lg object-contain transition-transform duration-150 cursor-zoom-in"
            />
          </div>

          {images.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-4 text-white/70 hover:text-white"
              aria-label="Next image"
            >
              <ChevronRight size={32} />
            </button>
          )}
        </div>
      )}
    </>
  );
}