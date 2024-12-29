export default function AboutSection() {
    return (
        <section className="min-h-screen bg-gray-900 text-white p-8">
    <h1 className="text-4xl font-bold mb-4">About Me</h1>
    <p className="text-lg">
      With years of experience in music production, I have worked with Grammy-winning artists to craft memorable sonic experiences. My mission is to inspire through sound and innovation.
    </p>
    <div className="mt-6">
      <img src="/assets/producer-photo.jpg" alt="Producer" className="rounded-lg" />
    </div>
  </section>
    );
}