package com.api.API.models.component;

import com.api.API.models.mediator.Mediator;

public class RestaurantComponent implements Component {
    private Mediator mediator;
    private final String nomeRestaurante;
    private final String endereco;

    public RestaurantComponent(String nomeRestaurante, String endereco) {
        this.nomeRestaurante = nomeRestaurante;
        this.endereco = endereco;
    }

    @Override
    public void setMediator(Mediator mediator) {
        this.mediator = mediator;
    }

    @Override
    public void receberMensagem(String mensagem) {
        System.out.println(nomeRestaurante + " recebeu mensagem: " + mensagem);
    }

    public void atualizarDetalhes(String detalhes) {
        System.out.println("Atualizando detalhes do restaurante: " + detalhes);
    }

    @Override
    public void enviarMensagem(String mensagem) {
        mediator.enviarMensagem(this, mensagem);
    }
}
