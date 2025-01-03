package com.api.models;

public interface ItemCardapioComposite {
    String getCategoria();
    double getPreco();

    default void add(ItemCardapioComposite item) {
        throw new UnsupportedOperationException("Operação não suportada.");
    }

    default void remove(ItemCardapioComposite item) {
        throw new UnsupportedOperationException("Operação não suportada.");
    }

    default ItemCardapioComposite getChild(int index) {
        throw new UnsupportedOperationException("Operação não suportada.");
    }
}
