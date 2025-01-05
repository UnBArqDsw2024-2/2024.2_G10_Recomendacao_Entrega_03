import React from "react";
import AvaliacaoTexto from "./AvaliacaoTexto";
import AvaliacaoImagem from "./AvaliacaoImagem";
import AvaliacaoVideo from "./AvaliacaoVideo";

interface AvaliacaoAdapterProps {
  texto: { texto: string; tamanhoTexto: number };
  imagem: { urlImagem: string };
  video: { urlVideo: string; duracao: number };
}

const AvaliacaoAdapter: React.FC<AvaliacaoAdapterProps> = ({ texto, imagem, video }) => {
  return (
    <div className="avaliacao-adapter">
      <h2>Avaliação Completa</h2>
      <AvaliacaoTexto texto={texto.texto} tamanhoTexto={texto.tamanhoTexto} />
      <AvaliacaoImagem urlImagem={imagem.urlImagem} />
      <AvaliacaoVideo urlVideo={video.urlVideo} duracao={video.duracao} />
    </div>
  );
};

export default AvaliacaoAdapter;
