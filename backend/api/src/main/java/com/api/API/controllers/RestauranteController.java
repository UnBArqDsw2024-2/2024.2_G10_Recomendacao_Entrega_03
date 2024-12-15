package com.api.API.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RestauranteController {

    @GetMapping("/teste")
    public String teste() {
        return "teste ok!";
    }
}
