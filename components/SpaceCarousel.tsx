"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

export type SpaceSlide = {
  src: string;
  alt: string;
  title: string;
  description: string;
};

type SpaceCarouselProps = {
  slides: SpaceSlide[];
};

const AUTOPLAY_INTERVAL = 6000;

export function SpaceCarousel({ slides }: SpaceCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(true);
  const touchStart = useRef<number | null>(null);

  const show = useCallback(
    (index: number) => {
      setCurrent((index + slides.length) % slides.length);
    },
    [slides.length],
  );

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(media.matches);

    updatePreference();
    media.addEventListener("change", updatePreference);
    return () => media.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    if (isPaused || prefersReducedMotion || slides.length < 2) return;

    const timer = window.setInterval(() => {
      setCurrent((index) => (index + 1) % slides.length);
    }, AUTOPLAY_INTERVAL);

    return () => window.clearInterval(timer);
  }, [isPaused, prefersReducedMotion, slides.length]);

  if (slides.length === 0) return null;

  return (
    <div
      className="carousel"
      role="region"
      aria-roledescription="轮播图"
      aria-label="燧里店内空间"
      tabIndex={0}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setIsPaused(false);
      }}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") show(current - 1);
        if (event.key === "ArrowRight") show(current + 1);
      }}
      onTouchStart={(event) => {
        touchStart.current = event.touches[0]?.clientX ?? null;
      }}
      onTouchEnd={(event) => {
        if (touchStart.current === null) return;
        const distance = (event.changedTouches[0]?.clientX ?? touchStart.current) - touchStart.current;
        touchStart.current = null;
        if (Math.abs(distance) > 45) show(current + (distance < 0 ? 1 : -1));
      }}
    >
      <div className="carousel-viewport">
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide, index) => {
            const active = index === current;
            return (
              <figure
                className={`slide${active ? " is-active" : ""}`}
                key={slide.src}
                aria-hidden={!active}
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 640px) 100vw, 100vw"
                />
                <figcaption>
                  <span>{slide.title}</span>
                  <small>{slide.description}</small>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>

      <div className="carousel-bar">
        <p className="carousel-count" aria-live="polite" aria-atomic="true">
          <strong>{String(current + 1).padStart(2, "0")}</strong>
          <span>/ {String(slides.length).padStart(2, "0")}</span>
        </p>
        <div className="carousel-progress" aria-hidden="true">
          <span
            style={{
              width: `${100 / slides.length}%`,
              transform: `translateX(${current * 100}%)`,
            }}
          />
        </div>
        <div className="carousel-controls">
          <button
            className="carousel-btn"
            type="button"
            aria-label="上一张店内环境图"
            onClick={() => show(current - 1)}
          >
            ←
          </button>
          <button
            className="carousel-btn"
            type="button"
            aria-label="下一张店内环境图"
            onClick={() => show(current + 1)}
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}
