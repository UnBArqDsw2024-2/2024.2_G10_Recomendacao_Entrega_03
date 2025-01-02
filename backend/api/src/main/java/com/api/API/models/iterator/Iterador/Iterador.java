package modelo.iterador;

public interface Iterador {
    boolean temProximo();
    Object proximo();
    Object anterior();
    void reiniciar();
}
