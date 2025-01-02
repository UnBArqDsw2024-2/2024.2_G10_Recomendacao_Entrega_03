package com.api.controllers;

import com.api.models.*;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/menu")
public class MenuController {
    @GetMapping("/preco-total")
    public double getPrecoTotal() {
        Sobremesas sobremesas = new Sobremesas();
        sobremesas.add(new Tiramisu());
        sobremesas.add(new Pudim());
        return sobremesas.getPreco();
    }
}
