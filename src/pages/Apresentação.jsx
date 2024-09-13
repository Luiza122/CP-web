import React from 'react';

// Imagem de perfil (substitua pelo URL da sua imagem)
const profileImageUrl = 'https://via.placeholder.com/150'; 

function Apresentacao() {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        {/* Seção de Apresentação */}
        <div className="flex flex-col md:flex-row items-center">
          {/* Imagem de Perfil */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <img
              src={profileImageUrl}
              alt="Foto de Perfil"
              className="w-32 h-32 md:w-48 md:h-48 rounded-full shadow-md"
            />
          </div>
          
          {/* Texto de Apresentação */}
          <div className="w-full md:w-2/3 md:pl-8">
            <h1 className="text-4xl font-extrabold text-gray-800 mb-4">Olá, eu sou Luiza!</h1>
            <p className="text-gray-700 text-lg mb-4">
              Sou estudante de Engenharia de Software na FIAP, atualmente no segundo semestre. 
              Tenho uma grande paixão por tecnologia e desenvolvimento de software. Estou constantemente buscando aprender novas tecnologias 
              e aplicar meus conhecimentos em projetos reais. 
            </p>
            <p className="text-gray-700 text-lg mb-4">
              Além dos estudos, gosto de explorar novas ideias e desafios. Participo de hackathons e projetos colaborativos que me ajudam 
              a crescer como desenvolvedora e a contribuir para a comunidade.
            </p>
            <p className="text-gray-700 text-lg">
              Você pode me encontrar nas redes sociais e acompanhar meus projetos e novidades:
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Apresentacao;
 