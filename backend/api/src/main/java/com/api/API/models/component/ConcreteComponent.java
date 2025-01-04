package com.api.API.models.component;

import com.api.API.models.mediator.Mediator;

public class ConcreteComponent implements Component {
    private Mediator mediator;
    private final String nome;
    private final String tipo;

    public ConcreteComponent(String nome, String tipo) {
        this.nome = nome;
        this.tipo = tipo;
    }

    @Override
    public void setMediator(Mediator mediator) {
        this.mediator = mediator;
    }

    @Override
    public void receberMensagem(String mensagem) {
        System.out.println(nome + " recebeu: " + mensagem);
    }

    @Override
    public void enviarMensagem(String mensagem) {
        System.out.println(nome + " enviando: " + mensagem);
        mediator.enviarMensagem(this, mensagem);
    }
}