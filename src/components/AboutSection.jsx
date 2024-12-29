import '../../public/AboutSection.css';

export default function AboutSection() {
  return (
    <section className="about-section">
      <h1 className="about-title">About Me</h1>
      <p className="about-text">
        With years of experience in music production, I have worked with Grammy-winning artists to craft memorable sonic experiences. My mission is to inspire through sound and innovation.
      </p>
      <div className="about-image-container">
        <img src="/assets/producer-photo.jpg" alt="Producer" className="about-image" />
      </div>
    </section>
  );
}
