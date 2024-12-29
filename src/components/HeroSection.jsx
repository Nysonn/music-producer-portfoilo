import HeroPicture from '../assets/music-producer-pic.jpg';

export default function HeroSection() {
  return (
    <section
      className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: `url(${HeroPicture})` }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl sm:text-6xl font-extrabold text-D9EAFD tracking-wide drop-shadow-lg">
          Crafting Sonic Masterpieces
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-9AA6B2 drop-shadow-md">
          Explore the world of cutting-edge music production.
        </p>
        <div className="mt-6 space-x-4">
          <a
            href="/portfolio"
            className="px-6 py-3 text-lg font-medium text-white bg-D9EAFD rounded-md shadow-md hover:bg-BCCCDC transition-colors duration-200"
          >
            Listen to My Work
          </a>
          <a
            href="/contact"
            className="px-6 py-3 text-lg font-medium text-white bg-9AA6B2 rounded-md shadow-md hover:bg-BCCCDC transition-colors duration-200"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
