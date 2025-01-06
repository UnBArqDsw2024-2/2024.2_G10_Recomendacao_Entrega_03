# Singleton

## Introdução

O Design Pattern Singleton é um padrão que garante que existe sempre uma e somente uma instância de uma classe num projeto orientado a objetos. Além disso, essa instância pode ser acessada sempre globalmente [1]. Esse padrão é especialmente útil quando se quer, por exemplo, garantir que partes diferentes do código não acessem um mesmo recurso no mesmo instante de tempo. Pode-se utilizar, também, de técnicas como o Semáforo [2] ou o Mutex Lock [3] para que projetos multi-threaded ou concorrentes tenham acesso ao recurso de maneira sincronizada.

No presente projeto, arquivos de log (contendo erros, acesso ao banco de dados, etc) devem ser escritos, para que exista um registro do funcionamento do sistema [4]. Como o sistema do back-end é um servidor e, portanto, multi-threaded, segue-se que é possível que várias threads queiram ler ou escrever em um arquivo de log ao mesmo tempo. Para evitar perdas de dados, sobrescritas e outros tipos de erros, utilizaremos um Singleton com um mutex, que garantirá que (1) cada arquivo de log somente será acessado por uma única instância de uma classe e (2) esse acesso será sincronizado.

## Metodologia

Temos como objetivo realizar a implementação do padrão de design Singleton para garantir que o sistema de logs seja acessado e manipulado de forma segura e eficiente, onde nos reunimos presencialmente após a aula de Arquitetura e Desenho de Software do dia 16/12. Nesta reunião, surgiram debates sobre a melhor forma de realizar a instância e manipulação eficiente do sistema dependente dos logs, dessa forma chegamos nos seguintes tópicos a serem tratados:

- Unicidade: Garantir que apenas uma instância da classe Logger seja criada durante todo o ciclo de vida da aplicação, evitando múltiplas instâncias que possam levar a inconsistências nos registros de log.

- Sincronização: Prevenir condições de corrida (“race conditions”) em ambientes multi-threaded, onde múltiplas threads possam tentar acessar ou modificar os logs simultaneamente.

- Organização: Estruturar os registros de eventos de forma clara e consistente, permitindo fácil rastreamento e auditoria de ações importantes no sistema, como o cadastro/exclusão de restaurantes e a avaliação de restaurantes por clientes.

- Escalabilidade: Facilitar a integração futura com outras partes do sistema, como armazenamento em banco de dados ou serviços externos de monitoramento de logs.

## Modelagem

No nosso sistema, poderíamos utilizar os arquivos de log para atender a diversos contextos. No entanto, nosso foco está na criação de logs específicos para as tags das avaliações e para as próprias avaliações realizadas pelos clientes em relação aos restaurantes.

A modelagem, na Figura 1, abstrai o conteúdo (métodos e atributos) das classes citadas (Avaliação, Cliente, Restaurante e Tag), por motivos de simplicidade na visualização do diagrama. Para verificar o conteúdo dessas classes, veja o [Diagrama de Classes](https://unbarqdsw2024-2.github.io/2024.2_G10_Recomendacao_Entrega_03/#/refatoracoes/diagrama-de-classes).

<center>
<p style="text-align: center"><b>Figura 1:</b> Diagrama UML para o Singleton utilizado no projeto.</p>
<div align="center">
  <img src="https://raw.githubusercontent.com/UnBArqDsw2024-2/2024.2_G10_Recomendacao_Entrega_03/refs/heads/main/docs/imagens/diagrama-singleton.png?raw=true" alt="Diagrama de classes do Singleton" >
</div>
<font size="3"><p style="text-align: center"><b>Fonte:</b> <a href="https://github.com/lucasqueiroz23">Lucas Queiroz</a>, 2024</p></font>
</center>

## Código

O arquivo Logger.java implementa o padrão de projeto Singleton para garantir uma única instância da classe responsável pelo gerenciamento de logs. A instância singleton controla o acesso exclusivo ao arquivo de log, permitindo que outras classes registrem eventos de maneira sequencial por meio de chamadas ao serviço centralizado de logging.

A implementação foi projetada para ser thread-safe, utilizando um ReentrantLock para gerenciar a sincronização em ambientes multithread. Isso assegura que a instância compartilhada possa ser acessada por múltiplas threads simultaneamente sem risco de condições de corrida ou inconsistências, regulando de forma eficiente o acesso ao recurso compartilhado.

```Java
// Logger
package com.api.API.models;

import java.util.concurrent.locks.ReentrantLock;
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Map;
import java.util.HashMap;

public class Logger {
    private static Logger instance;
    private static final String LOG_FILE = "log.txt";
    private static final ReentrantLock lock = new ReentrantLock();

    private Logger() {}

    public static Logger getLogger() {
        lock.lock();
        try {
            if (instance == null) {
                instance = new Logger();
            }
        } finally {
            lock.unlock();
        }
        return instance;
    }

    private String obterTimestampAtual() {
        DateTimeFormatter formatador = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm:ss");
        return LocalDateTime.now(java.time.ZoneId.of("America/Sao_Paulo")).format(formatador);
    }

    private void escreverNoArquivo(String nomeArquivo, String mensagem) {
        try (BufferedWriter escritor = new BufferedWriter(new FileWriter(nomeArquivo, true))) {
            escritor.write(mensagem);
            escritor.newLine();
        } catch (IOException e) {
            System.err.println("Falha ao escrever no log: " + e.getMessage());
            e.printStackTrace();
        }
    }

    private String lerArquivo(String nomeArquivo) {
        StringBuilder conteudo = new StringBuilder();
        try (BufferedReader leitor = new BufferedReader(new FileReader(nomeArquivo))) {
            String linha;
            while ((linha = leitor.readLine()) != null) {
                conteudo.append(linha).append("\n");
            }
        } catch (IOException e) {
            System.err.println("Falha ao ler o log: " + e.getMessage());
            e.printStackTrace();
        }
        return conteudo.toString();
    }

    public void registrarAvaliacaoRestaurante(String tipo) {
        Map<String, String> tipoDescricaoMap = new HashMap<>();
        tipoDescricaoMap.put("avaliacaoImagem", "Avaliação de imagem registrada.");
        tipoDescricaoMap.put("avaliacaoTexto", "Avaliação de texto registrada.");
        tipoDescricaoMap.put("avaliacaoVideo", "Avaliação de vídeo registrada.");

        String descricao = tipoDescricaoMap.get(tipo);
        if (descricao == null) {
            throw new IllegalArgumentException("Tipo de avaliação inválido: " + tipo);
        }

        lock.lock();
        try {
            String mensagem = String.format("%s - SUCESSO - REGISTRO AVALIACAO - %s", obterTimestampAtual(), descricao);
            escreverNoArquivo(LOG_FILE, mensagem);
        } finally {
            lock.unlock();
        }
    }

    public void registrarTag(String nome) {
        lock.lock();
        try {
            String mensagem = String.format("%s - SUCESSO - REGISTRO TAG - Nova TAG registrada (%s)", obterTimestampAtual(), nome);
            escreverNoArquivo(LOG_FILE, mensagem);
        } finally {
            lock.unlock();
        }
    }

    public void registrarErros(String tipo, String erro) {
        lock.lock();
        try {
            String message = String.format("%s - ERRO - %s - %s",
                obterTimestampAtual(), tipo, erro);
            escreverNoArquivo(LOG_FILE, message);
        } finally {
            lock.unlock();
        }
    }

    public String obterLog() {
        lock.lock();
        try {
            return lerArquivo(LOG_FILE);
        } finally {
            lock.unlock();
        }
    }
}

```

<font size="2"><p style="text-align: center"><b>Fonte:</b> <a href="https://github.com/PedroSampaioDias">Pedro Sampaio</a>, 2025</p></font>


O LoggerController é um controlador REST que facilita a interação com o serviço de logging da classe Logger. Ele expõe o endpoint GET /logger/obterLog para recuperar o log completo e encapsula métodos para registrar avaliações, erros e tags no log. O controlador serve como ponte entre os clientes e o sistema de logging, centralizando o acesso e garantindo segurança e organização.

```Java
// Logger Controller
package com.api.API.controllers;

import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import com.api.API.models.Logger;
import com.api.API.models.Avaliacao;

@RestController
@RequestMapping("/logger")
public class LoggerController {

    @GetMapping("/obterLog")
    public ResponseEntity<String> obterLog() {
        try {
            return ResponseEntity.ok(Logger.getLogger().obterLog());
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Erro ao obter o log: " + e.getMessage());
        }
    }

    public void registrarAvaliacaoRestaurante(String tipo) {
        Logger.getLogger().registrarAvaliacaoRestaurante(tipo);
    }

    public void registrarErros(String tipo, String erro) {
        Logger.getLogger().registrarErros(tipo, erro);
    }

    public void registrarTag(String nome) {
        Logger.getLogger().registrarTag(nome);
    }
}

```

<font size="2"><p style="text-align: center"><b>Fonte:</b> <a href="https://github.com/PedroSampaioDias">Pedro Sampaio</a>, 2025</p></font>

O TagController foi modificado para gerar logs sempre que uma nova tag é criada, registrando o evento no sistema de logging.

```Java
// TagController
package com.api.API.controllers;

import com.api.API.models.Tag;
import com.api.API.services.TagService;
import org.springframework.http.ResponseEntity;
import com.api.API.controllers.LoggerController;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/tags")
public class TagController {

    private final TagService tagService;
    private final LoggerController loggerController;

    public TagController(TagService tagService, LoggerController loggerController) {
        this.tagService = tagService;
        this.loggerController = loggerController;
    }

    @GetMapping("/getAllTags")
    public ResponseEntity<List<Tag>> getAllTags() {
        return ResponseEntity.ok(tagService.getAllTags());
    }

    @PostMapping("/createTag")
    public ResponseEntity<Tag> createTag(@RequestParam String nome) {
        Tag newTag = tagService.createTag(nome);

        loggerController.registrarTag(nome);
        
        return ResponseEntity.ok(newTag);
    }
}
```

<font size="2"><p style="text-align: center"><b>Fonte:</b> <a href="https://github.com/PedroSampaioDias">Pedro Sampaio</a>, 2025</p></font>


O AvaliacaoController foi modificado para gerar logs sempre que uma avaliação é criada ou ocorre um erro relacionado ao processo de criação, registrando esses eventos no sistema de logging.

```Java
// Avaliacao Controller
package com.api.API.controllers;

import com.api.API.models.Avaliacao;
import com.api.API.models.factoryMethod.AvaliacaoFactory;
import lombok.Data;
import com.api.API.controllers.LoggerController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/avaliacoes")
public class AvaliacaoController {

    private final AvaliacaoFactory avaliacaoFactory;
    private final LoggerController loggerController;

    @Autowired
    public AvaliacaoController(AvaliacaoFactory avaliacaoFactory, LoggerController loggerController) {
        this.avaliacaoFactory = avaliacaoFactory;
        this.loggerController = loggerController;
    }

    @PostMapping("/criarAvaliacao")
    public ResponseEntity<String> criarAvaliacao(@RequestParam String tipo, @RequestBody Map<String, Object> parametros) {
        try {
            AvaliacaoFactory factory = avaliacaoFactory.obterFactory(tipo);
            Avaliacao avaliacao = factory.criaAvaliacao();

            loggerController.registrarAvaliacaoRestaurante(tipo);

            return ResponseEntity.ok(avaliacao.publicar());
        } catch (IllegalArgumentException e) {
            loggerController.registrarErros("ACESSO AO TIPO DE AVALIACAO", e.getMessage());
            
            return ResponseEntity.badRequest().body(e.getMessage());
        } catch (Exception e) {
            loggerController.registrarErros("CRIACAO DE AVALIACAO", e.getMessage());
            
            return ResponseEntity.status(500).body("Erro interno do servidor.");
        }
    }
}
```

<font size="2"><p style="text-align: center"><b>Fonte:</b> <a href="https://github.com/PedroSampaioDias">Pedro Sampaio</a>, 2025</p></font>


## Imagens

<p style="text-align: center"><b>Figura 2:</b> Estado inicial do log.</p>
<div align="center">
  <img src="https://raw.githubusercontent.com/UnBArqDsw2024-2/2024.2_G10_Recomendacao_Entrega_03/refs/heads/main/docs/imagens/singleton_primeiro_log.png?raw=true" alt="Estado inicial do log" >
</div>
<font size="3"><p style="text-align: center"><b>Fonte:</b> <a href="https://github.com/PedroSampaioDias">Pedro Sampaio</a>, 2025</p></font>

<p style="text-align: center"><b>Figura 3:</b> Adição de uma avaliação de texto.</p>
<div align="center">
  <img src="https://raw.githubusercontent.com/UnBArqDsw2024-2/2024.2_G10_Recomendacao_Entrega_03/refs/heads/main/docs/imagens/singleton_primeira_avaliacao.png?raw=true" alt="Adição de uma avaliação de texto" >
</div>
<font size="3"><p style="text-align: center"><b>Fonte:</b> <a href="https://github.com/PedroSampaioDias">Pedro Sampaio</a>, 2025</p></font>

<p style="text-align: center"><b>Figura 4:</b> Adição de uma avaliação de vídeo.</p>
<div align="center">
  <img src="https://raw.githubusercontent.com/UnBArqDsw2024-2/2024.2_G10_Recomendacao_Entrega_03/refs/heads/main/docs/imagens/singleton_segunda_avaliacao.png?raw=true" alt="Adição de uma avaliação de vídeo" >
</div>
<font size="3"><p style="text-align: center"><b>Fonte:</b> <a href="https://github.com/PedroSampaioDias">Pedro Sampaio</a>, 2025</p></font>

<p style="text-align: center"><b>Figura 5:</b> Adição de uma avaliação inválida.</p>
<div align="center">
  <img src="https://raw.githubusercontent.com/UnBArqDsw2024-2/2024.2_G10_Recomendacao_Entrega_03/refs/heads/main/docs/imagens/singleton_terceira_avaliacao.png?raw=true" alt="Adição de uma avaliação inválida" >
</div>
<font size="3"><p style="text-align: center"><b>Fonte:</b> <a href="https://github.com/PedroSampaioDias">Pedro Sampaio</a>, 2025</p></font>

<p style="text-align: center"><b>Figura 6:</b> Adição de uma TAG.</p>
<div align="center">
  <img src="https://raw.githubusercontent.com/UnBArqDsw2024-2/2024.2_G10_Recomendacao_Entrega_03/refs/heads/main/docs/imagens/singleton_criacao_tag.png?raw=true" alt="Adição de uma TAG" >
</div>
<font size="3"><p style="text-align: center"><b>Fonte:</b> <a href="https://github.com/PedroSampaioDias">Pedro Sampaio</a>, 2025</p></font>

<p style="text-align: center"><b>Figura 7:</b> Estado final do log.</p>
<div align="center">
  <img src="https://raw.githubusercontent.com/UnBArqDsw2024-2/2024.2_G10_Recomendacao_Entrega_03/refs/heads/main/docs/imagens/singleton_log.png?raw=true" alt="Estado final do log" >
</div>
<font size="3"><p style="text-align: center"><b>Fonte:</b> <a href="https://github.com/PedroSampaioDias">Pedro Sampaio</a>, 2025</p></font>


## Conclusão
Este trabalho demonstrou a implementação do padrão de design Singleton para o sistema de logs do projeto, abordando a necessidade de um acesso sincronizado e seguro a um arquivo de log em um ambiente multi-threaded. A razão para a adoção do Singleton é garantir que haja somente uma instância da classe Logger, o que previne inconsistências e erros que poderiam ocorrer devido ao acesso concorrente ao arquivo de log por múltiplas threads.

Em resumo, a implementação do padrão Singleton com sincronização thread-safe resolveu o problema de concorrência no acesso ao arquivo de log, garantindo a confiabilidade e a organização dos registros. A solução implementada demonstra a eficácia do padrão Singleton em cenários onde é necessário controlar o acesso a um recurso compartilhado, especialmente em ambientes concorrentes.

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
| `1.1` | 30/12/2024 | Adição da metodologia | [Mateus Fidelis](https://github.com/MatsFidelis) | [Lucas Queiroz](https://github.com/lucasqueiroz23) |
| `1.2` | 02/01/2025 | Adição dos códigos | [Pedro Sampaio](https://github.com/PedroSampaioDias) |  [Guilherme Brito](https://github.com/GuilhermeB12) |
| `1.3` | 03/01/2025 | Adição da conclusão | [Guilherme Brito](https://github.com/GuilhermeB12) | |
