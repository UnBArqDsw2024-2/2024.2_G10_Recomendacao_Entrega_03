package modelo.entidades;

public class Restaurante {
    private String nome;
    private Menu menu;

    public Restaurante(String nome, int capacidadeMenu) {
        this.nome = nome;
        this.menu = new Menu(capacidadeMenu);
    }

    public String getNome() {
        return nome;
    }

    public Menu getMenu() {
        return menu;
    }
}
