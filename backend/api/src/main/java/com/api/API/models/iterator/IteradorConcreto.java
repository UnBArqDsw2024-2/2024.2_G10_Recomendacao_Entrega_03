package modelo.implementacao;

import com.api.API.models.Menu;
import com.api.API.models.Prato;
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
    public boolean temAnterior() {
        return posicaoAtual > 0;
    }

    @Override
    public int posicaoAnterior() {

        if(temAnterior()) 
            return posicaoAtual - 1;
        
        return -1;
    }

    @Override
    public int posicaoProximo() {

        if(temProximo()) 
            return posicaoAtual + 1;
        
        return -1;
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
        if (temAnterior()) {
            return menu.getPratos()[--posicaoAtual];
        }
        return null;
    }

    @Override
    public void reiniciar() {
        posicaoAtual = 0;
    }
}
