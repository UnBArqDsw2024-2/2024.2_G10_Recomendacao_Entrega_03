package com.api.API.models;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class AvaliacaoTexto extends Avaliacao {

    private String texto;
    private int tamanhoTexto;

    public AvaliacaoTexto(String texto, int tamanhoTexto) {
        this.texto = texto;
        this.tamanhoTexto = tamanhoTexto;
    }

    @Override
    public String publicar() {
        return "Avaliação de texto publicada com sucesso!";
    }

    @Override
    public String arquivar() {
        return "Avaliação de texto arquivada com sucesso!";
    }

    @Override
    public String validar() {
        return "Avaliação de texto validada com sucesso!";
    }

    @Override
    public String editar() {
        return "Avaliação de texto editada com sucesso!";
    }
}
