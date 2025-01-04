// Pasta: controllers
// Arquivo: MediatorController.java
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

    @GetMapping("/testMediator")
    public String testMediator() {
        // Mensagem simulada
        mediator.enviarMensagem(null, "Testando comunicação via Mediator!");
        return "Mediator testado com sucesso! Confira os logs do console.";
    }
}
