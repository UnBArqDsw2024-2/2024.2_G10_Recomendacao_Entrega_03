import java.util.ArrayList;
import java.util.List;

// Classe Composite Sobremesas
public class Sobremesas implements ItemCardapio {
    private List<ItemCardapio> itens = new ArrayList<>();

    @Override
    public String getCategoria() {
        return "Sobremesas";
    }

    @Override
    public double getPreco() {
        return itens.stream().mapToDouble(ItemCardapio::getPreco).sum();
    }

    @Override
    public void add(ItemCardapio item) {
        itens.add(item);
    }

    @Override
    public void remove(ItemCardapio item) {
        itens.remove(item);
    }

    @Override
    public ItemCardapio getChild(int index) {
        return itens.get(index);
    }
}
