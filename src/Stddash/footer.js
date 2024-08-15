import React from 'react'
import './footer.css'
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa'; 
const Footer = () => {
  return (
    <p className="contact">
                <h2>Contact Us</h2>
                <p>If you have any questions or feedback, feel free to reach out to us!</p>
                <div className="contact-info">
                    <p>Email: contact@eduh.com</p>
                    <p>Phone: +123 456 7890</p>
                    <p>Address: 123 EduH Street, Learning City, LC 45678</p>
                </div>
                <div className="social-media">
                    <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" color='white'>
                        <FaTwitter size={30} />
                    </a>
                    <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
                        <FaFacebook size={30} />
                    </a>
                    <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
                        <FaInstagram size={30} />
                    </a>
                </div>
            </p>
  )
}
export default Footer;
