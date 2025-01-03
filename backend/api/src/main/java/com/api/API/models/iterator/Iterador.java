package modelo.iterador;

public interface Iterador {
    boolean temProximo();
    int posicaoProximo();
    Object proximo();

    boolean temAnterior();
    int posicaoAnterior();
    Object anterior();

    void reiniciar();
}
