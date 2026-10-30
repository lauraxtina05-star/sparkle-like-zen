# Sparkle Like Zen setup

The site is ready for the existing business integrations. Replace only these placeholders when the live embed/action URLs are available:

- `https://formspree.io/f/xgaeykwp` for The Inner Temple and general client inquiries.
- `https://formspree.io/f/YOUR_EVENT_FORM_ID` for private events and collaborations.
- `https://YOUR-MAILERLITE-FORM-URL` for circle and newsletter signup.

Do not place API keys, account passwords, or other credentials in the repository. These forms require only the public submission URLs supplied by Formspree and MailerLite.

## Booking (Cal.com)

All booking runs through Cal.com (account: zenaida-duarte-rgkmmm). Event slugs live in `app/cal-booking.tsx` under `calEvents`:

- `inner-temple` for The Inner Temple ($111 session)
- `connection-call` for the connection call

To add a paid event, create it in Cal, turn on payments for that event type, then use `<CalBookingButton event="your-slug">` or `<CalInlineBooking event="your-slug" label="..."/>`.
