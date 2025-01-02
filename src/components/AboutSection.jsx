import "../../public/AboutSection.css";
import MusicProducer from "../../src/assets/music-producer-pic.jpg";

export default function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-container">
        {/* Image Section */}
        <div className="about-image-container">
          <img
            src={MusicProducer}
            alt="Music Producer"
            className="about-image"
          />
        </div>

        {/* Biography Section */}
        <div className="about-bio-container">
          <h1 className="about-title">About Me</h1>
          <p className="about-text">
            With years of experience in music production, I have worked with Grammy-winning artists to craft memorable sonic experiences. My mission is to inspire through sound and innovation.
          </p>
        </div>
      </div>
    </section>
  );
}
