package com.api.API.models.factoryMethod;

import com.api.API.models.Avaliacao;
import com.api.API.models.AvaliacaoVideo;
import org.springframework.stereotype.Component;

@Component
public class AvaliacaoVideoFactory extends AvaliacaoFactory{
    @Override
    public Avaliacao criaAvaliacao() {
        return new AvaliacaoVideo();
    }
}
