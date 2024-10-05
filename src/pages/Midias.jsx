import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer>
      <div className="social-icons">
        <a href="https://github.com/Luiza122" target="_blank" rel="noopener noreferrer">
          <FaGithub size={32} />
        </a>
        <a href="https://www.instagram.com/luuh_macena_" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={32} />
        </a>
        <a href="https://www.linkedin.com/in/luiza-macena" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={32} />
        </a>
      </div>

      <div className="tech-icons">
        <p>Linguagens utilizadas:</p>
        <span><SiReact title="React" style={{ margin: '0 10px' }} /></span>
        <span><SiJavascript title="JavaScript" style={{ margin: '0 10px' }} /></span>
        <span><SiCss3 title="CSS" style={{ margin: '0 10px' }} /></span>
        <span><SiHtml5 title="HTML" style={{ margin: '0 10px' }} /></span>
      </div>

      <p>&copy; 2024 Luiza - Todos os direitos reservados.</p>
    </footer>
  );
}

export default Footer;

