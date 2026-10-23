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
        <p className="virtual-positioning">A 60-minute virtual experience, received from the comfort of your own space.</p>
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
      <article><span>04</span><h3>Reconnect</h3><p>Leave feeling more connected to your own inner knowing and better able to recognize what you need.</p></article>
    </section>

    <section className="sacred-space">
      <div className="sacred-space-photo image-reveal"><Image src="/images/inner-temple-crystal-body.jpg" alt="Crystals arranged along the chakras on Zen’s symbolic body board" fill sizes="(max-width:850px) 100vw, 46vw"/></div>
      <div className="sacred-space-copy reveal">
        <p className="eyebrow">The experience</p>
        <h2>A sacred space, created for you.</h2>
        <p>Before we meet, I prepare your Inner Temple with intention.</p>
        <p>I intuitively select crystals and arrange them on a symbolic representation of your body, placing each stone in relationship with the energy centers, or chakras.</p>
        <p>This crystal arrangement becomes part of the energetic landscape of your session and a focal point for the distance work we share.</p>
        <p>From your own space, you are invited to get comfortable, soften the lights, lie down, close your eyes, or simply settle somewhere you feel at ease.</p>
        <p>As you rest, I offer distance Reiki and gently guide you through the experience.</p>
        <p>Prayer, affirmations, intuitive messages, reflection, silence, or moments of spiritual connection may arise naturally.</p>
        <p>At times, there may be invitations to connect with your guardian angels, benevolent ancestors, or the Divine, always in a way that honors your own beliefs and relationship with Spirit.</p>
        <p className="sacred-space-emphasis">The distance does not make the experience less personal. It allows you to receive from the place where you already feel most at home.</p>
      </div>
    </section>

    <section className="virtual-steps" aria-labelledby="virtual-steps-title">
      <div className="virtual-steps-heading reveal"><p className="eyebrow">How it unfolds</p><h2 id="virtual-steps-title">Held across the distance.</h2></div>
      <ol className="reveal">
        <li><span>01</span><div><h3>You settle in.</h3><p>Get comfortable in your own space and allow the outside world to soften for a while.</p></div></li>
        <li><span>02</span><div><h3>I prepare the Temple.</h3><p>Your crystal arrangement and energetic container are created with intention on my side.</p></div></li>
        <li><span>03</span><div><h3>We enter together.</h3><p>Through distance Reiki, prayer, reflection, and intuitive guidance, the session unfolds from there.</p></div></li>
      </ol>
    </section>

    <section className="unique-journey">
      <div className="unique-journey-photo image-reveal"><Image src="/images/inner-temple-candle-angel.JPG" alt="A candle burning beside an angel figure in Zen’s ritual space" fill sizes="(max-width:850px) 100vw, 42vw"/></div>
      <div className="unique-journey-copy reveal">
        <p className="eyebrow">No two sessions are the same</p>
        <h2>A journey uniquely yours.</h2>
        <p>No two Inner Temple sessions unfold in exactly the same way.</p>
        <p>You may notice emotion moving, your body softening, a sense of deep rest, unexpected clarity, spiritual connection, or simply the relief of having space to listen inward.</p>
        <p>You do not need to know what you are looking for before we begin.</p>
        <p>You do not need to perform, prepare, or arrive with the right words.</p>
        <p className="unique-closing">You simply bring what is present.</p>
        <p className="unique-last">I meet you there.</p>
      </div>
    </section>

    <ReflectionsSlider intro={{eyebrow:'Client reflections',title:'In their words.',link:{href:'/client-reflections',label:'Read all reflections →'}}}/>

    <section className="temple-integration">
      <div className="temple-integration-intro reveal"><p className="eyebrow">Integration</p><h2>What you carry with you.</h2><p>The experience does not end when we close the session.</p><p>Afterward, you will receive a personalized integration guide created from what unfolded during our time together.</p></div>
      <ul className="integration-list reveal"><li><span>01</span>A photograph of the crystal arrangement created for your session</li><li><span>02</span>Reflections and themes that surfaced</li><li><span>03</span>Intuitive insights that arose</li><li><span>04</span>Suggested practices, prompts, or rituals for integration</li></ul>
      <p className="integration-closing reveal">The intention is to give you something tangible to return to after the session, so what you experienced can continue to move with you into everyday life.</p>
    </section>

    <section className="temple-philosophy reveal"><p className="eyebrow">The Inner Temple</p><h2>Your Inner Temple is already within you.</h2><p>You do not have to travel anywhere to find it.</p><p>You do not have to step into someone else’s sacred space.</p><p>The Inner Temple is an invitation to create that space within your own.</p><p>To get quiet enough to listen.</p><p>To reconnect with what is already present.</p><p>To remember that your own inner knowing is still there.</p><p className="temple-philosophy-emphasis">A sacred space within you, waiting to be rediscovered.</p></section>

    <section className="inner-temple-booking" id="book-inner-temple"><div className="booking-intro"><p className="eyebrow">Ready when you are</p><h2>Book your Inner Temple session</h2><p>Choose a time that feels right for you and complete your booking below.</p></div><CalendlyInlineBooking/></section>

    <section className="inquiry inquiry-vertical inquiry-questions" id="questions"><div className="reveal"><p className="eyebrow">Have a question?</p><h2>Not sure yet? Reach out.</h2><p>If you have a question about The Inner Temple or want to make sure it feels like the right fit, send me a note and I’ll be happy to help.</p></div><InquiryForm/></section>
    <Footer/>
  </main>;
}
