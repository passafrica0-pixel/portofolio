const logos = [
  { src: "/assets/we.png", alt: "Welcomeurope" },
  { src: "/assets/wtc.png", alt: "World Trade Center Marseille Provence" },
  { src: "/assets/decathlon.png", alt: "Decathlon" },
  { src: "/assets/2png.png", alt: "Client Simplement" },
  { src: "/assets/Frame-copie.png", alt: "Client Simplement" },
];

export function BrandStrip() {
  return (
    <section className="brand-strip" aria-label="Marques accompagnées">
      <div className="container brand-strip__inner">
        <p className="brand-strip__label">Ils nous font confiance</p>
        <ul className="brand-strip__logos">
          {logos.map((logo) => (
            <li key={logo.src}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={logo.src} alt={logo.alt} width={120} height={40} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
