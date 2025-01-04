package com.api.API.models.mediator;

import com.api.API.models.component.Component;
import java.util.ArrayList;
import java.util.List;
import com.api.API.models.mediator.Mediator;

public class ConcreteMediator implements Mediator {
    private final List<Component> componentes = new ArrayList<>();

    @Override
    public void registrar(Component component) {
        componentes.add(component);
        component.setMediator(this);
    }

    @Override
    public void enviarMensagem(Component remetente, String mensagem) {
        for (Component component : componentes) {
            if (component != remetente) {
                component.receberMensagem(mensagem);
            }
        }
    }
}