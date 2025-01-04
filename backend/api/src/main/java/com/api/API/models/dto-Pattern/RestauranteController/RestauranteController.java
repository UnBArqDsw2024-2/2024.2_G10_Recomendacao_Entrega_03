package MainDTO;

import java.util.List;

public class RestauranteController {
    private final RecomendacaoService recomendacaoService;

    public RestauranteController(RecomendacaoService recomendacaoService) {
        this.recomendacaoService = recomendacaoService;
    }

    public List<RestauranteDTO> recomendarRestaurantes() {
        return recomendacaoService.recomendarRestaurantes();
    }
}
