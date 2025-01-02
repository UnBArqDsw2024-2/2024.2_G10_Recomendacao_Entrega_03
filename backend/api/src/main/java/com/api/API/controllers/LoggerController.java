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

    public void registrarAvaliacaoRestaurante(String tipo, Avaliacao avaliacao) {
        Logger.getLogger().registrarAvaliacaoRestaurante(tipo, avaliacao);
    }

    public void registrarErros(String tipo, String erro) {
        Logger.getLogger().registrarErros(tipo, erro);
    }
}
