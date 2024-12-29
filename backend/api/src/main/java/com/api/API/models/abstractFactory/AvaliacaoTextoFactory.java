package com.api.API.models.abstractFactory;

import com.api.API.models.Avaliacao;
import com.api.API.models.AvaliacaoTexto;
import org.springframework.stereotype.Component;

@Component
public class AvaliacaoTextoFactory extends AvaliacaoFactory {

    @Override
    public Avaliacao criaAvaliacao() {
        return new AvaliacaoTexto();
    }
}
