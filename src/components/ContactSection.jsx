export default function ContactSection() {
    return (
        <section className="min-h-screen bg-gray-900 text-white p-8">
    <h1 className="text-4xl font-bold mb-4">Contact</h1>
    <form className="flex flex-col space-y-4">
      <input type="text" placeholder="Name" className="form-input" />
      <input type="email" placeholder="Email" className="form-input" />
      <textarea placeholder="Message" className="form-textarea"></textarea>
      <button className="btn btn-primary">Send</button>
    </form>
    <div className="mt-8">
      <p>Email: example@producer.com</p>
      <p>Phone: +123 456 7890</p>
    </div>
  </section>
    );
}