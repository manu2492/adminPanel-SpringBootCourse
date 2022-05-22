package com.springCurso2.curso.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class userController {
    @GetMapping("/users")
    public String prueba() {
        return "Hola mundo";
    }
}
