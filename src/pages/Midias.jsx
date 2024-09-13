import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

function Midias() {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">Minhas Mídias Sociais</h1>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-6">
          {/* Link GitHub */}
          <a
            href="https://github.com/Luiza12" // Substitua pelo seu link do GitHub
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 text-gray-800 hover:text-gray-600 transition-colors"
          >
            <FaGithub size={32} className="text-gray-800" />
            <span className="text-lg font-semibold">GitHub</span>
          </a>
          {/* Link LinkedIn */}
          <a
            href="https://www.linkedin.com/in/seu-perfil" // Substitua pelo seu link do LinkedIn
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 text-gray-800 hover:text-gray-600 transition-colors"
          >
            <FaLinkedin size={32} className="text-gray-800" />
            <span className="text-lg font-semibold">LinkedIn</span>
          </a>
          {/* Link Instagram */}
          <a
            href="https://www.instagram.com/Luuh_Macena" // Substitua pelo seu link do Instagram
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 text-gray-800 hover:text-gray-600 transition-colors"
          >
            <FaInstagram size={32} className="text-gray-800" />
            <span className="text-lg font-semibold">Instagram</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Midias;
