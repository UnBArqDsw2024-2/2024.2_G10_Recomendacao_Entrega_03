package com.api.API.models.exceptionModels;

import lombok.Data;
import lombok.Getter;

@Data
public class ErrorResponse {
    private String message;
    private String errorCode;

    public ErrorResponse(String message, String errorCode) {
        this.message = message;
        this.errorCode = errorCode;
    }
}
