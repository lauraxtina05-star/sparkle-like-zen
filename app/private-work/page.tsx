import Image from 'next/image';
import {Footer, Header} from '../components';
import {InquiryForm} from '../inquiry-form';
import {ReflectionsSlider} from '../reflections-slider';
import {CalendlyBookingButton, CalendlyInlineBooking} from '../calendly-booking';

export default function InnerTemple(){
  return <main className="inner-temple-page">
    <Header dark/>

    <section className="page-hero sparkle-page inner-temple-hero">
      <div className="inner-temple-hero-copy reveal">
        <p className="eyebrow">My signature private session</p>
        <h1>The Inner Temple</h1>
        <p className="inner-temple-subheading">An intimate journey of energy healing, prayer, and sacred connection.</p>
        <div className="session-price"><b>Virtual · 60 minutes · $111</b><span>Mobile available by inquiry. Pricing varies by location and travel.</span></div>
        <div className="actions"><CalendlyBookingButton>Book Your Session</CalendlyBookingButton><a className="text-link" href="#questions">Have a Question? →</a></div>
      </div>
      <div className="page-hero-image image-reveal"><Image src="/images/reiki-treatment.JPG" alt="Zen supporting a client during The Inner Temple" fill priority sizes="(max-width:850px) 100vw, 48vw"/></div>
    </section>

    <section className="temple-introduction reveal">
      <p>Within each of us exists an inner sanctuary. A place of stillness, wisdom, and connection that can be easy to lose touch with in the noise of everyday life.</p>
      <p>The Inner Temple is a personalized virtual experience created to help you return to that space within yourself.</p>
      <p>Through Reiki, intuitive spiritual guidance, crystals, prayer, and reflection, I hold space for you to slow down, listen more deeply, and reconnect with yourself and the Divine.</p>
    </section>

    <section className="experience-flow" aria-label="The Inner Temple experience">
      <article><span>01</span><h3>Reflect</h3><p>Start with what is actually present, without rushing to explain it away.</p></article><i/>
      <article><span>02</span><h3>Receive</h3><p>Allow room for rest, prayer, energetic support, or the practice that fits.</p></article><i/>
      <article><span>03</span><h3>Integrate</h3><p>Make meaning of what surfaced and name something practical to carry forward.</p></article><i/>
      <article><span>04</span><h3>Reconnect</h3><p>Leave closer to your own knowing, not dependent on someone else’s interpretation.</p></article>
    </section>

    <section className="sacred-space">
      <div className="sacred-space-photo image-reveal"><Image src="/images/crystal-grid-on-woman.JPG" alt="A crystal arrangement prepared for an Inner Temple session" fill sizes="(max-width:850px) 100vw, 46vw"/></div>
      <div className="sacred-space-copy reveal">
        <p className="eyebrow">The experience</p>
        <h2>A sacred space, created for you.</h2>
        <p>Before our session, I intuitively select crystals and arrange them on a symbolic representation of your body, placing each stone in relationship with the energy centers, or chakras.</p>
        <p>This crystal arrangement becomes part of the energetic landscape of our session and a focal point for the distance work we share.</p>
        <p>From the comfort of your own space, you are invited to settle in while I offer distance Reiki and gently guide you through the experience.</p>
        <p>Prayer, affirmations, intuitive messages, reflection, or moments of quiet may naturally arise. There may also be invitations to connect with your guardian angels, benevolent ancestors, or the Divine, always in a way that honors your own beliefs and spiritual relationship.</p>
      </div>
    </section>

    <section className="unique-journey reveal">
      <p className="eyebrow">No two sessions are the same</p>
      <h2>A journey uniquely yours.</h2>
      <div><p>No two Inner Temple sessions unfold in exactly the same way.</p><p>Your experience may create space for emotional release, deep rest, clarity, peaceful stillness, spiritual connection, or simply the opportunity to listen to what has been asking for your attention.</p><p>There is nothing you need to perform, achieve, or arrive prepared to understand.</p><p className="unique-closing">You simply bring what is present.</p></div>
    </section>

    <ReflectionsSlider intro={{eyebrow:'Client reflections',title:'In their words.',link:{href:'/client-reflections',label:'Read all reflections →'}}}/>

    <section className="temple-integration">
      <div className="temple-integration-intro reveal"><p className="eyebrow">Integration</p><h2>What you carry with you.</h2><p>After our session, you’ll receive a personalized integration guide to help you continue the experience beyond our time together.</p></div>
      <ul className="integration-list reveal"><li><span>✦</span>A photograph of your crystal arrangement</li><li><span>✦</span>Reflections from the session</li><li><span>✦</span>Intuitive insights that arose</li><li><span>✦</span>Suggested practices for integration</li></ul>
      <p className="integration-closing reveal">The intention is not for the experience to end when the session does, but to give you something meaningful to return to in everyday life.</p>
    </section>

    <section className="temple-philosophy reveal"><p className="eyebrow">The Inner Temple</p><h2>Your Inner Temple is already within you.</h2><p>You do not have to travel anywhere to find it.</p><p>The Inner Temple is an invitation to become quiet enough to remember what is already there.</p><p className="temple-philosophy-emphasis">A sacred space within you, waiting to be rediscovered.</p></section>

    <section className="inner-temple-booking" id="book-inner-temple"><div className="booking-intro"><p className="eyebrow">Ready when you are</p><h2>Book your Inner Temple session</h2><p>Choose a time that feels right for you and complete your booking below.</p></div><CalendlyInlineBooking/></section>

    <section className="inquiry inquiry-vertical inquiry-questions" id="questions"><div className="reveal"><p className="eyebrow">Have a question?</p><h2>Not sure yet? Reach out.</h2><p>If you have a question about The Inner Temple or want to make sure it feels like the right fit, send me a note and I’ll be happy to help.</p></div><InquiryForm/></section>
    <Footer/>
  </main>;
}
