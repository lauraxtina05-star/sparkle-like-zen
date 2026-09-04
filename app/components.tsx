import Image from 'next/image';

const whatsapp = 'https://wa.me/17862018993?text=Hi%20Zen!%20I%20found%20you%20through%20the%20Sparkle%20Like%20Zen%20website%20and%20I%E2%80%99d%20love%20to%20learn%20more%20about%20working%20together.';

export function Header({dark=false}:{dark?:boolean}) {
  const links = <><a href="/">Home</a><a href="/about">About</a><a href="/private-work">The Inner Temple</a><a href="/circles-events">Circles + Events</a><a href="/crystals">Crystals</a><a href="/#community">Contact</a></>;
  return <header className={`site-header ${dark?'header-dark':''}`}>
    <a href="/" className="brand" aria-label="Sparkle Like Zen home"><Image className="lotus-logo" src="/images/lotus-hand-logo.png" alt="" width={62} height={62} priority/><span>Sparkle Like Zen</span></a>
    <nav aria-label="Primary navigation">{links}</nav>
    <details className="mobile-nav"><summary aria-label="Open navigation">Menu</summary><div>{links}</div></details>
    <a className="button button-small" href="/private-work#inquire">Book / Inquire</a>
  </header>;
}

export function Footer() {
  return <footer><div className="footer-brand"><Image className="lotus-logo" src="/images/lotus-hand-logo.png" alt="Sparkle Like Zen" width={120} height={120}/><p>A place to get quiet, reconnect, and trust what is already known within.</p></div><div><p className="footer-title">Explore</p><a href="/">Home</a><a href="/about">About Me</a><a href="/client-reflections">Client Reflections</a><a href="/private-work">The Inner Temple</a><a href="/circles-events">Circles + Events</a><a href="/private-events">Private Events</a><a href="/crystals">Crystals</a></div><div><p className="footer-title">Connect</p><a href="mailto:info@sparklelikezen.com">Email Me</a><a href={whatsapp}>WhatsApp</a><a href="https://www.instagram.com/sparklelikezen?igsi=MWFhb3QxY2tybWdteg==">Instagram</a><a href="https://www.etsy.com/shop/ShopSparkleLikeZen?etsrc=sdt">Etsy</a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Sparkle Like Zen</span><a href="https://onyxcreatrix.com/">Digital Experience by ONYX Creatrix</a></div></footer>;
}
