package Main;

import java.util.List;
import RecomendacaoService.RecomendacaoService;
import RestauranteController.RestauranteController;
import RestauranteDTO.RestauranteDTO;

public class Main {
    public static void main(String[] args) {
        // Instanciando o servico de recomendacao
        RecomendacaoService recomendacaoService = new RecomendacaoService();

        // Criando o controller com o servico injetado
        RestauranteController restauranteController = new RestauranteController(recomendacaoService);

        // Chamando o metodo de recomendacao de restaurantes no controller
        List<RestauranteDTO> response = restauranteController.recomendarRestaurantes();

        // Exibindo os resultados
        System.out.println("Lista de Restaurantes Recomendados:");
        for (RestauranteDTO restaurante : response) {
            System.out.println("--------------------------------------");
            System.out.println("Nome: " + restaurante.getNome());
            System.out.println("Tipo de Cozinha: " + restaurante.getTipoCozinha());
            System.out.println("Avaliacao: " + restaurante.getAvaliacao());
            System.out.println("Preco Medio: R$ " + restaurante.getPrecoMedio());
        }
    }
}
