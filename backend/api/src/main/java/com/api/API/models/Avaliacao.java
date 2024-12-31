package com.api.API.models;

import lombok.Data;

@Data
public abstract class Avaliacao {

    private Usuario autor;
    private Restaurante restaurante;
    private Estado estado;
    private Tag tags[];

    public abstract String publicar();
    public abstract String arquivar();
    public abstract String validar();
    public abstract String editar();
}
