import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Midias() {
  return (
    <div className="midias-container">
      <div>
        <h1>Minhas Mídias Sociais</h1>

        <p className="text-lg text-gray-700 mb-6 text-center">
          Conecte-se comigo através das minhas redes sociais. Aqui você pode acompanhar meu trabalho, interagir e ficar atualizado com as novidades.
        </p>

        <div>
          <div className="media-card">
            <a
              href="https://github.com/Luiza122" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-gray-800 hover:text-gray-600 transition-colors"
            >
              <FaGithub size={32} className="text-gray-800" />
              <div>
                <span className="text-lg font-semibold">GitHub</span>
                <p className="text-sm text-gray-600">Explore meus projetos de código aberto e contribuições para a comunidade.</p>
              </div>
            </a>
          </div>

          <div className="media-card">
            <a
              href="https://www.instagram.com/luuh_macena_" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-gray-800 hover:text-gray-600 transition-colors"
            >
              <FaInstagram size={32} className="text-gray-800" />
              <div>
                <span className="text-lg font-semibold">Instagram</span>
                <p className="text-sm text-gray-600">Acompanhe meu dia a dia e veja posts sobre meus projetos e interesses.</p>
              </div>
            </a>
          </div>

          <div className="media-card">
            <a
              href="https://www.linkedin.com/in/luiza-macena" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-gray-800 hover:text-gray-600 transition-colors"
            >
              <FaLinkedin size={32} className="text-gray-800" />
              <div>
                <span className="text-lg font-semibold">LinkedIn</span>
                <p className="text-sm text-gray-600">Conecte-se comigo profissionalmente e veja meu histórico de carreira e experiências.</p>
              </div>
            </a>
          </div>
        </div>

        <div>
          <h2>Entre em Contato</h2>
          <p>
            Se você quiser discutir oportunidades, colaborações ou apenas conversar, não hesite em entrar em contato.
          </p>
          <a
            href="/contato" 
            className="contact-button"
          >
            Ir para a Página de Contato
          </a>
        </div>
      </div>
    </div>
  );
}

export default Midias;

