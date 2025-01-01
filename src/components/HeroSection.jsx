import React, { useEffect, useState } from "react";
import "../../public/HeroSection.css";

export default function HeroSection() {
  const [samplePacks, setSamplePacks] = useState([]); // State for storing fetched data
  const [loading, setLoading] = useState(true); // State for tracking loading status

  useEffect(() => {
    // Fetch sample packs from the backend
    fetch("http://localhost:5000/api/sample-packs")
      .then((response) => response.json())
      .then((data) => {
        setSamplePacks(data); // Store fetched data in state
        setLoading(false); // Mark loading as complete
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false); // Stop loading even if there's an error
      });
  }, []);

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
        {loading ? ( // Conditional rendering based on loading state
          <p className="loading-message">Loading sample packs...</p>
        ) : (
          samplePacks.map((pack) => (
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
          ))
        )}
      </div>
    </section>
  );
}
