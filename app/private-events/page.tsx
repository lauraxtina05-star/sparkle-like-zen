import Image from 'next/image';
import {Footer, Header} from '../components';
import {EventInquiryForm} from '../inquiry-form';

export default function PrivateEvents(){return <main><Header dark/>
<section className="event-hero"><div className="event-hero-copy reveal"><p className="eyebrow">Private events + collaborations</p><h1>Tell me what is taking shape.</h1><p>I create birthday gatherings, corporate experiences, retreats, collaborations, workshops, crystal bars, and other intentional moments.</p></div><div className="event-hero-art" aria-hidden="true"><Image src="/images/celestial-corner.png" alt="" fill priority sizes="(max-width:850px) 100vw, 48vw"/><span>Made for<br/>the moment.</span></div></section>
<section className="event-form-section"><div><p className="eyebrow">A gathering shaped around the people in the room</p><h2>Start with the feeling worth creating.</h2><p>Every detail does not need to be decided yet. Share what is known so far, and I can begin understanding the shape of the experience.</p></div><EventInquiryForm/></section>
<Footer/></main>}
