import {reflections} from './reflections-data';

/* Server-rendered "wall of words" version of the reflections, for secondary
   placements (e.g. The Inner Temple page). All quotes verbatim; no cards. */
export function ReflectionGallery() {
  return (
    <section className="reflection-gallery reveal" aria-label="Client reflections">
      <div className="reflection-gallery-head">
        <p className="eyebrow">Client reflections</p>
        <h2>In their words.</h2>
        <a className="text-link" href="/client-reflections">Read all reflections →</a>
      </div>
      <div className="reflection-gallery-grid">
        {reflections.map((r) => (
          <blockquote className="reflection-card" key={r.name}>
            <p>{r.quote}</p>
            <cite className="reflection-card-name">{r.name}</cite>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
