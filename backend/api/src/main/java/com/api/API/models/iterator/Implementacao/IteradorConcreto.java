package modelo.implementacao;

import modelo.entidades.Menu;
import modelo.entidades.Prato;
import modelo.iterador.Iterador;

public class IteradorConcreto implements Iterador {
    private Menu menu;
    private int posicaoAtual;

    public IteradorConcreto(Menu menu) {
        this.menu = menu;
        this.posicaoAtual = 0;
    }

    @Override
    public boolean temProximo() {
        return posicaoAtual < menu.getTotalPratos();
    }

    @Override
    public Prato proximo() {
        if (temProximo()) {
            return menu.getPratos()[posicaoAtual++];
        }
        return null;
    }

    @Override
    public Prato anterior() {
        if (posicaoAtual > 0) {
            return menu.getPratos()[--posicaoAtual];
        }
        return null;
    }

    @Override
    public void reiniciar() {
        posicaoAtual = 0;
    }
}
