package MainDTO;

public class RestauranteDTO {
    private String nome;
    private String tipoCozinha;
    private double avaliacao;
    private double precoMedio;

    public RestauranteDTO(String nome, String tipoCozinha, double avaliacao, double precoMedio) {
        this.nome = nome;
        this.tipoCozinha = tipoCozinha;
        this.avaliacao = avaliacao;
        this.precoMedio = precoMedio;
    }

    public String getNome() { return nome; }
    public String getTipoCozinha() { return tipoCozinha; }
    public double getAvaliacao() { return avaliacao; }
    public double getPrecoMedio() { return precoMedio; }
}
