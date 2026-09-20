import type {Metadata} from 'next';
import Image from 'next/image';
import {CalendlyBookingButton} from '../calendly-booking';

export const metadata:Metadata={
  title:'Connect | Sparkle Like Zen',
  description:'Explore The Inner Temple, circles, crystal guidance, and ways to stay connected with Sparkle Like Zen.',
};

const whatsappCommunity='https://whatsapp.com/channel/0029Vb6ifQHAzNc3UktZe936';

function ArrowIcon(){return <svg className="links-arrow" aria-hidden="true" viewBox="0 0 24 24" width="20" height="20" fill="none">
  <path d="M5 12h13M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>}

export default function LinksPage(){return <main className="links-page">
  <div className="links-atmosphere" aria-hidden="true"><Image src="/images/celestial-orbit.png" alt="" fill sizes="100vw"/></div>
  <section className="links-shell">
    <header className="links-intro">
      <a href="/" aria-label="Sparkle Like Zen home"><Image className="links-logo" src="/images/lotus-hand-logo.png" alt="" width={94} height={94} priority/></a>
      <div className="links-gong-image"><Image src="/images/hero-gong.JPG" alt="Zen seated in front of a gong" fill priority sizes="(max-width: 620px) calc(100vw - 36px), 580px"/></div>
      <p className="eyebrow">A quiet space</p>
      <h1>Sparkle Like Zen</h1>
      <p className="links-deck">A quiet space for reflection, reconnection, and inner knowing.</p>
    </header>

    <nav className="links-primary" aria-label="Sparkle Like Zen links">
      <a className="links-feature links-feature-main" href="/private-work"><span>Explore The Inner Temple</span><ArrowIcon/></a>
      <CalendlyBookingButton className="links-feature links-feature-book"><span>Book The Inner Temple</span><ArrowIcon/></CalendlyBookingButton>

      <div className="links-editorial">
        <a href="/circles-events"><span>Circles + Events</span><ArrowIcon/></a>
        <a href="/crystals"><span>Crystal Concierge</span><ArrowIcon/></a>
      </div>

      <a className="links-community" href={whatsappCommunity} target="_blank" rel="noopener noreferrer"><span className="eyebrow">Stay close</span><strong>Join My WhatsApp Community</strong><ArrowIcon/></a>
      <a className="links-newsletter" href="/#community"><span>Stay Connected</span><small>Notes, circles, and thoughtful offerings</small><ArrowIcon/></a>
    </nav>

    <nav className="links-secondary" aria-label="More Sparkle Like Zen links">
      <a href="/client-reflections"><span>Client Reflections</span><ArrowIcon/></a>
      <a href="/about"><span>About Me</span><ArrowIcon/></a>
      <a href="https://www.etsy.com/shop/ShopSparkleLikeZen?etsrc=sdt" target="_blank" rel="noopener noreferrer"><span>Shop on Etsy</span><ArrowIcon/></a>
      <a href="https://www.instagram.com/sparklelikezen?igsi=MWFhb3QxY2tybWdteg==" target="_blank" rel="noopener noreferrer"><span>Instagram</span><ArrowIcon/></a>
    </nav>

    <footer className="links-footer"><a href="https://sparklelikezen.com/">sparklelikezen.com</a></footer>
  </section>
</main>}
