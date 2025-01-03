package com.api.models;

// Classe PetitGateau
public class PetitComposite implements ItemCardapioComposite {
    @Override
    public String getCategoria() {
        return "Sobremesa";
    }

    @Override
    public double getPreco() {
        return 20.00;
    }
}
