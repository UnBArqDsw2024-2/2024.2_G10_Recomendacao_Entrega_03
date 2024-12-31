package com.api.API.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class AvaliacaoVideo extends Avaliacao{

    private String urlVideo;
    private double duracao;

    public AvaliacaoVideo(String url, double duracao) {
        this.urlVideo = url;
        this.duracao = duracao;
    }

    @Override
    public String publicar() {
        return "Avaliação de vídeo publicada com sucesso!";
    }

    @Override
    public String arquivar() {
        return "Avaliação de vídeo arquivada com sucesso!";
    }

    @Override
    public String validar() {
        return "Avaliação de vídeo validada com sucesso!";
    }

    @Override
    public String editar() {
        return "Avaliação de vídeo editada com sucesso!";
    }
}
