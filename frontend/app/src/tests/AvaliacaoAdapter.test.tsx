import { render, screen } from "@testing-library/react";
import AvaliacaoAdapter from "../components/AvaliacaoAdapter";

jest.mock("../components/AvaliacaoTexto", () => {
  return function MockAvaliacaoTexto({ texto, tamanhoTexto }: any) {
    return (
      <div>
        Mock Texto: {texto}, Tamanho: {tamanhoTexto}
      </div>
    );
  };
});

jest.mock("../components/AvaliacaoImagem", () => {
  return function MockAvaliacaoImagem({ urlImagem }: any) {
    return <img alt="Mock Imagem" src={urlImagem} />;
  };
});

jest.mock("../components/AvaliacaoVideo", () => {
  return function MockAvaliacaoVideo({ urlVideo, duracao }: any) {
    return (
      <div>
        Mock Video: {urlVideo}, Duração: {duracao} segundos
      </div>
    );
  };
});


// Dados de mock para os testes
const mockTexto = {
  texto: "Este é um texto de avaliação",
  tamanhoTexto: 20,
};

const mockImagem = {
  urlImagem: "http://exemplo.com/imagem.png",
};

const mockVideo = {
  urlVideo: "http://exemplo.com/video.mp4",
  duracao: 60,
};

describe("AvaliacaoAdapter", () => {
  it("deve renderizar todos os componentes dependentes corretamente", () => {
    render(
      <AvaliacaoAdapter texto={mockTexto} imagem={mockImagem} video={mockVideo} />
    );

    // Verifica se o título está presente
    expect(screen.getByText(/Avaliação Completa/i)).toBeInTheDocument();

    // Verifica o mock do componente AvaliacaoTexto
    expect(
      screen.getByText(/Mock Texto: Este é um texto de avaliação, Tamanho: 20/i)
    ).toBeInTheDocument();

    // Verifica o mock do componente AvaliacaoImagem
    const imagem = screen.getByAltText("Mock Imagem");
    expect(imagem).toHaveAttribute("src", "http://exemplo.com/imagem.png");

    // Verifica o mock do componente AvaliacaoVideo
    expect(
      screen.getByText(/Mock Video: http:\/\/exemplo.com\/video.mp4, Duração: 60 segundos/i)
    ).toBeInTheDocument();
  });
});
