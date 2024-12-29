package com.api.API.utils;

import jakarta.servlet.http.HttpServletRequest;

import java.net.URI;
import java.net.URISyntaxException;

public class UrlUtils {

    public static String obterURLAtual(HttpServletRequest request) {
        String url = request.getRequestURL().toString();
        return url;
    }

    public static String obterUltimoParametroDaURL(String url) {
        try {
            URI uri = new URI(url);
            String path = uri.getPath();
            if (path != null && !path.isEmpty()) {
                String[] segmentos = path.split("/");

                return segmentos[segmentos.length - 1];
            }
        } catch (URISyntaxException e) {
            System.err.println("Erro ao processar a URL: " + e.getMessage());
        }
        return null;
    }

}
