# Mediator

## Introdução

No projeto Chef Indica, utilizamos o padrão de projeto Mediator, um dos padrões comportamentais descritos por Gamma et al. (1994) [1], como uma solução eficaz para organizar a comunicação entre diferentes componentes do sistema. Esse padrão tem como principal objetivo encapsular a interação entre objetos, promovendo um design mais limpo e desacoplado, onde as classes deixam de depender diretamente umas das outras.

A aplicação do Mediator é particularmente relevante para a implementação de funcionalidades complexas, como os fóruns de restaurantes. Nesse contexto, diferentes entidades, como usuários, tópicos e mensagens, precisam interagir de maneira coordenada. O Mediator atua como um ponto central de comunicação, simplificando a troca de informações e garantindo que cada componente permaneça focado em suas responsabilidades individuais (Freeman & Robson, 2020) [2].

Esse padrão contribui significativamente para a manutenção e escalabilidade do sistema, reduzindo a complexidade das interações e facilitando futuras expansões ou alterações no comportamento das classes (Fowler, 2003) [3].

## Metodologia

Antes de iniciar o desenvolvimento do padrão **Mediator**, a equipe realizou uma chamada em grupo, conforme documentado na [ata de reunião](https://unbarqdsw2024-2.github.io/2024.2_G10_Recomendacao_Entrega_03/#/atas-reuniao/ata-reuniao-17-12) do dia 17 de dezembro de 2024. Durante a discussão, identificamos que o Mediator seria uma escolha estratégica de padrão de projeto para resolver alguns desafios específicos no nosso código, como a redução do acoplamento entre componentes e a melhoria da organização geral.

Após a decisão, foram definidas quatro pessoas da equipe para trabalhar neste padrão e foram definidades responsabilidades entre os mesmos quatro membros da equipe:

- **Luana de Lima Medeiros**: responsável pela modelagem do padrão e pela elaboração da introdução do artefato.  
- **Lucas Víctor Ferreira de Araújo**: encarregado do desenvolvimento do código, implementando as funcionalidades do Mediator na aplicação.  
- **Izabella Alves Pereira**: responsável pela documentação da metodologia, descrevendo os passos seguidos para a adoção do padrão.  
- **Caio Mesquita Vieira**: encarregado pela conclusão do artefato e a consolidação dos aprendizados da equipe.

O trabalho teve início com a criação do diagrama de classes, que foi modelado com base nos requisitos identificados. O diagrama reflete a estrutura principal do padrão Mediator, contendo a interface que define a comunicação entre os componentes, uma implementação concreta do Mediator que centraliza a lógica de interação e diversos componentes como UserComponent, FilterComponent e RestaurantComponent, que interagem por meio do Mediator para manterem-se desacoplados.

## Modelagem

O diagrama apresentado ilustra a aplicação do padrão comportamental Mediator no contexto de um sistema de recomendação de restaurantes. O objetivo principal do Mediator é centralizar e organizar a comunicação entre diferentes componentes do sistema, reduzindo o acoplamento e facilitando a manutenção. 

Os principais elementos do diagrama incluem a interface Mediator, que gerencia a comunicação entre os componentes, e a interface Component, que define as operações básicas que cada componente deve implementar. O ConcreteMediator coordena os componentes concretos, como UserComponent, RestaurantComponent e FilterComponent, representando funcionalidades específicas como envio de feedback, atualização de detalhes e aplicação de filtros. 

<center>
<p style="text-align: center"><b>Figura 1:</b> Diagrama UML para o Mediator utilizado no projeto.</p>
<div align="center">
  <img src="https://raw.githubusercontent.com/UnBArqDsw2024-2/2024.2_G10_Recomendacao_Entrega_03/refs/heads/main/docs/imagens/Diagrama_Mediator.jpeg?raw=true" alt="Diagrama de classes do Mediator" >
</div>
<font size="3"><p style="text-align: center"><b>Fonte:</b> <a href="https://github.com/LuaMedeiros">Luana Medeiros</a>, 2024</p></font>
</center>


## Código
O código do Mediator encontra-se nos arquivos [MediatorController](C:\Users\lucas\OneDrive\Documentos\2024.2_G10_Recomendacao_Entrega_03\backend\api\src\main\java\com\api\API\controllers\MediatorController.java), [Component](C:\Users\lucas\OneDrive\Documentos\2024.2_G10_Recomendacao_Entrega_03\backend\api\src\main\java\com\api\API\models\component\Component.java), [ConcreteComponent](C:\Users\lucas\OneDrive\Documentos\2024.2_G10_Recomendacao_Entrega_03\backend\api\src\main\java\com\api\API\models\component\ConcreteComponent.java), [FilterComponent](C:\Users\lucas\OneDrive\Documentos\2024.2_G10_Recomendacao_Entrega_03\backend\api\src\main\java\com\api\API\models\component\FilterComponent.java), [RestaurantComponent](C:\Users\lucas\OneDrive\Documentos\2024.2_G10_Recomendacao_Entrega_03\backend\api\src\main\java\com\api\API\models\component\RestaurantComponent.java), [UserComponent](C:\Users\lucas\OneDrive\Documentos\2024.2_G10_Recomendacao_Entrega_03\backend\api\src\main\java\com\api\API\models\component\UserComponent.java), [IteradorConcreto](https://github.com/UnBArqDsw2024-2/2024.2_G10_Recomendacao_Entrega_03/blob/main/backend/api/src/main/java/com/api/API/models/iterator/IteradorConcreto.java), [ConcreteMediator](C:\Users\lucas\OneDrive\Documentos\2024.2_G10_Recomendacao_Entrega_03\backend\api\src\main\java\com\api\API\models\mediator\ConcreteMediator.java) e [Mediator](C:\Users\lucas\OneDrive\Documentos\2024.2_G10_Recomendacao_Entrega_03\backend\api\src\main\java\com\api\API\models\mediator\Mediator.java). 

Abaixo, estão imagens da implementação.

#### Código do MediatorController 

``` java
package com.api.API.controllers;

import java.util.Arrays;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.api.API.models.component.ConcreteComponent;
import com.api.API.models.component.FilterComponent;
import com.api.API.models.component.RestaurantComponent;
import com.api.API.models.component.UserComponent;
import com.api.API.models.mediator.ConcreteMediator;

@RestController
@RequestMapping("/mediator")
public class MediatorController {

    private final ConcreteMediator mediator;

    // Construtor para inicializar o mediator e registrar componentes
    public MediatorController() {
        // Inicializando o Mediator
        this.mediator = new ConcreteMediator();

        // Criando e registrando componentes
        ConcreteComponent admin = new ConcreteComponent("Admin", "Gestão");
        FilterComponent filtro = new FilterComponent(Arrays.asList("Preço", "Localização"));
        RestaurantComponent restaurante = new RestaurantComponent("Restaurante ABC", "Rua Principal, 123");
        UserComponent usuario = new UserComponent("João");

        // Registrando os componentes no Mediator
        mediator.registrar(admin);
        mediator.registrar(filtro);
        mediator.registrar(restaurante);
        mediator.registrar(usuario);
    }

    // Endpoint para testar o Mediator
    @GetMapping("/testMediator")
    public String testMediator() {
        // Mensagem simulada
        mediator.enviarMensagem(null, "Testando comunicação via Mediator!");
        return "Mediator testado com sucesso! Confira os logs do console.";
    }

    // Método para testar o registro de componentes
    @GetMapping("/testRegistrar")
    public String testRegistrar() {
        // Criando componentes adicionais
        ConcreteComponent admin = new ConcreteComponent("Admin", "Gestão");
        FilterComponent filtro = new FilterComponent(Arrays.asList("Preço", "Localização"));
        RestaurantComponent restaurante = new RestaurantComponent("Restaurante ABC", "Rua Principal, 123");
        UserComponent usuario = new UserComponent("João");

        // Registrando componentes no Mediator
        mediator.registrar(admin);
        mediator.registrar(filtro);
        mediator.registrar(restaurante);
        mediator.registrar(usuario);

        // Verificando se os componentes foram registrados com sucesso
        boolean sucesso = true;
        sucesso &= mediator.getComponentes().contains(admin);
        sucesso &= mediator.getComponentes().contains(filtro);
        sucesso &= mediator.getComponentes().contains(restaurante);
        sucesso &= mediator.getComponentes().contains(usuario);

        // Retornando o resultado do teste
        if (sucesso) {
            return "Componentes registrados com sucesso!";
        } else {
            return "Falha ao registrar componentes!";
        }
    }
}
``` 
<font size="2"><p style="text-align: center"><b>Fonte:</b> <a href="https://github.com/Lucas13032003">Lucas Víctor</a>, 2024</p></font>

#### Código do interface Component 

```java
package com.api.API.models.component;

import com.api.API.models.mediator.Mediator;

public interface Component {
    void setMediator(Mediator mediator);
    void receberMensagem(String mensagem);
    void enviarMensagem(String mensagem);
}
``` 
<font size="2"><p style="text-align: center"><b>Fonte:</b> <a href="https://github.com/Lucas13032003">Lucas Víctor</a>, 2024</p></font>

#### Código do ConcreteComponent

```java
package com.api.API.models.component;

import com.api.API.models.mediator.Mediator;

public class ConcreteComponent implements Component {
    private Mediator mediator;
    private final String nome;
    private final String tipo;

    public ConcreteComponent(String nome, String tipo) {
        this.nome = nome;
        this.tipo = tipo;
    }

    @Override
    public void setMediator(Mediator mediator) {
        this.mediator = mediator;
    }

    @Override
    public void receberMensagem(String mensagem) {
        System.out.println(nome + " recebeu: " + mensagem);
    }

    @Override
    public void enviarMensagem(String mensagem) {
        System.out.println(nome + " enviando: " + mensagem);
        mediator.enviarMensagem(this, mensagem);
    }
}
``` 
<font size="2"><p style="text-align: center"><b>Fonte:</b> <a href="https://github.com/Lucas13032003">Lucas Víctor</a>, 2024</p></font>

#### Código do FilterComponent

```java
package com.api.API.models.component;

import java.util.List;

import com.api.API.models.mediator.Mediator;

public class FilterComponent implements Component {
    private Mediator mediator;
    private final List<String> criterios;

    public FilterComponent(List<String> criterios) {
        this.criterios = criterios;
    }

    @Override
    public void setMediator(Mediator mediator) {
        this.mediator = mediator;
    }

    @Override
    public void receberMensagem(String mensagem) {
        System.out.println("Filtro recebeu mensagem: " + mensagem);
    }

    public void aplicarFiltro(String criterios) {
        System.out.println("Aplicando filtro: " + criterios);
    }

    @Override
    public void enviarMensagem(String mensagem) {
        mediator.enviarMensagem(this, mensagem);
    }
}

``` 

<font size="2"><p style="text-align: center"><b>Fonte:</b> <a href="https://github.com/Lucas13032003">Lucas Víctor</a>, 2024</p></font>

#### Código do RestaurantComponent

```java
package com.api.API.models.component;

import com.api.API.models.mediator.Mediator;

public class RestaurantComponent implements Component {
    private Mediator mediator;
    private final String nomeRestaurante;
    private final String endereco;

    public RestaurantComponent(String nomeRestaurante, String endereco) {
        this.nomeRestaurante = nomeRestaurante;
        this.endereco = endereco;
    }

    @Override
    public void setMediator(Mediator mediator) {
        this.mediator = mediator;
    }

    @Override
    public void receberMensagem(String mensagem) {
        System.out.println(nomeRestaurante + " recebeu mensagem: " + mensagem);
    }

    public void atualizarDetalhes(String detalhes) {
        System.out.println("Atualizando detalhes do restaurante: " + detalhes);
    }

    @Override
    public void enviarMensagem(String mensagem) {
        mediator.enviarMensagem(this, mensagem);
    }
}

``` 
<font size="2"><p style="text-align: center"><b>Fonte:</b> <a href="https://github.com/Lucas13032003">Lucas Víctor</a>, 2024</p></font>

#### Código do UserComponent

```java
package com.api.API.models.component;

import com.api.API.models.mediator.Mediator;

public class UserComponent implements Component {
    private Mediator mediator;
    private final String nomeUsuario;
    private String feedback;

    public UserComponent(String nomeUsuario) {
        this.nomeUsuario = nomeUsuario;
    }

    @Override
    public void setMediator(Mediator mediator) {
        this.mediator = mediator;
    }

    @Override
    public void receberMensagem(String mensagem) {
        System.out.println(nomeUsuario + " recebeu mensagem: " + mensagem);
    }

    public void enviarFeedback(String feedback) {
        this.feedback = feedback;
        System.out.println(nomeUsuario + " enviando feedback: " + feedback);
        mediator.enviarMensagem(this, feedback);
    }

    @Override
    public void enviarMensagem(String mensagem) {
        mediator.enviarMensagem(this, mensagem);
    }
}

``` 
<font size="2"><p style="text-align: center"><b>Fonte:</b> <a href="https://github.com/Lucas13032003">Lucas Víctor</a>, 2024</p></font>

#### Código do ConcreteMediator

```java
package com.api.API.models.mediator;

import java.util.ArrayList;
import java.util.List;

import com.api.API.models.component.Component;

public class ConcreteMediator implements Mediator {
    private final List<Component> componentes = new ArrayList<>();

    @Override
    public void registrar(Component component) {
        componentes.add(component);
        component.setMediator(this);
    }

    @Override
    public void enviarMensagem(Component remetente, String mensagem) {
        for (Component component : componentes) {
            if (component != remetente) {
                component.receberMensagem(mensagem);
            }
        }
    }
    @Override
    public List<Component> getComponentes() {
    return componentes;
}
}
``` 
<font size="2"><p style="text-align: center"><b>Fonte:</b> <a href="https://github.com/Lucas13032003">Lucas Víctor</a>, 2024</p></font>

#### Código do Mediator

```java
package com.api.API.models.mediator;

import java.util.List;

import com.api.API.models.component.Component;

public interface Mediator {
    void registrar(Component component);
    void enviarMensagem(Component remetente, String mensagem);
    List<Component> getComponentes();
}
``` 
<font size="2"><p style="text-align: center"><b>Fonte:</b> <a href="https://github.com/Lucas13032003">Lucas Víctor</a>, 2024</p></font>

## Conclusão

## Referências Bibliográficas

> [1] Gamma, E., Helm, R., Johnson, R., & Vlissides, J. (1994). Design Patterns: Elements of Reusable Object-Oriented Software. Addison-Wesley.
>
> [2] Freeman, E., & Robson, E. (2020). Head First Design Patterns: A Brain-Friendly Guide (2nd ed.). O'Reilly Media.
>
> [3] Fowler, M. (2003). Patterns of Enterprise Application Architecture. Addison-Wesley.

## Bibliografia

1. Gamma, E., Helm, R., Johnson, R., & Vlissides, J. (1994). *Design Patterns: Elements of Reusable Object-Oriented Software*. Addison-Wesley.  
2. Freeman, E., & Robson, E. (2020). *Head First Design Patterns: A Brain-Friendly Guide* (2nd ed.). O'Reilly Media.  
3. Fowler, M. (2003). *Patterns of Enterprise Application Architecture*. Addison-Wesley.  



## Histórico de Versões

| Versão | Data | Descrição | Autor | Revisor |
| :----: | ---- | --------- | ----- | ------- |
| `1.0`  |24/12/2024| Adiciona metodologia | [Izabella Alves](https://github.com/izabellaalves)|[Caio Mesquita](https://github.com/Caiomesvie)|
| `1.1`  |27/12/2024| Adição Introdução e Modelagem | [Luana Medeiros](https://github.com/LuaMedeiros)|[Lucas Víctor](https://github.com/Lucas13032003)|
| `1.2`  |04/01/2025| Adição dos Códigos | [Lucas Víctor](https://github.com/Lucas13032003)|[Izabella Alves](https://github.com/izabellaalves)|
