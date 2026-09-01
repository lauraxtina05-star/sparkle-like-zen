# Sparkle Like Zen — launch setup

The site is ready to live in a GitHub repository. Before launch, replace these placeholders:

- `https://formspree.io/f/YOUR_FORM_ID` in `app/page.tsx` and `app/private-work/page.tsx` with Zen's Formspree form endpoint.
- `https://YOUR-MAILERLITE-FORM-URL` in `app/page.tsx` with Zen's MailerLite embedded-form action URL.
- Placeholder `#` links in `app/components.tsx` and `app/page.tsx` with the live Instagram, WhatsApp, Etsy, and shop URLs.
- `hello@sparklelikezen.com` if Zen uses a different public email.
- Set `NEXT_PUBLIC_SITE_URL` to the final live domain if it is not `https://sparklelikezen.com`; this keeps shared social links pointed at the correct preview image.

Run locally with `npm run dev`; create the production bundle with `npm run build`.
