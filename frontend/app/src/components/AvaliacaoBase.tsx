import React from "react";

export interface AvaliacaoProps {
  autor: string;
  restaurante: string;
  estado: string;
  tags: string[];
}

const AvaliacaoBase: React.FC<AvaliacaoProps> = ({ autor, restaurante, estado, tags }) => {
  return (
    <div className="avaliacao-base">
      <h3>{restaurante}</h3>
      <p>Autor: {autor}</p>
      <p>Estado: {estado}</p>
      <p>Tags: {tags.join(", ")}</p>
    </div>
  );
};

export default AvaliacaoBase;
