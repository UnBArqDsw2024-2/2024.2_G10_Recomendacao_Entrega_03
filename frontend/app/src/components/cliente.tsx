import React from 'react';
import withUsuario from './hocUsuario';

//Componente Cliente, que recebe as props do usuário e informações de avaliações, destaques e favoritos
const Cliente: React.FC<{ usuario: { nome: string, senha: string, email: string }, avaliacoes: string[], destaques: string[], favoritos: string[] }> = ({ usuario, avaliacoes, destaques, favoritos }) => {
  return (
    <div>
      <h1>Bem-vindo, {usuario.nome}!</h1>
      <p>Email: {usuario.email}</p>

      <h2>Avaliações:</h2>
      <ul>
        {avaliacoes.length > 0 ? avaliacoes.map((avaliacao, index) => <li key={index}>{avaliacao}</li>) : <li>Sem avaliações ainda</li>}
      </ul>
      <h2>Destaques:</h2>
      <ul>
        {destaques.length > 0 ? destaques.map((destaque, index) => <li key={index}>{destaque}</li>) : <li>Sem destaques ainda</li>}
      </ul>
      <h2>Favoritos:</h2>
      <ul>
        {favoritos.length > 0 ? favoritos.map((favorito, index) => <li key={index}>{favorito}</li>) : <li>Sem favoritos ainda</li>}
      </ul>
    </div>
  );
};

//Componente Cliente decorado com HOC withUsuario
export default withUsuario(Cliente);


