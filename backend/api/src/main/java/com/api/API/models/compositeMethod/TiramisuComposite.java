package com.api.models;

// Clase Tiramisu
public class Tiramisu implements ItemCardapio {
    @Override
    public String getCategoria() {
        return "Sobremesa";
    }

    @Override
    public double getPreco() {
        return 15.00;
    }
}
