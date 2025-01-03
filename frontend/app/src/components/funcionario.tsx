import React from 'react';
import withUsuario from './hocUsuario';

//Componente Funcionario, que recebe as props do usuário e informações de cargo, telefone e restaurante
const Funcionario: React.FC<{ usuario: { nome: string, senha: string, email: string }, cargo: string, telefone: string, restaurante: string }> = ({ usuario, cargo, telefone, restaurante }) => {
  return (
    <div>
      <h1>Bem-vindo ao Dashboard, {usuario.nome}!</h1>
      <p>Email: {usuario.email}</p>

      <h2>Cargo: {cargo}</h2>
      <p>Telefone: {telefone}</p>
      <p>Restaurante: {restaurante}</p>
    </div>
  );
};

//Componente Funcionario decorado com HOC withUsuario
export default withUsuario(Funcionario);



