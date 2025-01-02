package com.api.models;

public interface ItemCardapio {
    String getCategoria();
    double getPreco();

    default void add(ItemCardapio item) {
        throw new UnsupportedOperationException("Operação não suportada.");
    }

    default void remove(ItemCardapio item) {
        throw new UnsupportedOperationException("Operação não suportada.");
    }

    default ItemCardapio getChild(int index) {
        throw new UnsupportedOperationException("Operação não suportada.");
    }
}
