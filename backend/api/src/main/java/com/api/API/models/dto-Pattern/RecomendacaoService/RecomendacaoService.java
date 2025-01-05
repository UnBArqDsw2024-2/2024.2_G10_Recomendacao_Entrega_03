package MainDTO;

import java.util.ArrayList;
import java.util.List;

public class RecomendacaoService {
    public List<RestauranteDTO> recomendarRestaurantes() {
        List<Restaurante> restaurantes = obterRestaurantesDoBanco();
        return RestauranteMapper.toDTOs(restaurantes);
    }

    private List<Restaurante> obterRestaurantesDoBanco() {
        List<Restaurante> restaurantes = new ArrayList<>();
        restaurantes.add(new Restaurante(1L, "Bistro Gourmet", "Descricao 1", "Endereco 1", "Francesa", 4.8, 120.0));
        restaurantes.add(new Restaurante(2L, "Sushi Bar", "Descricao 2", "Endereco 2", "Japonesa", 4.5, 80.0));
        return restaurantes;
    }
}
