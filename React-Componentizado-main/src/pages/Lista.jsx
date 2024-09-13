import React from 'react';

// Lista de projetos (substitua pelos seus próprios projetos)
const projetos = [
  {
    id: 1,
    title: 'Projeto 1',
    description: 'Descrição breve do Projeto 1. Este projeto foi desenvolvido com tecnologia X e resolve problema Y.',
    link: 'https://example.com/projeto1', // Substitua pelo link do seu projeto
  },
  {
    id: 2,
    title: 'Projeto 2',
    description: 'Descrição breve do Projeto 2. Este projeto foi desenvolvido com tecnologia A e resolve problema B.',
    link: 'https://example.com/projeto2', // Substitua pelo link do seu projeto
  },
  {
    id: 3,
    title: 'Projeto 3',
    description: 'Descrição breve do Projeto 3. Este projeto foi desenvolvido com tecnologia M e resolve problema N.',
    link: 'https://example.com/projeto3', // Substitua pelo link do seu projeto
  }
];

function Lista() {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        {/* Título da Lista */}
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6 text-center">Lista de Projetos</h1>

        {/* Lista de Projetos */}
        <ul className="space-y-6">
          {projetos.map((projeto) => (
            <li key={projeto.id} className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">{projeto.title}</h2>
              <p className="text-gray-700 mb-4">{projeto.description}</p>
              <a
                href={projeto.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Ver detalhes
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Lista;

