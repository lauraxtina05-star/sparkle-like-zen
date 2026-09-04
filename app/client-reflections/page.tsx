import {Footer, Header} from '../components';
import {ReflectionsSlider} from '../reflections-slider';

export default function ClientReflections(){return <main><Header dark/>
<section className="reflections-hero reveal"><p className="eyebrow">Client reflections</p><h1>Words from people I’ve had the honor of supporting.</h1><p>A few reflections from people who have experienced my work over the years.</p></section>
<ReflectionsSlider/>
<section className="reflections-cta reveal"><p className="eyebrow">Ready to experience it for yourself?</p><h2>Come home to inner knowing.</h2><div className="actions"><a className="button button-accent" href="/private-work">Explore The Inner Temple</a></div></section>
<Footer/></main>}
