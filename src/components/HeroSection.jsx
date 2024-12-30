import "../../public/HeroSection.css";
import SampleImg from '../../src/assets/music-producer-pic.jpg';
import WavePack from '../../src/assets/trap-sounds.jpg';
import DeckStudioPack from '../../src/assets/deck-studio.jpg';

const samplePacks = [
  {
    id: 1,
    title: "Lo-Fi Chill Beats Pack",
    description: "Perfect for creating relaxed, mellow vibes.",
    image: SampleImg,
    link: "/packs/lofi-chill",
  },
  {
    id: 2,
    title: "Trap Essentials",
    description: "Hard-hitting drums and 808s for modern trap production.",
    image: WavePack,
    link: "/packs/trap-essentials",
  },
  {
    id: 3,
    title: "Cinematic Atmospheres",
    description: "Ambiences and textures for soundtracks and scoring.",
    image: DeckStudioPack,
    link: "/packs/cinematic-atmospheres",
  },
];

export default function HeroSection() {
  return (
    <section className="hero-section">
      {/* Hero Content */}
      <div className="hero-header">
        <h1 className="hero-title">Explore Fresh Sounds</h1>
        <p className="hero-subtitle">
          Your go-to destination for cutting-edge music production sample packs.
        </p>
        <a href="/packs" className="hero-button">
          View All Sample Packs
        </a>
      </div>

      {/* Showcase of Sample Packs */}
      <div className="sample-packs">
        {samplePacks.map((pack) => (
          <div className="sample-card" key={pack.id}>
            <img src={pack.image} alt={pack.title} className="sample-image" />
            <div className="sample-info">
              <h3 className="sample-title">{pack.title}</h3>
              <p className="sample-description">{pack.description}</p>
              <a href={pack.link} className="sample-link">
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
