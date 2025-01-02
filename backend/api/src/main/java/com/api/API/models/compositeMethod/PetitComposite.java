package com.api.models;

// Classe PetitGateau
public class PetitGateau implements ItemCardapio {
    @Override
    public String getCategoria() {
        return "Sobremesa";
    }

    @Override
    public double getPreco() {
        return 20.00;
    }
}
