'use client';

import {useEffect, useRef, useState} from 'react';

/*
  Cal.com booking for Sparkle Like Zen.

  Every bookable thing is a Cal event type under Zen's account.
  To add a new one (a paid circle, a workshop), create the event in Cal,
  then use its slug:

    <CalBookingButton event="full-moon-circle">Reserve your spot</CalBookingButton>
    <CalInlineBooking event="full-moon-circle" label="Book the Full Moon Circle"/>

  Payments for paid events are set up inside Cal (Stripe app on the event type).
*/

const calUser = 'zenaida-duarte-rgkmmm';
const calOrigin = 'https://app.cal.com';
const embedScript = 'https://app.cal.com/embed/embed.js';

export const calEvents = {
  innerTemple: 'inner-temple',
  connectionCall: 'connection-call',
} as const;

const layoutConfig = {layout: 'month_view', useSlotsViewOnSmallScreen: 'true'};
const uiConfig = {
  hideEventTypeDetails: false,
  layout: 'month_view',
  theme: 'light',
  cssVarsPerTheme: {light: {'cal-brand': '#a62e35'}},
};

type CalNamespace = (...args: unknown[]) => void;
type CalApi = ((...args: unknown[]) => void) & {
  loaded?: boolean;
  ns?: Record<string, CalNamespace>;
  q?: unknown[];
  config?: Record<string, unknown>;
};

declare global {
  interface Window { Cal?: CalApi }
}

export function calUrl(event: string) {
  return `https://cal.com/${calUser}/${event}`;
}

/* Cal's official loader snippet, wrapped so it only runs in the browser. */
function ensureCal(): CalApi {
  if (!window.Cal) {
    (function (C: Window & {Cal?: CalApi}, A: string, L: string) {
      const p = function (a: {q: unknown[]}, ar: unknown) { a.q.push(ar); };
      const d = C.document;
      C.Cal = C.Cal || (function (...ar: unknown[]) {
        const cal = C.Cal as CalApi;
        if (!cal.loaded) {
          cal.ns = {};
          cal.q = cal.q || [];
          const script = d.createElement('script');
          script.src = A;
          d.head.appendChild(script);
          cal.loaded = true;
        }
        if (ar[0] === L) {
          const api = function (...args: unknown[]) { p(api as unknown as {q: unknown[]}, args); } as unknown as CalNamespace & {q: unknown[]};
          const namespace = ar[1];
          api.q = api.q || [];
          if (typeof namespace === 'string') {
            cal.ns![namespace] = cal.ns![namespace] || api;
            p(cal.ns![namespace] as unknown as {q: unknown[]}, ar);
            p(cal as unknown as {q: unknown[]}, ['initNamespace', namespace]);
          } else p(cal as unknown as {q: unknown[]}, ar);
          return;
        }
        p(cal as unknown as {q: unknown[]}, ar);
      } as CalApi);
    })(window, embedScript, 'init');
  }
  return window.Cal!;
}

const styled = new Set<string>();

/* Returns the Cal namespace for an event, or undefined if Cal isn't ready. Never throws. */
function getNamespace(event: string): CalNamespace | undefined {
  try {
    const Cal = ensureCal();
    if (typeof Cal.ns?.[event] !== 'function') {
      Cal('init', event, {origin: calOrigin});
      Cal.config = Cal.config || {};
      Cal.config.forwardQueryParams = true;
    }
    const ns = window.Cal?.ns?.[event];
    if (typeof ns !== 'function') return undefined;
    if (!styled.has(event)) {
      styled.add(event);
      ns('ui', uiConfig);
    }
    return ns;
  } catch {
    return undefined;
  }
}

/* Runs `run` once Cal is ready for this event, retrying for up to ~10 seconds. */
function whenReady(event: string, run: (ns: CalNamespace) => void, onGiveUp?: () => void) {
  let cancelled = false;
  let tries = 0;
  const attempt = () => {
    if (cancelled) return;
    const ns = getNamespace(event);
    if (ns) {
      try { run(ns); } catch { onGiveUp?.(); }
    } else if (tries++ < 65) {
      setTimeout(attempt, 150);
    } else {
      onGiveUp?.();
    }
  };
  attempt();
  return () => { cancelled = true; };
}

function useEmbedFailure() {
  const [failed, setFailed] = useState(false);
  useEffect(() => {
    const script = document.querySelector(`script[src="${embedScript}"]`);
    const onError = () => setFailed(true);
    script?.addEventListener('error', onError);
    return () => script?.removeEventListener('error', onError);
  }, []);
  return [failed, setFailed] as const;
}

/* A button that opens the Cal booking calendar as a pop-up. */
export function CalBookingButton({event, children, className = 'button button-accent'}: {event: string; children: React.ReactNode; className?: string}) {
  const [failed] = useEmbedFailure();

  // Warm up Cal so the pop-up opens fast.
  useEffect(() => whenReady(event, () => {}), [event]);

  function openBooking() {
    const ns = failed ? undefined : getNamespace(event);
    if (!ns) {
      window.open(calUrl(event), '_blank', 'noopener');
      return;
    }
    try {
      ns('modal', {calLink: `${calUser}/${event}`, config: layoutConfig});
    } catch {
      window.open(calUrl(event), '_blank', 'noopener');
    }
  }

  return <>
    <button type="button" className={className} onClick={openBooking}>{children}</button>
    {failed && <span className="calendly-popup-fallback" role="status">The calendar didn’t open here. <a href={calUrl(event)} target="_blank" rel="noopener noreferrer">Open the booking calendar</a></span>}
  </>;
}

/* The Cal booking calendar embedded right on the page. */
export function CalInlineBooking({event, label}: {event: string; label: string}) {
  const container = useRef<HTMLDivElement>(null);
  const [failed, setFailed] = useEmbedFailure();

  useEffect(() => {
    const el = container.current;
    if (!el || el.dataset.calMounted) return;
    return whenReady(event, (ns) => {
      if (el.dataset.calMounted) return;
      el.dataset.calMounted = 'true';
      ns('inline', {elementOrSelector: el, config: layoutConfig, calLink: `${calUser}/${event}`});
    }, () => setFailed(true));
  }, [event, setFailed]);

  return <>
    <div ref={container} className="inner-temple-calendar" style={{height: 'auto', minHeight: 560, overflow: 'visible'}} aria-label={label} />
    <p className="calendar-fallback">{failed ? 'The calendar is unavailable right now. ' : ''}<a href={calUrl(event)} target="_blank" rel="noopener noreferrer">Open the booking calendar</a></p>
  </>;
}
