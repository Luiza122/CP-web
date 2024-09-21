import React from 'react';

const profileImageUrl = 'foto.jpg';

function Apresentacao() {
  return (
    <div className="foto">
      <div>
        
        <div>
          
          <div>
            <img
              src={profileImageUrl}
              alt="Foto de Perfil"
              className="foto-perfil" 
            />
          </div>

          
          <div className="texto">
            <h1 className="titulo">Olá, eu sou Luiza!</h1>
            <p className="texto_apresentação">
              Sou estudante de Engenharia de Software na FIAP, atualmente no segundo semestre. 
              Tenho uma grande paixão por tecnologia e desenvolvimento de software. Estou constantemente buscando aprender novas tecnologias 
              e aplicar meus conhecimentos em projetos reais. 
            </p>
            <p>
              Além dos estudos, gosto de explorar novas ideias e desafios. Participo de hackathons e projetos colaborativos que me ajudam 
              a crescer como desenvolvedora e a contribuir para a comunidade.
            </p>
            <p>
              Você pode me encontrar nas redes sociais e acompanhar meus projetos e novidades:
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Apresentacao;

