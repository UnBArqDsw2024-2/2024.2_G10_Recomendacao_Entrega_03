package MainDTO;

import java.util.List;
import java.util.stream.Collectors;

public class RestauranteMapper {
    public static RestauranteDTO toDTO(Restaurante restaurante) {
        return new RestauranteDTO(
            restaurante.getNome(),
            restaurante.getTipoCozinha(),
            restaurante.getAvaliacao(),
            restaurante.getPrecoMedio()
        );
    }

    public static List<RestauranteDTO> toDTOs(List<Restaurante> restaurantes) {
        return restaurantes.stream().map(RestauranteMapper::toDTO).collect(Collectors.toList());
    }
}
