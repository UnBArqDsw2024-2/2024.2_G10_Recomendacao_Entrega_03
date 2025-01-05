package MainDTO;

public class Restaurante {
    private Long id;
    private String nome;
    private String descricao;
    private String endereco;
    private String tipoCozinha;
    private double avaliacao;
    private double precoMedio;

    public Restaurante(Long id, String nome, String descricao, String endereco, String tipoCozinha, double avaliacao, double precoMedio) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.endereco = endereco;
        this.tipoCozinha = tipoCozinha;
        this.avaliacao = avaliacao;
        this.precoMedio = precoMedio;
    }

    public Long getId() { return id; }
    public String getNome() { return nome; }
    public String getDescricao() { return descricao; }
    public String getEndereco() { return endereco; }
    public String getTipoCozinha() { return tipoCozinha; }
    public double getAvaliacao() { return avaliacao; }
    public double getPrecoMedio() { return precoMedio; }
}
