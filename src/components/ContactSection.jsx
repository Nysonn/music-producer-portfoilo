import '../../public/ContactSection.css';

export default function ContactSection() {
  return (
    <section className="contact-section">
      <h1 className="contact-title">Contact</h1>
      <form className="contact-form">
        <input type="text" placeholder="Name" className="contact-input" />
        <input type="email" placeholder="Email" className="contact-input" />
        <textarea placeholder="Message" className="contact-textarea"></textarea>
        <button className="contact-button">Send</button>
      </form>
      <div className="contact-info">
        <p>Email: example@producer.com</p>
        <p>Phone: +123 456 7890</p>
      </div>
    </section>
  );
}