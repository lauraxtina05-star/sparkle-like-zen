import Image from 'next/image';

export function Header({dark=false}:{dark?:boolean}) {
  return <header className={`site-header ${dark?'header-dark':''}`}>
    <a href="/" className="brand" aria-label="Sparkle Like Zen home"><Image src="/images/zen-logo.png" alt="" width={58} height={58} priority /><span>Sparkle Like Zen</span></a>
    <nav aria-label="Primary navigation"><a href="/">Home</a><a href="/about">About</a><a href="/private-work">Private Work</a><a href="/#circles">Circles + Events</a><a href="/#crystals">Crystals</a><a href="/#contact">Contact</a></nav>
    <a className="button button-small" href="/#contact">Book / Inquire</a>
  </header>;
}

export function Footer() {
  return <footer><div className="footer-brand"><Image src="/images/zen-logo.png" alt="Sparkle Like Zen" width={120} height={120}/><p>Reconnect with the Divine. Trust what is already within you.</p></div><div><p className="footer-title">Explore</p><a href="/about">About Zen</a><a href="/private-work">Private Work</a><a href="/#circles">Circles + Events</a><a href="/#crystals">Crystals</a></div><div><p className="footer-title">Connect</p><a href="mailto:info@sparklelikezen.com">info@sparklelikezen.com</a><a href="tel:+17862018993">786-201-8993</a><a href="https://wa.me/17862018993">WhatsApp</a><a href="#">Instagram</a><a href="https://www.etsy.com/shop/ShopSparkleLikeZen?etsrc=sdt">Etsy</a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Sparkle Like Zen</span><span>Digital Experience by ONYX Creatrix</span></div></footer>;
}
