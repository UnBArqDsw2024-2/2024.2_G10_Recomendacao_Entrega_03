package com.api.API.models.abstractFactory;

import com.api.API.models.Avaliacao;
import com.api.API.models.AvaliacaoImagem;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Component;

@Component
@Primary
public class AvaliacaoImagemFactory extends AvaliacaoFactory{

    @Override
    public Avaliacao criaAvaliacao() {
        return new AvaliacaoImagem();
    }
}
