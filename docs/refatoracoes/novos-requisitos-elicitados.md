# Representação dos Requisitos Funcionais

## Introdução

<p style="text-align: justify; text-indent: 2em;"> A representação dos requisitos funcionais é um passo essencial no desenvolvimento de software, uma vez que define claramente as funcionalidades e comportamentos que o sistema deve apresentar. Os requisitos funcionais são descrições detalhadas do que o sistema deve fazer, como processar dados, interagir com os usuários e outros sistemas, ou realizar tarefas específicas. Essas informações servem como base para o desenvolvimento, testes e validação do sistema.</p>

<p style="text-align: justify; text-indent: 2em;"> Representar requisitos de forma clara e precisa é fundamental para garantir que os desenvolvedores compreendam as expectativas dos stakeholders e construam o sistema de acordo com essas necessidades. Além disso, a representação adequada reduz o risco de mal-entendidos, atrasos ou falhas no projeto.</p>

<p style="text-align: justify; text-indent: 2em;"> Autores como Sommerville (2011)[1] e Pressman (2014)[2] destacam que a correta representação dos requisitos não só facilita a comunicação entre as partes envolvidas no projeto, mas também ajuda a identificar e corrigir problemas de maneira mais eficiente durante o ciclo de vida do desenvolvimento.</p>

## Metodologia

<p style="text-align: justify; text-indent: 2em;"> Na <a href="https://unbarqdsw2024-2.github.io/2024.2_G10_Recomendacao_Entrega_03/#/atas-reuniao/ata-reuniao-10-12">reunião do dia 10/12</a>, percebemos que com a necessidade de aumento de escopo, o nosso diagrama de classes teria que ser refatorado e com isso surgiu a necessidade de refatorarmos também os requisitos que já foram elicitados, além de adicionar novos requisitos. Assim, nessa reunião foi decidido que as responsáveis pela refatoração dos requisitos seriam Cecília, Júlia e Maria Alice. </p>
<p style="text-align: justify; text-indent: 2em;"> Portanto, os requisitos foram refatorados e adicionados de acordo com o novo <a href="https://unbarqdsw2024-2.github.io/2024.2_G10_Recomendacao_Entrega_03/#/refatoracoes/diagrama-de-classes">diagrama de classes</a>. Vimos a necessidade de refatorar os <a href="https://unbarqdsw2024-2.github.io/2024.2_G10_Recomendacao_Entrega_02/#/elicitacao-e-priorizacao/requisitos-elicitados"> requisitos elicitados na segunda entrega</a> já que agora possuímos dois tipos de usuário(cliente e funcionário) e por termos mais classes interagindo entre si.</p>

<p style="text-align: justify; text-indent: 2em;">A representação dos requisitos funcionais elicitados continua seguindo a forma: </p>

<div align="center">


   <font size="3">
         <p><b>Tabela 1:</b> Estrutura da tabela</p>
   </font>

|Identificador|Nome|Descrição|
|--|--|--|
| - | - | - |

   <font size="3">
         <p><b>Fonte:</b> <a href="https://github.com/juliaryoshida">Júlia Yoshida</a>, 2024</p>
   </font>

</div>
<p style="text-align: justify; text-indent: 2em;">Onde:</p>

 - **Identificador**: Um código único atribuído ao requisito para identificá-lo de forma clara e inequívoca dentro do projeto. Facilita o rastreamento e a referência durante o desenvolvimento, testes e manutenção. Exemplo: RF01(Requisito Funcional 01).
 - **Nome**: Um rótulo curto e direto que identifica o requisito de forma resumida.
 - **Descrição**: Uma explicação detalhada do requisito, descrevendo a funcionalidade ou característica que o sistema deve ter.


## Requisitos Funcionais

<p style="text-align: justify; text-indent: 2em;">A seguir, temos a nova tabela de requisitos funcionais:</p>

<div align="center">
   <font size="3">
         <p><b>Tabela 2:</b> Tabela de requisitos funcionais</p>
   </font>
</div>

| Identificador | Nome | Descrição |
|--|--|--|
| RF01| Cadastrar usuário| O sistema deve permitir que novos usuários (cliente ou funcionário) se cadastrem informando nome completo, e-mail, senha e telefone. O sistema deve validar a unicidade do e-mail e enviar um e-mail de confirmação após o cadastro.| 
| RF02| Editar dados da conta de usuário| O sistema deve permitir que usuários autenticados (cliente ou funcionário) editem suas informações de conta, como nome, e-mail e senha. O sistema deve validar as alterações para garantir que o e-mail seja único.| 
| RF03| Visualizar dados de conta de usuário| O sistema deve permitir que usuários autenticados (cliente ou funcionário) visualizem seus dados cadastrais, incluindo nome, e-mail e telefone.| 
| RF04| Excluir conta de usuário| O sistema deve permitir que usuários autenticados (cliente ou funcionário) excluam suas contas, removendo todos os dados relacionados a elas do sistema. A exclusão deve ser permanente após a confirmação do usuário.| 
| RF05| Cadastro de restaurante| O sistema deve permitir que apenas funcionários autenticados realizem o cadastro de restaurantes, inserindo nome, endereço, foto e categoria.| 
| RF06| Editar dados de restaurante| O sistema deve permitir que apenas funcionários autenticados editem os dados de nome, foto, endereço e categoria de um restaurante.| 
| RF07| Visualizar dados de restaurante| O sistema deve permitir que todos os usuários (clientes e funcionários) visualizem as informações de um restaurante, incluindo nome, tipo de culinária, endereço e horários de funcionamento.| 
| RF08| Excluir restaurante cadastrado| O sistema deve permitir que apenas funcionários autenticados excluam restaurantes, removendo todos os dados relacionados a eles do sistema.| 
| RF09| Login de usuário| O sistema deve permitir que usuários (cliente ou funcionário) façam login no sistema utilizando seu e-mail e senha. O sistema deve verificar a autenticidade das credenciais e permitir o acesso ao sistema se as informações forem válidas.| 
| RF10| Logout de usuário| O sistema deve permitir que usuários autenticados (cliente ou funcionário) realizem logout, desconectando sua sessão e garantindo que não haja mais acesso às funcionalidades restritas até o próximo login.| 
| RF11| Cadastro de avaliação| O sistema deve permitir que apenas clientes autenticados realizem a avaliação de restaurantes desejados, podendo dar um número de estrelas e deixar um comentário de modo opcional.| 
| RF12| Exclusão de avaliação| O sistema deve permitir que apenas clientes autenticados excluam suas avaliações do fórum do restaurante.| 
| RF13| Filtrar por categorias| O sistema deve disponibilizar para todos os usuários (clientes e funcionários) as seguintes opções para categorizar os tipos de restaurante: Brasileira, japonesa, chinesa, italiana, árabe, doces e sobremesas, mexicana, fast-food, padaria, café, hambúrguer, lámen, pizzaria, bolos, sorvete, café da manhã, vegano, sem glúten, vegetariano, bebidas, self-service, churrasco e frutos do mar.| 
| RF14| Buscar restaurantes por categorias| O sistema deve permitir que todos os usuários (clientes e funcionários) apliquem um filtro para selecionar o tipo de categoria de restaurante a ser visualizada.| 
| RF15| Buscar restaurantes| O sistema deve possuir barra de pesquisa para que todos os usuários (clientes e funcionários) pesquisem pelo nome do restaurante que desejam avaliar/visualizar.| 
| RF16| Visualizar avaliações por usuário| O sistema deve permitir que clientes autenticados acessem, em seu perfil, suas avaliações já feitas.| 
| RF17| Visualizar avaliações por outros usuários| O sistema deve permitir que todos os usuários (clientes e funcionários) acessem, na página do restaurante, as avaliações já feitas por terceiros.| 
| RF18 | Cadastro único de restaurante| O sistema deve mostrar aos funcionários autenticados, ao tentar adicionar novo restaurante, nomes similares/já existentes a fim de evitar repetições.| 
| RF19 | Obter média de avaliações| O sistema deve mostrar automaticamente aos usuários (clientes e funcionários) a média das avaliações de cada restaurante.| 
| RF20 | Curtir avaliação| O sistema deve permitir que clientes autenticados curtam avaliações realizadas por outros usuários.| 
| RF21| Ordenar avaliação| O sistema deve permitir que todos os usuários (clientes e funcionários) ordenem as avaliações de um restaurante em ordem crescente ou decrescente com base no número de curtidas ou data de criação da avaliação.| 
| RF22| Gerenciamento de destaques| O sistema deve permitir que todos os usuários (clientes e funcionários) visualizem restaurantes em destaque, com base na quantidade de curtidas e avaliações positivas.| 
| RF23| Adicionar favoritos| O sistema deve permitir que apenas clientes autenticados marquem restaurantes como favoritos para fácil acesso futuro.| 
| RF24| Remover favoritos| O sistema deve permitir que apenas clientes autenticados removam restaurantes previamente marcados como favoritos.| 
| RF25| Notificação de alterações| O sistema deve enviar notificações aos clientes autenticados quando um restaurante marcado como favorito sofrer alterações, como mudança de horário ou inclusão de pratos.| 
| RF26| Avaliações multimídia| O sistema deve permitir que apenas clientes autenticados adicionem imagens e vídeos às avaliações realizadas.
| RF27| Gerenciamento de tags| O sistema deve permitir que clientes autenticados adicionem e gerenciem tags às suas avaliações.| 
| RF28| Exclusão de tags| O sistema deve permitir que clientes autenticados removam tags previamente adicionadas.| 
| RF29| Relatórios de atividade| O sistema deve fornecer relatórios para funcionários autenticados sobre as atividades do sistema, como número de avaliações e restaurantes cadastrados.| 
| RF30| Visualização de menus| O sistema deve permitir que todos os usuários (clientes e funcionários) visualizem o menu completo de um restaurante, incluindo pratos e preços.| 
| RF31| Atualização de preços de pratos| O sistema deve permitir que apenas funcionários autenticados atualizem os preços dos pratos disponíveis no menu.| 
| RF32| Gerenciamento de categorias| O sistema deve permitir que apenas funcionários autenticados criem, editem e excluam categorias de restaurantes.| 
| RF33| Remoção de avaliações por moderadores| O sistema deve permitir que funcionários autenticados removam avaliações que violem os termos de uso.| 
| RF34| Feedback automático| O sistema deve sugerir melhorias automáticas aos funcionários autenticados, com base nas avaliações recebidas pelos restaurantes.| 
| RF35| Controle de status de avaliações| O sistema deve permitir que clientes autenticados arquivem ou tornem públicas as avaliações realizadas.
| RF36| Popularidade de pratos| O sistema deve exibir aos usuários (clientes e funcionários) os pratos mais populares de um restaurante, com base nas avaliações.| 
| RF37| Busca por localização	| O sistema deve permitir que todos os usuários (clientes e funcionários) filtrem restaurantes por proximidade, com base em localização geográfica.| 

<div align="center">
   <font size="3">
         <p><b>Fonte:</b> <a href="https://github.com/cqcoding">Cecília Quaresma</a>, <a href="https://github.com/juliaryoshida">Júlia Yoshida</a> e <a href="https://github.com/Maliz30">Maria Alice</a>, 2025</p>
   </font>
</div>



## Referências Bibliográficas

> [1] SOMMERVILLE, I. Software Engineering. Addison-Wesley, 2011.
>
> [2] PRESSMAN, R. S. Engenharia de Software: uma abordagem profissional. McGraw Hill, 2020.


## Histórico de Versão

| Versão | Data | Descrição | Autor | Revisor |
| :----: | ---- | --------- | ----- | ------- |
| `1.0`  | 12/12/2024 | Criação da branch e adição do documento | [Cecília Quaresma](https//github.com/cqcoding) |[Júlia Yoshida](https//github.com/juliaryoshida) |
| `1.1`  | 03/01/2025 | Atualização da tabela de requisitos |[Júlia Yoshida](https//github.com/juliaryoshida)<br> [Maria Alice](https//github.com/maliz30) | [Cecília Quaresma](https//github.com/cqcoding) |

