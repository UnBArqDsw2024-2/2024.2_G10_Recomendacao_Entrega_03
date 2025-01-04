package com.api.API.models.mediator;

import com.api.API.models.component.Component;

public interface Mediator {
    void registrar(Component component);
    void enviarMensagem(Component remetente, String mensagem);
}