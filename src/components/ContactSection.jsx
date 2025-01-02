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
        <p>For inquiries, please email us at:</p>
        <p><strong>info@billytunes.com</strong></p>
        <p>Follow me on social media:</p>
        <p><strong>@billytunes</strong></p>
      </div>
    </section>
  );
}
