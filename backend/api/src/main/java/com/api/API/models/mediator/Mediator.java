package com.api.API.models.mediator;

import java.util.List;

import com.api.API.models.component.Component;

public interface Mediator {
    void registrar(Component component);
    void enviarMensagem(Component remetente, String mensagem);
    List<Component> getComponentes();
}