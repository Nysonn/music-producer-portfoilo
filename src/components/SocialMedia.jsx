import '../../public/SocialMedia.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaSoundcloud } from "react-icons/fa";

export default function SocialMedia() {
    return (
        <div className="social-media">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaFacebookF />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaTwitter />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaInstagram />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaLinkedinIn />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaYoutube />
        </a>
        <a href="https://soundcloud.com" target="_blank" rel="noopener noreferrer" className="social-icon">
        <FaSoundcloud />
      </a>
      </div>
    );
}