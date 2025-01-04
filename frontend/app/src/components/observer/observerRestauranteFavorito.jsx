import React from 'react';
import { useRestaurante } from '../../contexts/restauranteContext'; 
import { useFavoritos } from '../../contexts/favoritoContext'; 
import { RestauranteProvider } from '../../contexts/restauranteContext';
import { FavoritosProvider } from '../../contexts/favoritoContext';

const ObserverRestauranteFavorito = () => {
  const { adicionarRestaurante, atualizarRestaurante, addObservador, restaurantes } = useRestaurante();
  const { adicionarFavorito, listarFavoritos } = useFavoritos();

  const handleAdicionarRestaurante = () => {
    adicionarRestaurante({ id: 1, nome: 'Restaurante A', menu: [], avaliacoes: [] });
  };

  const handleAdicionarFavorito = () => {
    const restaurante = restaurantes.find((r) => r.id === 1);
    adicionarFavorito(restaurante);
    addObservador(1, { atualizar: (menu, avaliacoes) => console.log('Notificado:', menu, avaliacoes) });
  };

  const handleAtualizarRestaurante = () => {
    atualizarRestaurante(1, ['Prato 1', 'Prato 2'], ['Avaliação 1']);
  };

  return (
    <div>
      <button onClick={handleAdicionarRestaurante}>Adicionar Restaurante</button>
      <button onClick={handleAdicionarFavorito}>Adicionar aos Favoritos</button>
      <button onClick={handleAtualizarRestaurante}>Atualizar Restaurante</button>
      <h2>Favoritos:</h2>
      {listarFavoritos().map((fav, index) => (
        <div key={index}>{fav.nome}</div>
      ))}
    </div>
  );
};

export default () => (
  <RestauranteProvider>
    <FavoritosProvider>
      <ObserverRestauranteFavorito />
    </FavoritosProvider>
  </RestauranteProvider>
);

