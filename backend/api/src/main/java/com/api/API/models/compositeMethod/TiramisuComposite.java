package com.api.models;

// Clase Tiramisu
public class TiramisuComposite implements ItemCardapioComposite {
    @Override
    public String getCategoria() {
        return "Sobremesa";
    }

    @Override
    public double getPreco() {
        return 15.00;
    }
}
