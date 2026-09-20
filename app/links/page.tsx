import type {Metadata} from 'next';
import Image from 'next/image';

export const metadata:Metadata={
  title:'Connect | Sparkle Like Zen',
  description:'Explore The Inner Temple, circles, crystal guidance, and ways to stay connected with Sparkle Like Zen.',
};

const whatsappCommunity='https://whatsapp.com/channel/0029Vb6ifQHAzNc3UktZe936';
const calendly='https://calendly.com/sparklelikezen-info/the-inner-temple';

export default function LinksPage(){return <main className="links-page">
  <div className="links-atmosphere" aria-hidden="true"><Image src="/images/celestial-orbit.png" alt="" fill sizes="100vw"/></div>
  <section className="links-shell">
    <header className="links-intro">
      <a href="/" aria-label="Sparkle Like Zen home"><Image className="links-logo" src="/images/lotus-hand-logo.png" alt="" width={94} height={94} priority/></a>
      <div className="links-portrait"><Image src="/images/about-pic.JPG" alt="Zen, founder of Sparkle Like Zen" fill priority sizes="128px"/></div>
      <p className="eyebrow">Sparkle Like Zen</p>
      <h1>A quiet space for reflection, reconnection, and inner knowing.</h1>
    </header>

    <nav className="links-primary" aria-label="Sparkle Like Zen links">
      <a className="links-feature links-feature-main" href="/private-work"><span>Explore The Inner Temple</span><i aria-hidden="true">→</i></a>
      <a className="links-feature links-feature-book" href={calendly} target="_blank" rel="noopener noreferrer"><span>Book The Inner Temple</span><i aria-hidden="true">↗</i></a>

      <div className="links-editorial">
        <a href="/circles-events"><span>Circles + Events</span><i aria-hidden="true">→</i></a>
        <a href="/crystals"><span>Crystal Concierge</span><i aria-hidden="true">→</i></a>
      </div>

      <a className="links-community" href={whatsappCommunity} target="_blank" rel="noopener noreferrer"><span className="eyebrow">Stay close</span><strong>Join My WhatsApp Community</strong><i aria-hidden="true">↗</i></a>
      <a className="links-newsletter" href="/#community"><span>Stay Connected</span><small>Notes, circles, and thoughtful offerings</small><i aria-hidden="true">→</i></a>
    </nav>

    <nav className="links-secondary" aria-label="More Sparkle Like Zen links">
      <a href="/client-reflections">Client Reflections</a>
      <a href="/about">About Me</a>
      <a href="https://www.etsy.com/shop/ShopSparkleLikeZen?etsrc=sdt" target="_blank" rel="noopener noreferrer">Shop on Etsy ↗</a>
      <a href="https://www.instagram.com/sparklelikezen?igsi=MWFhb3QxY2tybWdteg==" target="_blank" rel="noopener noreferrer">Instagram ↗</a>
    </nav>

    <footer className="links-footer"><a href="https://sparklelikezen.com/">sparklelikezen.com</a></footer>
  </section>
</main>}
