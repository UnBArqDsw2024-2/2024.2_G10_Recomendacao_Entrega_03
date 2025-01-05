import React from "react";

interface AvaliacaoVideoProps {
  urlVideo: string;
  duracao: number;
}

const AvaliacaoVideo: React.FC<AvaliacaoVideoProps> = ({ urlVideo, duracao }) => {
  return (
    <div className="avaliacao-video">
      <video src={urlVideo} controls />
      <p>Duração: {duracao} segundos</p>
    </div>
  );
};

export default AvaliacaoVideo;
