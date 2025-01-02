package com.api.API.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;

import com.api.API.models.Restaurante;
import com.api.API.models.Prato;
import modelo.iterador.Iterador;

@RestController
@RequestMapping("/restaurantes")
public class RestauranteController {

    @GetMapping("/teste")
    public String teste() {
        return "teste ok!";
    }

    @GetMapping("/menu")
    public ResponseEntity<ArrayList<String>> obterMenu() {
        // Criando restaurante e menu
        Restaurante restaurante = new Restaurante("Restaurante Chef Indica", 5);

        // Adicionando pratos ao menu
        restaurante.getMenu().adicionarPrato(new Prato("Spaghetti Carbonara", 35.50));
        restaurante.getMenu().adicionarPrato(new Prato("Risoto de Cogumelos", 42.00));
        restaurante.getMenu().adicionarPrato(new Prato("File Mignon ao Molho Madeira", 65.90));
        restaurante.getMenu().adicionarPrato(new Prato("Salmao Grelhado", 58.00));
        restaurante.getMenu().adicionarPrato(new Prato("Tiramisu", 25.00));

        // Obtendo iterador do menu
        Iterador iterador = restaurante.getMenu().criarIterador();

        ArrayList<String> pratos = new ArrayList<String>();

        // Percorrendo o menu com o iterador
        System.out.println("Menu do Restaurante " + restaurante.getNome() + ":");
        while (iterador.temProximo()) {
            Prato prato = (Prato) iterador.proximo();
            pratos.add(prato.toString());
            System.out.println("- " + prato);
        }

        // Reiniciando o iterador
        iterador.reiniciar();
        System.out.println("\nIteracao reiniciada:");
        while (iterador.temProximo()) {
            Prato prato = (Prato) iterador.proximo();
            System.out.println("- " + prato);
        }

        return ResponseEntity.ok(pratos);
    }
}
