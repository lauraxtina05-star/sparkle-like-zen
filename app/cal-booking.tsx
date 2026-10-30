'use client';

import {useEffect, useState} from 'react';
import {createPortal} from 'react-dom';

/*
  Cal.com booking for Sparkle Like Zen.

  Every bookable thing is a Cal event type under Zen's account.
  To add a new one (a paid circle, a workshop), create the event in Cal,
  then use its slug:

    <CalBookingButton event="full-moon-circle">Reserve your spot</CalBookingButton>
    <CalInlineBooking event="full-moon-circle" label="Book the Full Moon Circle"/>

  Current events: "inner-temple" and "connection-call".
  Pass the slug as a plain string. (Values exported from this 'use client'
  file come through as undefined in server pages, so don't share constants here.)

  Payments for paid events are set up inside Cal (Stripe app on the event type).

  The booking page is shown in a frame. This needs no Cal script, so there is
  nothing to load or initialise and nothing that can break the page.
*/

const calUser = 'zenaida-duarte-rgkmmm';

export function calUrl(event: string) {
  return `https://cal.com/${calUser}/${event}`;
}

function calFrameUrl(event: string) {
  return `${calUrl(event)}?layout=month_view`;
}

/* A button that opens the booking calendar in a pop-up over the page. */
export function CalBookingButton({event, children, className = 'button button-accent'}: {event: string; children: React.ReactNode; className?: string}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return <>
    <button type="button" className={className} onClick={() => setOpen(true)}>{children}</button>
    {open && createPortal(<div
      role="dialog"
      aria-modal="true"
      aria-label="Booking calendar"
      onClick={() => setOpen(false)}
      style={{position: 'fixed', inset: 0, zIndex: 1000, background: 'rgba(6,16,10,.72)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 12}}
    >
      <div onClick={(e) => e.stopPropagation()} style={{position: 'relative', width: 'min(1000px, 100%)', height: 'min(820px, 100%)', background: '#101010', borderRadius: 10, overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,.45)'}}>
        <iframe src={calFrameUrl(event)} title="Booking calendar" style={{width: '100%', height: '100%', border: 0, display: 'block'}} allow="payment" />
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Close booking calendar"
          style={{position: 'absolute', top: 8, left: 8, width: 36, height: 36, borderRadius: '50%', border: 0, background: '#f4e8d2', color: '#06100a', fontSize: 20, lineHeight: '36px', cursor: 'pointer'}}
        >×</button>
      </div>
    </div>, document.body)}
  </>;
}

/* The booking calendar embedded right on the page. */
export function CalInlineBooking({event, label}: {event: string; label: string}) {
  return <>
    <div className="inner-temple-calendar">
      <iframe src={calFrameUrl(event)} title={label} loading="lazy" style={{width: '100%', height: '100%', border: 0, display: 'block'}} allow="payment" />
    </div>
    <p className="calendar-fallback"><a href={calUrl(event)} target="_blank" rel="noopener noreferrer">Open the booking calendar in a new tab</a></p>
  </>;
}
