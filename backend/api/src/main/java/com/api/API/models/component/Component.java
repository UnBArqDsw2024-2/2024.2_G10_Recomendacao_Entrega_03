package com.api.API.models.component;

import com.api.API.models.mediator.Mediator;

public interface Component {
    void setMediator(Mediator mediator);
    void receberMensagem(String mensagem);
    void enviarMensagem(String mensagem);
}