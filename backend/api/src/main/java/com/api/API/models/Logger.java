package com.api.API.models;

import java.util.concurrent.locks.ReentrantLock;
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Map;
import java.util.HashMap;

public class Logger {
    private static Logger instance;
    private static final String LOG_FILE = "log.txt";
    private static final ReentrantLock lock = new ReentrantLock();

    private Logger() {}

    public static Logger getLogger() {
        lock.lock();
        try {
            if (instance == null) {
                instance = new Logger();
            }
        } finally {
            lock.unlock();
        }
        return instance;
    }

    private String obterTimestampAtual() {
        DateTimeFormatter formatador = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm:ss");
        return LocalDateTime.now(java.time.ZoneId.of("America/Sao_Paulo")).format(formatador);
    }

    private void escreverNoArquivo(String nomeArquivo, String mensagem) {
        try (BufferedWriter escritor = new BufferedWriter(new FileWriter(nomeArquivo, true))) {
            escritor.write(mensagem);
            escritor.newLine();
        } catch (IOException e) {
            System.err.println("Falha ao escrever no log: " + e.getMessage());
            e.printStackTrace();
        }
    }

    private String lerArquivo(String nomeArquivo) {
        StringBuilder conteudo = new StringBuilder();
        try (BufferedReader leitor = new BufferedReader(new FileReader(nomeArquivo))) {
            String linha;
            while ((linha = leitor.readLine()) != null) {
                conteudo.append(linha).append("\n");
            }
        } catch (IOException e) {
            System.err.println("Falha ao ler o log: " + e.getMessage());
            e.printStackTrace();
        }
        return conteudo.toString();
    }

    public void registrarAvaliacaoRestaurante(String tipo) {
        Map<String, String> tipoDescricaoMap = new HashMap<>();
        tipoDescricaoMap.put("avaliacaoImagem", "Avaliação de imagem registrada.");
        tipoDescricaoMap.put("avaliacaoTexto", "Avaliação de texto registrada.");
        tipoDescricaoMap.put("avaliacaoVideo", "Avaliação de vídeo registrada.");

        String descricao = tipoDescricaoMap.get(tipo);
        if (descricao == null) {
            throw new IllegalArgumentException("Tipo de avaliação inválido: " + tipo);
        }

        lock.lock();
        try {
            String mensagem = String.format("%s - SUCESSO - REGISTRO AVALIACAO - %s", obterTimestampAtual(), descricao);
            escreverNoArquivo(LOG_FILE, mensagem);
        } finally {
            lock.unlock();
        }
    }

    public void registrarTag(String nome) {
        lock.lock();
        try {
            String mensagem = String.format("%s - SUCESSO - REGISTRO TAG - Nova TAG registrada (%s)", obterTimestampAtual(), nome);
            escreverNoArquivo(LOG_FILE, mensagem);
        } finally {
            lock.unlock();
        }
    }

    public void registrarErros(String tipo, String erro) {
        lock.lock();
        try {
            String message = String.format("%s - ERRO - %s - %s",
                obterTimestampAtual(), tipo, erro);
            escreverNoArquivo(LOG_FILE, message);
        } finally {
            lock.unlock();
        }
    }

    public String obterLog() {
        lock.lock();
        try {
            return lerArquivo(LOG_FILE);
        } finally {
            lock.unlock();
        }
    }
}
