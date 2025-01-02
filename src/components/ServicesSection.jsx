import '../../public/ServicesSection.css';

export default function ServicesSection() {
  return (
    <section className="services-section">
      <h1 className="services-title">Services</h1>
      <ul className="services-list">
        <li className="services-item">
          <h3 className="services-item-title">Music Production</h3>
          <p className="services-item-description">
            From ideation to completion, creating high-quality tracks tailored to your needs.
          </p>
        </li>
        <li className="services-item">
          <h3 className="services-item-title">Mixing & Mastering</h3>
          <p className="services-item-description">
            Enhancing your sound to meet industry standards with precision and creativity.
          </p>
        </li>
        <li className="services-item">
          <h3 className="services-item-title">Sound Design</h3>
          <p className="services-item-description">
            Crafting unique soundscapes that amplify the mood and atmosphere of your project.
          </p>
        </li>
        <li className="services-item">
          <h3 className="services-item-title">Music Composition</h3>
          <p className="services-item-description">
            Composing original pieces tailored to film, games, or other creative media.
          </p>
        </li>
        <li className="services-item">
          <h3 className="services-item-title">Audio Branding</h3>
          <p className="services-item-description">
            Creating a distinctive sound identity for brands, podcasts, and commercials.
          </p>
        </li>
        <li className="services-item">
          <h3 className="services-item-title">Podcast Production</h3>
          <p className="services-item-description">
            End-to-end services for creating, recording, editing, and publishing podcasts.
          </p>
        </li>
      </ul>
      <a href="/contact" className="services-button">Get in Touch</a>
    </section>
  );
}
