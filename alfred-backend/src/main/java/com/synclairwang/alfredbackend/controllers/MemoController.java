package com.synclairwang.alfredbackend.controllers;

import com.synclairwang.alfredbackend.models.Memo;
import com.synclairwang.alfredbackend.repositories.MemoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MemoController {

    @Autowired
    private MemoRepository memoRepository;

    @GetMapping("/memos")
    public Iterable<Memo> findAllSongs() {
        return memoRepository.findAll();
    }

    @PostMapping("/memos")
    public void createNewMemo(@RequestBody Memo memo) {
        memoRepository.save(memo);
    }
}
