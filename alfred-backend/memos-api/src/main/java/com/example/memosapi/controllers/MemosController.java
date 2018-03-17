package com.example.memosapi.controllers;

import com.example.memosapi.models.Memo;
import com.example.memosapi.repositories.MemosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class MemosController {

    @Autowired
    private MemosRepository memosRepository;

    @GetMapping("/memos")
    public List<Memo> findAllMemos() {
        return memosRepository.findAll();
    }
}
