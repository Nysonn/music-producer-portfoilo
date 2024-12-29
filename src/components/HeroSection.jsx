import HeroPicture from '../assets/music-producer-pic.jpg';
import '../../public/HeroSection.css';

export default function HeroSection() {
  return (
    <section
      className="hero-section"
      style={{ backgroundImage: `url(${HeroPicture})` }}
    >
      {/* Overlay for better text visibility */}
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1 className="hero-title">Crafting Sonic Masterpieces</h1>
        <p className="hero-subtitle">Explore the world of cutting-edge music production.</p>
        <div className="hero-buttons">
          <a href="/portfolio" className="hero-button">Listen to My Work</a>
          <a href="/contact" className="hero-button hero-button-secondary">Contact Me</a>
        </div>
      </div>
    </section>
  );
}
