package com.api.API.services;

import com.api.API.models.Tag;
import com.api.API.repositories.TagRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TagService {

    private final TagRepository tagRepository;

    public TagService(TagRepository tagRepository) {
        this.tagRepository = tagRepository;
    }

    public List<Tag> getAllTags() {
        return tagRepository.findAll();
    }

    public Tag createTag(String nomeTag) {
        Tag tag = new Tag(nomeTag);
        return tagRepository.save(tag);
    }
}