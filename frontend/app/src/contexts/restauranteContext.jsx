import React, { createContext, useContext, useState } from 'react';

const RestauranteContext = createContext();

export const RestauranteProvider = ({ children }) => {
    const [restaurantes, setRestaurantes] = useState([]);
  
    const adicionarRestaurante = (restaurante) => {
      setRestaurantes((prev) => [...prev, { ...restaurante, observadores: [] }]);
    };
  
    const atualizarRestaurante = (id, menu, avaliacoes) => {
      setRestaurantes((prev) => {
        const atualizados = prev.map((restaurante) => {
          if (restaurante.id === id) {
            // Notifica os observadores
            restaurante.observadores.forEach((obs) => {
              obs.atualizar(menu, avaliacoes);
            });
            return { ...restaurante, menu, avaliacoes };
          }
          return restaurante;
        });
        return atualizados;
      });
    };
  
    const addObservador = (id, favorito) => {
      setRestaurantes((prev) => {
        return prev.map((restaurante) => {
          if (restaurante.id === id) {
            return {
              ...restaurante,
              observadores: [...restaurante.observadores, favorito],
            };
          }
          return restaurante;
        });
      });
    };
  
    return (
      <RestauranteContext.Provider
        value={{ restaurantes, adicionarRestaurante, atualizarRestaurante, addObservador }}
      >
        {children}
      </RestauranteContext.Provider>
    );
  };
  
  export const useRestaurante = () => useContext(RestauranteContext);