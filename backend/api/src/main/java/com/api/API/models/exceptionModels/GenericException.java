package com.api.API.models.exceptionModels;

import lombok.*;

@AllArgsConstructor
@Getter
@Setter
@NoArgsConstructor
public class GenericException extends RuntimeException{
    private int statusCode;
    private String errorCode;

    public GenericException(String message, int statusCode, String errorCode) {
        super(message);
        this.statusCode = statusCode;
        this.errorCode = errorCode;
    }
}
