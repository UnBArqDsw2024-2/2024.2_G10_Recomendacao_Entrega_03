package com.api.models;
import java.util.ArrayList;
import java.util.List;

// Classe Composite Sobremesas
public class SobremesaComposite implements ItemCardapioComposite {
    private List<ItemCardapioComposite> itens = new ArrayList<>();

    @Override
    public String getCategoria() {
        return "Sobremesas";
    }

    @Override
    public double getPreco() {
        return itens.stream().mapToDouble(ItemCardapioComposite::getPreco).sum();
    }

    @Override
    public void add(ItemCardapioComposite item) {
        itens.add(item);
    }

    @Override
    public void remove(ItemCardapioComposite item) {
        itens.remove(item);
    }

    @Override
    public ItemCardapioComposite getChild(int index) {
        return itens.get(index);
    }
}
