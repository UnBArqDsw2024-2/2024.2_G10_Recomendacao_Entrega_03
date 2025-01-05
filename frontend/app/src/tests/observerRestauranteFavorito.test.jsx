import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ObserverRestauranteFavorito from '../components/observer/observerRestauranteFavorito';
import { RestauranteProvider } from '../contexts/restauranteContext';
import { FavoritosProvider } from '../contexts/favoritoContext';

describe('ObserverRestauranteFavorito Component', () => {
  test('deve notificar observadores ao atualizar um restaurante', () => {
    const { getByText } = render(
      <RestauranteProvider>
        <FavoritosProvider>
          <ObserverRestauranteFavorito />
        </FavoritosProvider>
      </RestauranteProvider>
    );

    fireEvent.click(getByText('Adicionar Restaurante'));
    fireEvent.click(getByText('Adicionar aos Favoritos'));

    const consoleSpy = jest.spyOn(console, 'log');

    fireEvent.click(getByText('Atualizar Restaurante'));

    expect(consoleSpy).toHaveBeenCalledWith('Notificado:', ['Prato 1', 'Prato 2'], ['Avaliação 1']);
    consoleSpy.mockRestore();
  });

  test('deve listar favoritos corretamente', () => {
    const { getByText, getByRole } = render(
      <RestauranteProvider>
        <FavoritosProvider>
          <ObserverRestauranteFavorito />
        </FavoritosProvider>
      </RestauranteProvider>
    );

    fireEvent.click(getByText('Adicionar Restaurante'));

    fireEvent.click(getByText('Adicionar aos Favoritos'));

    expect(getByRole('heading', { name: /favoritos:/i })).toBeInTheDocument();
    expect(getByText('Restaurante A')).toBeInTheDocument();
  });
});

