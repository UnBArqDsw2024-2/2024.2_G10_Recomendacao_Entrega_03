package com.api.API.models;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class AvaliacaoImagem extends Avaliacao{

    private String urlImagem;

    public AvaliacaoImagem(String urlImagem) {
        this.urlImagem = urlImagem;
    }

    @Override
    public String publicar() {
        return "Avaliação de imagem publicada com sucesso!";
    }

    @Override
    public String arquivar() {
        return "Avaliação de imagem arquivada com sucesso!";
    }

    @Override
    public String validar() {
        return "Avaliação de imagem validada com sucesso!";
    }

    @Override
    public String editar() {
        return "Avaliação de imagem editada com sucesso!";
    }
}
