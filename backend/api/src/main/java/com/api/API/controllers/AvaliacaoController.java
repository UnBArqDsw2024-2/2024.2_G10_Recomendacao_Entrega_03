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

            loggerController.registrarAvaliacaoRestaurante(tipo, avaliacao);

            return ResponseEntity.ok(avaliacao.publicar());
        } catch (IllegalArgumentException e) {
            loggerController.registrarErros("Acesso ao tipo de avaliação", "Tipo de avaliação inválido (" + tipo + ") - " + e.getMessage());
            return ResponseEntity.badRequest().body(e.getMessage());
        } catch (Exception e) {
            loggerController.registrarErros("Criação de Avaliação - Erro Desconhecido", e.getMessage());
            return ResponseEntity.status(500).body("Erro interno do servidor.");
        }
    }
}
