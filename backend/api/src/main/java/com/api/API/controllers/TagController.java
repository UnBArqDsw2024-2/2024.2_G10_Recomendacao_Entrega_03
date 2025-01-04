package com.api.API.controllers;

import com.api.API.models.Tag;
import com.api.API.services.TagService;
import org.springframework.http.ResponseEntity;
import com.api.API.controllers.LoggerController;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/tags")
public class TagController {

    private final TagService tagService;
    private final LoggerController loggerController;

    public TagController(TagService tagService, LoggerController loggerController) {
        this.tagService = tagService;
        this.loggerController = loggerController;
    }

    @GetMapping("/getAllTags")
    public ResponseEntity<List<Tag>> getAllTags() {
        return ResponseEntity.ok(tagService.getAllTags());
    }

    @PostMapping("/createTag")
    public ResponseEntity<Tag> createTag(@RequestParam String nome) {
        Tag newTag = tagService.createTag(nome);

        loggerController.registrarTag(nome);
        
        return ResponseEntity.ok(newTag);
    }
}
