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
  instance?: unknown;
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

/* Cal's official loader snippet. It creates a placeholder that loads Cal's script. */
function installCalLoader() {
  if (window.Cal) return;
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

let calPromise: Promise<CalApi> | undefined;

/*
  Resolves once the real Cal script is running.
  We only talk to Cal after this, because calls queued on the placeholder
  during start-up were getting dropped.
*/
function calReady(): Promise<CalApi> {
  if (calPromise) return calPromise;
  calPromise = new Promise<CalApi>((resolve, reject) => {
    installCalLoader();
    if (!window.Cal!.instance) window.Cal!('init', {origin: calOrigin});
    const started = Date.now();
    const check = () => {
      if (window.Cal?.instance) resolve(window.Cal);
      else if (Date.now() - started > 12000) reject(new Error('Cal did not load'));
      else setTimeout(check, 100);
    };
    check();
  }).catch((error) => {
    calPromise = undefined;
    throw error;
  });
  return calPromise;
}

const styled = new Set<string>();

/* The Cal namespace for one event. Call only after calReady() resolves. */
function calNamespace(Cal: CalApi, event: string): CalNamespace {
  if (typeof Cal.ns?.[event] !== 'function') {
    Cal('init', event, {origin: calOrigin});
    Cal.config = Cal.config || {};
    Cal.config.forwardQueryParams = true;
  }
  const ns = Cal.ns?.[event];
  if (typeof ns !== 'function') throw new Error(`Cal namespace ${event} unavailable`);
  if (!styled.has(event)) {
    styled.add(event);
    ns('ui', uiConfig);
  }
  return ns;
}

/* A button that opens the Cal booking calendar as a pop-up. */
export function CalBookingButton({event, children, className = 'button button-accent'}: {event: string; children: React.ReactNode; className?: string}) {
  const [failed, setFailed] = useState(false);

  // Load Cal in the background so the pop-up opens instantly.
  useEffect(() => {
    let active = true;
    calReady().then((Cal) => calNamespace(Cal, event)).catch(() => { if (active) setFailed(true); });
    return () => { active = false; };
  }, [event]);

  function openBooking() {
    const Cal = window.Cal;
    try {
      if (!Cal?.instance) throw new Error('Cal not ready');
      calNamespace(Cal, event)('modal', {calLink: `${calUser}/${event}`, config: layoutConfig});
    } catch {
      window.open(calUrl(event), '_blank', 'noopener');
    }
  }

  return <>
    <button type="button" className={className} onClick={openBooking}>{children}</button>
    {failed && <span className="calendly-popup-fallback" role="status">The calendar didn’t load here. <a href={calUrl(event)} target="_blank" rel="noopener noreferrer">Open the booking calendar</a></span>}
  </>;
}

/* The Cal booking calendar embedded right on the page. */
export function CalInlineBooking({event, label}: {event: string; label: string}) {
  const container = useRef<HTMLDivElement>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let active = true;
    calReady().then((Cal) => {
      const el = container.current;
      if (!active || !el || el.dataset.calMounted) return;
      el.dataset.calMounted = 'true';
      calNamespace(Cal, event)('inline', {elementOrSelector: el, config: layoutConfig, calLink: `${calUser}/${event}`});
    }).catch(() => { if (active) setFailed(true); });
    return () => { active = false; };
  }, [event]);

  return <>
    <div ref={container} className="inner-temple-calendar" style={{height: 'auto', minHeight: 560, overflow: 'visible'}} aria-label={label} />
    <p className="calendar-fallback">{failed ? 'The calendar is unavailable right now. ' : ''}<a href={calUrl(event)} target="_blank" rel="noopener noreferrer">Open the booking calendar</a></p>
  </>;
}
