'use client';

import {useEffect, useRef, useState} from 'react';

const eventUrl = 'https://calendly.com/sparklelikezen-info/the-inner-temple';
const styledEventUrl = `${eventUrl}?background_color=f4e8d2&text_color=06100a&primary_color=a62e35`;
const scriptUrl = 'https://assets.calendly.com/assets/external/widget.js';

type CalendlyWidget = {
  initInlineWidget: (options: {url: string; parentElement: HTMLElement}) => void;
  initPopupWidget: (options: {url: string}) => void;
};

declare global {
  interface Window { Calendly?: CalendlyWidget }
}

let widgetPromise: Promise<CalendlyWidget> | undefined;

function loadCalendly(): Promise<CalendlyWidget> {
  if (window.Calendly) return Promise.resolve(window.Calendly);
  if (widgetPromise) return widgetPromise;

  const pending = new Promise<CalendlyWidget>((resolve, reject) => {
    const script = document.createElement('script');
    script.src = scriptUrl;
    script.async = true;
    script.onload = () => window.Calendly ? resolve(window.Calendly) : reject(new Error('Calendly did not initialize'));
    script.onerror = () => reject(new Error('Calendly could not load'));
    document.head.appendChild(script);
  }).catch((error) => {
    widgetPromise = undefined;
    document.querySelector(`script[src="${scriptUrl}"]`)?.remove();
    throw error;
  });

  widgetPromise = pending;
  return pending;
}

export function CalendlyBookingButton({children, className = 'button button-accent'}: {children: React.ReactNode; className?: string}) {
  const [loading, setLoading] = useState(false);
  const [failed, setFailed] = useState(false);

  async function openBooking() {
    if (loading) return;
    setLoading(true);
    setFailed(false);
    try {
      const widget = await loadCalendly();
      widget.initPopupWidget({url: styledEventUrl});
    } catch {
      setFailed(true);
    } finally {
      setLoading(false);
    }
  }

  return <>
    <button type="button" className={className} onClick={openBooking} disabled={loading}>{children}</button>
    {failed && <span className="calendly-popup-fallback" role="status">The calendar could not open. <a href={eventUrl} target="_blank" rel="noopener noreferrer">Open the booking calendar</a></span>}
  </>;
}

export function CalendlyInlineBooking() {
  const container = useRef<HTMLDivElement>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let active = true;
    loadCalendly().then((widget) => {
      if (active && container.current) widget.initInlineWidget({url: styledEventUrl, parentElement: container.current});
    }).catch(() => {
      if (active) setFailed(true);
    });
    return () => { active = false; };
  }, []);

  return <>
    <div ref={container} className="inner-temple-calendar" aria-label="Book an Inner Temple session" />
    <p className="calendar-fallback">{failed ? 'The calendar is unavailable right now. ' : ''}<a href={eventUrl} target="_blank" rel="noopener noreferrer">Open the booking calendar</a></p>
  </>;
}
