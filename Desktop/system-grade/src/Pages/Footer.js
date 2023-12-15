
import { Link } from 'react-router-dom';
import './Footer.css';
const Footer = () => {
  return ( 
    <footer>
      <div className="footerdiv">
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>University Of GHANA</p>
          <p>legon</p>
          <p>Email: univofgh@gmail.com</p>
          <p>Phone: (+233) 456-7890</p>
        </div>

        <div className="quick-links">
          <h3>Quick Links</h3>
          <div><Link to="/">Home </Link></div>
                   
                    
        </div>

        <div className="follow-us">
          <h3>Follow Us</h3>
          <a href="#" target="_blank" className="social-link">Facebook</a>
          <a href="#" target="_blank" className="social-link">Twitter</a>
          <a href="#" target="_blank" className="social-link">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;