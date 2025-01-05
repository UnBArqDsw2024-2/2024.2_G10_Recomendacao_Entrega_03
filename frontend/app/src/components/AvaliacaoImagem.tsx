import React from "react";

interface AvaliacaoImagemProps {
  urlImagem: string;
}

const AvaliacaoImagem: React.FC<AvaliacaoImagemProps> = ({ urlImagem }) => {
  return (
    <div className="avaliacao-imagem">
      <img src={urlImagem} alt="Avaliação" />
    </div>
  );
};

export default AvaliacaoImagem;
