package com.api.API.controllers;

import com.api.API.models.Tag;
import com.api.API.services.TagService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/tags")
public class TagController {

    private final TagService tagService;

    public TagController(TagService tagService) {
        this.tagService = tagService;
    }

    @GetMapping("/getAllTags")
    public ResponseEntity<List<Tag>> getAllTags() {
        return ResponseEntity.ok(tagService.getAllTags());
    }

    @PostMapping("/createTag")
    public ResponseEntity<Tag> createTag(@RequestParam String nome) {
        Tag newTag = tagService.createTag(nome);
        return ResponseEntity.ok(newTag);
    }
}
