# Singleton

## Introdução

O Design Pattern Singleton é um padrão que garante que existe sempre uma e somente uma instância de uma classe num projeto orientado a objetos. Além disso, essa instância pode ser acessada sempre globalmente [1]. Esse padrão é especialmente útil quando se quer, por exemplo, garantir que partes diferentes do código não acessem um mesmo recurso no mesmo instante de tempo. Pode-se utilizar, também, de técnicas como o Semáforo [2] ou o Mutex Lock [3] para que projetos multi-threaded ou concorrentes tenham acesso ao recurso de maneira sincronizada.

No presente projeto, arquivos de log (contendo erros, acesso ao banco de dados, etc) devem ser escritos, para que exista um registro do funcionamento do sistema [4]. Como o sistema do back-end é um servidor e, portanto, multi-threaded, segue-se que é possível que várias threads queiram ler ou escrever em um arquivo de log ao mesmo tempo. Para evitar perdas de dados, sobrescritas e outros tipos de erros, utilizaremos um Singleton com um mutex, que garantirá que (1) cada arquivo de log somente será acessado por uma única instância de uma classe e (2) esse acesso será sincronizado.

## Metodologia

## Modelagem

## Código

## Conclusão

## Referências Bibliográficas


>
> [1] Refactoring Guru. Singleton. Disponível em: <https://refactoring.guru/pt-br/design-patterns/singleton>. Acessado em 24 de Dezembro de 2024.
>
> [2] Wikipedia. Semaphore. Disponível em: <https://en.wikipedia.org/wiki/Semaphore_(programming)>. Acessado em 24 de Dezembro de 2024.
>
> [3] Wikipedia. Lock (computer science). Disponível em: <https://en.wikipedia.org/wiki/Lock_(computer_science)>. Acessado em 24 de Dezembro de 2024.
>
> [4] AWS. What is a Log File? - Log Files Explained. Disponível em: <https://aws.amazon.com/what-is/log-files/>. Acessado em 24 de Dezembro de 2024.
>

## Bibliografia

## Histórico de Versões

| Versão | Data | Descrição | Autor | Revisor |
| :----: | ---- | --------- | ----- | ------- |
| `1.0`  |24/12/2024| Criação do documento com introdução | [Lucas Queiroz](https://github.com/lucasqueiroz23) ||
