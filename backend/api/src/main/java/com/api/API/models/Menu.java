package com.api.API.models;

import modelo.iterador.ColecaoIterador;
import modelo.implementacao.IteradorConcreto;

public class Menu implements ColecaoIterador {
    private Prato[] pratos;
    private int totalPratos;

    public Menu(int capacidade) {
        this.pratos = new Prato[capacidade];
        this.totalPratos = 0;
    }

    public void adicionarPrato(Prato prato) {
        if (totalPratos < pratos.length) {
            pratos[totalPratos++] = prato;
        } else {
            System.out.println("Menu esta cheio. Nao e possivel adicionar mais pratos.");
        }
    }

    public Prato[] getPratos() {
        return pratos;
    }

    public int getTotalPratos() {
        return totalPratos;
    }

    @Override
    public IteradorConcreto criarIterador() {
        return new IteradorConcreto(this);
    }
}
