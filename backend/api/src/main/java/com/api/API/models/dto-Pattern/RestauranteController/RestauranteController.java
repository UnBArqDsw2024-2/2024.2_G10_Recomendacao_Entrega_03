package RestauranteController;

import java.util.List;
import RestauranteDTO.RestauranteDTO;
import RecomendacaoService.RecomendacaoService;

public class RestauranteController {
    private final RecomendacaoService recomendacaoService;

    public RestauranteController(RecomendacaoService recomendacaoService) {
        this.recomendacaoService = recomendacaoService;
    }

    public List<RestauranteDTO> recomendarRestaurantes() {
        return recomendacaoService.recomendarRestaurantes();
    }
}
