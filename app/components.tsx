import Image from 'next/image';

export function Header({dark=false}:{dark?:boolean}) {
  return <header className={`site-header ${dark?'header-dark':''}`}>
    <a href="/" className="brand" aria-label="Sparkle Like Zen home"><Image src="/images/zen-logo.png" alt="" width={58} height={58} priority /><span>Sparkle Like Zen</span></a>
    <nav aria-label="Primary navigation"><a href="/">Home</a><a href="/about">About</a><a href="/private-work">Private Work</a><a href="/#circles">Circles + Events</a><a href="/#crystals">Crystals</a><a href="/#contact">Contact</a></nav>
    <a className="button button-small" href="/#contact">Book / Inquire</a>
  </header>;
}

export function Footer() {
  return <footer><div className="footer-brand"><Image src="/images/zen-logo.png" alt="Sparkle Like Zen" width={120} height={120}/><p>Reconnect with your true essence.</p></div><div><p className="footer-title">Explore</p><a href="/about">About Zen</a><a href="/private-work">Private Work</a><a href="/#circles">Circles + Events</a><a href="/#crystals">Crystals</a></div><div><p className="footer-title">Connect</p><a href="#">Instagram</a><a href="mailto:hello@sparklelikezen.com">Email</a><a href="#">WhatsApp</a><a href="#">Etsy</a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Sparkle Like Zen</span><span>Digital Experience by ONYX Creatrix</span></div></footer>;
}
