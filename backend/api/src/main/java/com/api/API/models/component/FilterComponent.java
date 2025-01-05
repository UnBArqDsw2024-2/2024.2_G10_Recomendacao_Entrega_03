package com.api.API.models.component;

import java.util.List;

import com.api.API.models.mediator.Mediator;

public class FilterComponent implements Component {
    private Mediator mediator;
    private final List<String> criterios;

    public FilterComponent(List<String> criterios) {
        this.criterios = criterios;
    }

    @Override
    public void setMediator(Mediator mediator) {
        this.mediator = mediator;
    }

    @Override
    public void receberMensagem(String mensagem) {
        System.out.println("Filtro recebeu mensagem: " + mensagem);
    }

    public void aplicarFiltro(String criterios) {
        System.out.println("Aplicando filtro: " + criterios);
    }

    @Override
    public void enviarMensagem(String mensagem) {
        mediator.enviarMensagem(this, mensagem);
    }
}
