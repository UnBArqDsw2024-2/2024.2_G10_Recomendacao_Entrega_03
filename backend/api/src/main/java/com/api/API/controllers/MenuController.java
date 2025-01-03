package com.api.controllers;

import com.api.models.*;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/menu")
public class MenuController {
    @GetMapping("/preco-total")
    public double getPrecoTotal() {
        SobremesaComposite sobremesas = new SobremesaComposite();
        sobremesas.add(new TiramisuComposite());
        sobremesas.add(new PudimComposite());
        return sobremesas.getPreco();
    }
}
