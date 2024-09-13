import React from 'react';


const projetos = [
  {
    id: 1,
    title: 'Sistema de Monitoramento Marinho',
    description: 'Uma solução completa que fornece dados em tempo real sobre as condições do mar, beneficiando pescadores e comunidades costeiras. Inclui sensores IoT que coletam informações sobre poluentes e saúde oceânica.',
    link: 'https://github.com/fernandamenon93/global_solution.git',
  },
  {
    id: 2,
    title: 'EcoStore',
    description: 'Plataforma de e-commerce focada em produtos ecológicos, promovendo um estilo de vida sustentável com produtos que respeitam o meio ambiente.',
    link: 'https://github.com/fernandamenon93/checkpoint-front-end.git',
  },
  {
    id: 3,
    title: 'Nomad Connect',
    description: 'Uma mini rede social que permite que usuários compartilhem postagens, fotos e vídeos, além de acompanhar atualizações no feed de notícias.',
    link: 'https://github.com/fernandamenon93/mini_rede_social.git',
  },
  {
    id: 4,
    title: 'Fórmula E',
    description: 'Plataforma interativa para fãs de Fórmula E, com perfis de corredores, acompanhamento ao vivo e sistema de pontuação para interação com as corridas.',
    link: 'https://github.com/gabrielvara/Sprint-1-Web-Dev.git',
  }
];

function Lista() {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
       
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6 text-center">Lista de Projetos</h1>

        
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
                Link do projeto
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Lista;

