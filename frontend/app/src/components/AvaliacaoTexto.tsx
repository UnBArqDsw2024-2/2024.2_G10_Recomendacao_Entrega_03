import React from "react";

interface AvaliacaoTextoProps {
  texto: string;
  tamanhoTexto: number;
}

const AvaliacaoTexto: React.FC<AvaliacaoTextoProps> = ({ texto, tamanhoTexto }) => {
  return (
    <div className="avaliacao-texto">
      <p>Texto: {texto}</p>
      <p>Tamanho: {tamanhoTexto} caracteres</p>
    </div>
  );
};

export default AvaliacaoTexto;
