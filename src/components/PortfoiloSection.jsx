export default function PortfoiloSection() {
    return (
        <section className="min-h-screen bg-gray-900 text-white p-8">
    <h1 className="text-4xl font-bold mb-4">Portfolio</h1>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Repeat for each album */}
      <div className="bg-gray-800 p-4 rounded-lg">
        <img src="/assets/album-cover.jpg" alt="Album" className="w-full rounded" />
        <h3 className="text-xl mt-2">Album Title</h3>
        <audio controls className="mt-4 w-full">
          <source src="/assets/sample-track.mp3" type="audio/mpeg" />
        </audio>
      </div>
    </div>
  </section>
    );
}