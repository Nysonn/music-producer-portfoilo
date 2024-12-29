export default function ServicesSection() {
    return (
        <section className="min-h-screen bg-gray-900 text-white p-8">
    <h1 className="text-4xl font-bold mb-4">Services</h1>
    <ul>
      <li className="mb-4">
        <h3 className="text-xl font-bold">Music Production</h3>
        <p>From ideation to completion, creating high-quality tracks tailored to your needs.</p>
      </li>
      <li className="mb-4">
        <h3 className="text-xl font-bold">Mixing & Mastering</h3>
        <p>Enhancing your sound to meet industry standards with precision and creativity.</p>
      </li>
    </ul>
    <a href="/contact" className="btn btn-primary mt-6">Get in Touch</a>
  </section>
    );
}