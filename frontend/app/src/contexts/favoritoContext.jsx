import React, { createContext, useContext, useState } from 'react';

const FavoritosContext = createContext();

export const FavoritosProvider = ({ children }) => {
    const [favoritos, setFavoritos] = useState([]);
  
    const listarFavoritos = () => favoritos;
  
    const adicionarFavorito = (restaurante) => {
      setFavoritos((prev) => [...prev, restaurante]);
    };
  
    const atualizar = (menu, avaliacoes) => {
      console.log('Favorito atualizado:', menu, avaliacoes);
    };
  
    return (
      <FavoritosContext.Provider value={{ listarFavoritos, adicionarFavorito, atualizar }}>
        {children}
      </FavoritosContext.Provider>
    );
  };
  
  export const useFavoritos = () => useContext(FavoritosContext);
  