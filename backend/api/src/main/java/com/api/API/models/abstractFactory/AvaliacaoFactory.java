package com.api.API.models.abstractFactory;

import com.api.API.models.Avaliacao;
import com.api.API.models.AvaliacaoImagem;
import com.api.API.models.AvaliacaoTexto;
import com.api.API.models.AvaliacaoVideo;
import com.api.API.utils.UrlUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public abstract class AvaliacaoFactory {

    public AvaliacaoFactory obterFactory(String tipo) {
        switch (UrlUtils.obterUltimoParametroDaURL(tipo)) {
            case "avaliacaoImagem":
                return new AvaliacaoImagemFactory();
            case "avaliacaoTexto":
                return new AvaliacaoTextoFactory();
            case "avaliacaoVideo":
                return new AvaliacaoVideoFactory();
            default:
                throw new IllegalArgumentException("Tipo de avaliação inválido: " + tipo);
        }
    }

    public abstract Avaliacao criaAvaliacao();

}
