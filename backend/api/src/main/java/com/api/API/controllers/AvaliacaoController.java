package com.api.API.controllers;

import com.api.API.models.Avaliacao;
import com.api.API.models.factoryMethod.AvaliacaoFactory;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/avaliacoes")
public class AvaliacaoController {

    private final AvaliacaoFactory avaliacaoFactory;

    public AvaliacaoController(
        AvaliacaoFactory avaliacaoFactory

    ) {
        this.avaliacaoFactory = avaliacaoFactory;

    }

    @PostMapping("/criarAvaliacao")
    public ResponseEntity<String> criarAvaliacao(@RequestParam String tipo, @RequestBody Map<String, Object> parametros) {
        try {
            AvaliacaoFactory factory = avaliacaoFactory.obterFactory(tipo);
            Avaliacao avaliacao = factory.criaAvaliacao();

            return ResponseEntity.ok(avaliacao.publicar());
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}
