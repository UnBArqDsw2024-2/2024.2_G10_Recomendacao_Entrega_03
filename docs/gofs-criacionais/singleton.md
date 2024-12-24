# Singleton

## Introdução

O Design Pattern Singleton é um padrão que garante que existe sempre uma e somente uma instância de uma classe num projeto orientado a objetos. Além disso, essa instância pode ser acessada sempre globalmente [1]. Esse padrão é especialmente útil quando se quer, por exemplo, garantir que partes diferentes do código não acessem um mesmo recurso no mesmo instante de tempo. Pode-se utilizar, também, de técnicas como o Semáforo [2] ou o Mutex Lock [3] para que projetos multi-threaded ou concorrentes tenham acesso ao recurso de maneira sincronizada.

No presente projeto, arquivos de log (contendo erros, acesso ao banco de dados, etc) devem ser escritos, para que exista um registro do funcionamento do sistema [4]. Como o sistema do back-end é um servidor e, portanto, multi-threaded, segue-se que é possível que várias threads queiram ler ou escrever em um arquivo de log ao mesmo tempo. Para evitar perdas de dados, sobrescritas e outros tipos de erros, utilizaremos um Singleton com um mutex, que garantirá que (1) cada arquivo de log somente será acessado por uma única instância de uma classe e (2) esse acesso será sincronizado.

## Metodologia

## Modelagem

No nosso sistema, poderíamos utilizar arquivos de log para vários contextos. No entanto, desejamos logs apenas para:

- O cadastro e a exclusão de Restaurantes por um Funcionário;
- A Avaliação de um Restaurante por um Cliente. 

A modelagem, na Figura 1, abstrai o conteúdo (métodos e atributos) das classes citadas (Avaliação, Cliente, Funcionário e Restaurante), por motivos de simplicidade na visualização do diagrama. Para verificar o conteúdo dessas classes, veja o [Diagrama de Classes](https://unbarqdsw2024-2.github.io/2024.2_G10_Recomendacao_Entrega_03/#/refatoracoes/diagrama-de-classes).

<center>
<p style="text-align: center"><b>Figura 1:</b> Diagrama UML para o Singleton utilizado no projeto.</p>
<div align="center">
  <img src="https://raw.githubusercontent.com/UnBArqDsw2024-2/2024.2_G10_Recomendacao_Entrega_03/refs/heads/main/docs/imagens/diagrama-singleton.png?raw=true" alt="Diagrama de classes do Singleton" >
</div>
<font size="3"><p style="text-align: center"><b>Fonte:</b> <a href="https://github.com/lucasqueiroz23">Lucas Queiroz</a>, 2024</p></font>
</center>

## Código

## Conclusão

## Referências Bibliográficas

> [1] Refactoring Guru. Singleton. Disponível em: <https://refactoring.guru/pt-br/design-patterns/singleton>. Acessado em 24 de Dezembro de 2024.
> 
> [2] Wikipedia. Semaphore. Disponível em: <https://en.wikipedia.org/wiki/Semaphore_(programming)>. Acessado em 24 de Dezembro de 2024.
> 
> [3] Wikipedia. Lock (computer science). Disponível em: <https://en.wikipedia.org/wiki/Lock_(computer_science)>. Acessado em 24 de Dezembro de 2024.
> 
> [4] AWS. What is a Log File? - Log Files Explained. Disponível em: <https://aws.amazon.com/what-is/log-files/>. Acessado em 24 de Dezembro de 2024.

## Bibliografia

## Histórico de Versões

| Versão | Data       | Descrição                                       | Autor                                              | Revisor |
|:------:| ---------- | ----------------------------------------------- | -------------------------------------------------- | ------- |
| `1.0`  | 24/12/2024 | Criação do documento com introdução e modelagem | [Lucas Queiroz](https://github.com/lucasqueiroz23) |         |
