import '../../public/PortfolioSection.css';

export default function PortfolioSection() {
  const projects = [
    {
      id: 1,
      artist: "Adam Levis",
      songTitle: "Come on",
      role: "Producer",
      collaborators: "Collaborator 1, Collaborator 2",
      audio: "/assets/sample-track-1.mp3",
    },
    {
      id: 2,
      artist: "Selena Gomez",
      songTitle: "Woves",
      role: "Mixing Engineer",
      collaborators: "Collaborator 3, Collaborator 4",
      audio: "/assets/sample-track-2.mp3",
    },
    {
      id: 3,
      artist: "Diplo",
      songTitle: "Forever",
      role: "Songwriter",
      collaborators: "Collaborator 5, Collaborator 6",
      audio: "/assets/sample-track-3.mp3",
    },
    {
      id: 4,
      artist: "Ed Sheeran",
      songTitle: "Bad Habits",
      role: "Sound Designer",
      collaborators: "Collaborator 7, Collaborator 8",
      audio: "/assets/sample-track-4.mp3",
    },
    {
      id: 5,
      artist: "The Chainsmokers",
      songTitle: "Midnight Train",
      role: "Composer",
      collaborators: "Collaborator 9, Collaborator 10",
      audio: "/assets/sample-track-5.mp3",
    },
    {
      id: 6,
      artist: "Ariana Grande",
      songTitle: "Sun Goes Down",
      role: "Music Supervisor",
      collaborators: "Collaborator 11, Collaborator 12",
      audio: "/assets/sample-track-6.mp3",
    },
  ];

  return (
    <section className="portfolio-section">
      <h1 className="portfolio-title">My Projects</h1>
      <div className="portfolio-grid">
        {/* Render each project as a portfolio card */}
        {projects.map((project) => (
          <div className="portfolio-item" key={project.id}>
            <div className="portfolio-content">
              <h3 className="portfolio-song-title">{project.songTitle}</h3>
              <p className="portfolio-artist">Artist: {project.artist}</p>
              <p className="portfolio-role">Role: {project.role}</p>
              <p className="portfolio-collaborators">Collaborators: {project.collaborators}</p>
              <audio controls className="portfolio-audio">
                <source src={project.audio} type="audio/mpeg" />
              </audio>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
