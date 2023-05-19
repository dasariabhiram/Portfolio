import React from 'react';
import { FaLinkedin, FaBlogger, FaGithub } from 'react-icons/fa';
import '../Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-icons">
        <a href="https://www.linkedin.com/in/dasari-saisri-abhiram/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="icon" />
        </a>
        {/* <a href="https://www.example.com/blogs" target="_blank" rel="noopener noreferrer">
          <FaBlogger className="icon" />
        </a> */}
        <a href="https://github.com/dasariabhiram?tab=repositories" target="_blank" rel="noopener noreferrer">
          <FaGithub className="icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
