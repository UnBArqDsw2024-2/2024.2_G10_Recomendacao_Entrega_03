package com.api.API.models.component;

import com.api.API.models.mediator.Mediator;

public class UserComponent implements Component {
    private Mediator mediator;
    private final String nomeUsuario;
    private String feedback;

    public UserComponent(String nomeUsuario) {
        this.nomeUsuario = nomeUsuario;
    }

    @Override
    public void setMediator(Mediator mediator) {
        this.mediator = mediator;
    }

    @Override
    public void receberMensagem(String mensagem) {
        System.out.println(nomeUsuario + " recebeu mensagem: " + mensagem);
    }

    public void enviarFeedback(String feedback) {
        this.feedback = feedback;
        System.out.println(nomeUsuario + " enviando feedback: " + feedback);
        mediator.enviarMensagem(this, feedback);
    }

    @Override
    public void enviarMensagem(String mensagem) {
        mediator.enviarMensagem(this, mensagem);
    }
}
