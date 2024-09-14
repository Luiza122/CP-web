import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Midias() {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">Minhas Mídias Sociais</h1>

        <p className="text-lg text-gray-700 mb-6 text-center">
          Conecte-se comigo através das minhas redes sociais. Aqui você pode acompanhar meu trabalho, interagir e ficar atualizado com as novidades.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-6">
          <a
            href="https://github.com/Luiza122" 
            target="_blank"
            rel="noopener noreferrer"
            className="media-card flex items-center space-x-3 text-gray-800 hover:text-gray-600 transition-colors"
          >
            <FaGithub size={32} className="text-gray-800" />
            <div>
              <span className="text-lg font-semibold">GitHub</span>
              <p className="text-sm text-gray-600">Explore meus projetos de código aberto e contribuições para a comunidade.</p>
            </div>
          </a>

          <a
            href="https://www.instagram.com/luuh_macena_" 
            target="_blank"
            rel="noopener noreferrer"
            className="media-card flex items-center space-x-3 text-gray-800 hover:text-gray-600 transition-colors"
          >
            <FaInstagram size={32} className="text-gray-800" />
            <div>
              <span className="text-lg font-semibold">Instagram</span>
              <p className="text-sm text-gray-600">Acompanhe meu dia a dia e veja posts sobre meus projetos e interesses.</p>
            </div>
          </a>
          
          <a
            href="https://www.linkedin.com/in/luiza-macena" 
            target="_blank"
            rel="noopener noreferrer"
            className="media-card flex items-center space-x-3 text-gray-800 hover:text-gray-600 transition-colors"
          >
            <FaLinkedin size={32} className="text-gray-800" />
            <div>
              <span className="text-lg font-semibold">LinkedIn</span>
              <p className="text-sm text-gray-600">Conecte-se comigo profissionalmente e veja meu histórico de carreira e experiências.</p>
            </div>
          </a>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Entre em Contato</h2>
          <p className="text-lg text-gray-700 mb-6">
            Se você quiser discutir oportunidades, colaborações ou apenas conversar, não hesite em entrar em contato.
          </p>
          
        </div>
      </div>
    </div>
  );
}

export default Midias;

