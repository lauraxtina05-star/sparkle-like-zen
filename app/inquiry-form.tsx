'use client';

import {FormEvent, useRef, useState} from 'react';

type Status = 'idle'|'sending'|'success'|'error';

function useFormspree(endpoint: string) {
  const [status, setStatus] = useState<Status>('idle');
  const sending = useRef(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending.current) return;
    const form = event.currentTarget;
    sending.current = true;
    setStatus('sending');
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        body: new FormData(form),
        headers: {Accept: 'application/json'},
      });
      if (!response.ok) throw new Error('Formspree rejected the submission');
      form.reset();
      setStatus('success');
    } catch {
      setStatus('error');
    } finally {
      sending.current = false;
    }
  }

  return {status, submit};
}

export function InquiryForm() {
  const endpoint = 'https://formspree.io/f/xgaeykwp';
  const {status, submit} = useFormspree(endpoint);

  return <form action={endpoint} method="post" onSubmit={submit} aria-busy={status === 'sending'}>
    <input type="hidden" name="interest" value="The Inner Temple"/>
    <label>Name<input name="name" autoComplete="name" required/></label>
    <label>Email<input name="email" type="email" autoComplete="email" required/></label>
    <label>Phone / WhatsApp<input name="phone_whatsapp" type="tel" autoComplete="tel"/></label>
    <label>What kind of support feels most relevant?<input name="support"/></label>
    <label>Virtual / Mobile / Not sure yet<select name="format" defaultValue=""><option value="" disabled>Select one</option><option value="Virtual">Virtual</option><option value="Mobile">Mobile</option><option value="Not sure yet">Not sure yet</option></select></label>
    <label>Preferred contact method<select name="preferred_contact" defaultValue=""><option value="" disabled>Select one</option><option value="WhatsApp">WhatsApp</option><option value="Email">Email</option><option value="Phone">Phone</option></select></label>
    <label>Message<textarea name="message" rows={5}/></label>
    <button className="button button-accent" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : 'Request a Session'}</button>
    <div className="form-status" aria-live="polite">
      {status === 'success' && <p className="form-success">Thank you. Your inquiry has been sent, and I’ll be in touch soon.</p>}
      {status === 'error' && <p className="form-error">Something went wrong while sending your inquiry. Please try again or email info@sparklelikezen.com.</p>}
    </div>
  </form>;
}

export function EventInquiryForm() {
  const endpoint = 'https://formspree.io/f/xdeozzgy';
  const {status, submit} = useFormspree(endpoint);

  return <form action={endpoint} method="post" onSubmit={submit} aria-busy={status === 'sending'}>
    <input type="hidden" name="inquiry_type" value="Private event or collaboration"/>
    <input type="hidden" name="_subject" value="New Sparkle Like Zen Private Event Inquiry"/>
    <label>Name<input name="name" autoComplete="name" required/></label>
    <label>Email<input name="email" type="email" autoComplete="email" required/></label>
    <label>Organization <span>(optional)</span><input name="organization" autoComplete="organization"/></label>
    <label>Type of event<input name="event_type" required/></label>
    <label>Preferred date<input name="preferred_date" type="date"/></label>
    <label>Location<input name="location"/></label>
    <label>Estimated guest count<input name="guest_count" type="number" min={1} inputMode="numeric"/></label>
    <label>Experience of interest<input name="experience"/></label>
    <label>Budget range <span>(optional)</span><input name="budget"/></label>
    <label>Additional details<textarea name="message" rows={5} required/></label>
    <button className="button button-accent" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : 'Plan a Private Experience'}</button>
    <div className="form-status" aria-live="polite">
      {status === 'success' && <p className="form-success">Thank you. I received your inquiry and will be in touch soon.</p>}
      {status === 'error' && <p className="form-error">Something went wrong while sending your inquiry. Please try again or email info@sparklelikezen.com.</p>}
    </div>
  </form>;
}

export function CrystalInquiryForm() {
  const endpoint = 'https://formspree.io/f/mvkorrra';
  const {status, submit} = useFormspree(endpoint);

  return <form action={endpoint} method="post" onSubmit={submit} aria-busy={status === 'sending'}>
    <input type="hidden" name="inquiry_type" value="Crystal Concierge"/>
    <input type="hidden" name="_subject" value="New Sparkle Like Zen Crystal Concierge Inquiry"/>
    <label>Name<input name="name" autoComplete="name" required/></label>
    <label>Email<input name="email" type="email" autoComplete="email" required/></label>
    <label>What are you looking for support with?<textarea name="support" rows={3} required/></label>
    <label>What kind of crystal support are you looking for?<select name="support_type" defaultValue="" required><option value="" disabled>Select one</option><option>A specific crystal</option><option>A curated selection</option><option>General crystal guidance</option><option>Crystal education / workshop</option><option>Not sure yet</option></select></label>
    <label>Budget range <span>(optional)</span><input name="budget"/></label>
    <label>Message <span>(optional)</span><textarea name="message" rows={4}/></label>
    <button className="button button-accent" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : 'Send My Crystal Inquiry'}</button>
    <div className="form-status" aria-live="polite">
      {status === 'success' && <p className="form-success">Thank you. I received your crystal inquiry and will be in touch soon.</p>}
      {status === 'error' && <p className="form-error">Something went wrong while sending your inquiry. Please try again or email info@sparklelikezen.com.</p>}
    </div>
  </form>;
}
