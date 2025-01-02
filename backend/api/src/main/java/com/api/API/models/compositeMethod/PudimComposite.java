package com.api.models;

// Classe Pudim
public class Pudim implements ItemCardapio {
    @Override
    public String getCategoria() {
        return "Sobremesa";
    }

    @Override
    public double getPreco() {
        return 10.00;
    }
}