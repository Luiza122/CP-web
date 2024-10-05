import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'; 
import { SiReact, SiJavascript, SiCss3, SiHtml5 } from 'react-icons/si'; 

function Footer() {
  return (
    <footer>
      <div className="social-icons">
        <a href="https://github.com/Luiza122" target="_blank" rel="noopener noreferrer">
          <FaGithub title="GitHub" />
        </a>
        <a href="https://www.instagram.com/luuh_macena_" target="_blank" rel="noopener noreferrer">
          <FaInstagram title="Instagram" />
        </a>
        <a href="https://www.linkedin.com/in/luiza-macena" target="_blank" rel="noopener noreferrer">
          <FaLinkedin title="LinkedIn" />
        </a>
      </div>

      

      <p>&copy; 2024 Luiza - Todos os direitos reservados.</p>
    </footer>
  );
}

export default Footer;

