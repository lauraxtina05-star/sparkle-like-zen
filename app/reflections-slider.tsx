'use client';

import {useCallback, useRef, useState} from 'react';
import type {CSSProperties, KeyboardEvent, PointerEvent} from 'react';
import {reflections} from './reflections-data';

const pad = (n: number) => n.toString().padStart(2, '0');

export function ReflectionsSlider() {
  const total = reflections.length;
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState<1 | -1>(1);
  const start = useRef<{x: number; y: number} | null>(null);

  const go = useCallback(
    (delta: 1 | -1) => {
      setDir(delta);
      setIndex((i) => (i + delta + total) % total);
    },
    [total],
  );
  const prev = useCallback(() => go(-1), [go]);
  const next = useCallback(() => go(1), [go]);

  function onKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      prev();
    } else if (event.key === 'ArrowRight') {
      event.preventDefault();
      next();
    }
  }

  function onPointerDown(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType === 'mouse') return;
    start.current = {x: event.clientX, y: event.clientY};
  }

  function onPointerUp(event: PointerEvent<HTMLDivElement>) {
    const from = start.current;
    start.current = null;
    if (!from) return;
    const dx = event.clientX - from.x;
    const dy = event.clientY - from.y;
    if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy)) {
      if (dx < 0) next();
      else prev();
    }
  }

  const current = reflections[index];

  return (
    <section className="reflections-slider reveal" aria-label="Client reflections">
      <div className="slider-inner" style={{'--enter-x': `${dir * 18}px`} as CSSProperties}>
        <div
          className="slider-viewport"
          tabIndex={0}
          role="group"
          aria-roledescription="carousel"
          aria-label={`Reflection ${index + 1} of ${total}`}
          onKeyDown={onKeyDown}
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
          onPointerCancel={() => {
            start.current = null;
          }}
        >
          <blockquote className="slide" key={index}>
            <p className="slide-text">{current.quote}</p>
            <div className="slide-attr">
              <cite className="slide-name">{current.name}</cite>
            </div>
          </blockquote>
        </div>

        <div className="slider-nav">
          <button type="button" className="slider-arrow" data-dir="prev" onClick={prev} aria-label="Previous reflection">
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
              <path d="M15 4 7 12l8 8" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <p className="slider-progress" aria-hidden="true">
            <span className="current">{pad(index + 1)}</span>
            <span className="sep">/</span>
            <span className="total">{pad(total)}</span>
          </p>
          <button type="button" className="slider-arrow" data-dir="next" onClick={next} aria-label="Next reflection">
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
              <path d="M9 4l8 8-8 8" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      <p className="sr-only" aria-live="polite">{`Reflection ${index + 1} of ${total}. ${current.name}.`}</p>
    </section>
  );
}
