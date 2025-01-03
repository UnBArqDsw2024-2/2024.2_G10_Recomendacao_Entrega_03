import React, { ComponentType } from 'react';

//Define os tipos das props específicas para um Usuário
interface UsuarioProps {
  nome: string;
  senha: string;
  email: string;
}

//Define uma HOC que adiciona as props de Usuário ao componente base
const withUsuario = <P extends object>(
  WrappedComponent: ComponentType<P & { usuario: UsuarioProps }>
) => {
  return (props: P) => {
    const usuarioData: UsuarioProps = {
      nome: 'Usuário Padrão',
      senha: '1234',
      email: 'usuario@padrao.com',
      ...props, //Permite que props dinâmicos sobrescrevam os valores padrão
    };

    return <WrappedComponent {...props} usuario={usuarioData} />;
  };
};

export default withUsuario;



