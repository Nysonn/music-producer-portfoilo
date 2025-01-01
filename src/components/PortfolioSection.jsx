import '../../public/PortfolioSection.css';

export default function PortfolioSection() {
  return (
    <section className="portfolio-section">
      <h1 className="portfolio-title">Portfolio</h1>
      <div className="portfolio-grid">
        {/* Repeat for each album */}
        <div className="portfolio-item">
          <img src="/assets/album-cover.jpg" alt="Album" className="portfolio-image" />
          <h3 className="portfolio-album-title">Album Title</h3>
          <audio controls className="portfolio-audio">
            <source src="/assets/sample-track.mp3" type="audio/mpeg" />
          </audio>
        </div>
      </div>
    </section>
  );
}