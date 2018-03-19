package com.synclairwang.alfredbackend.controllers;

import com.synclairwang.alfredbackend.models.Memo;
import com.synclairwang.alfredbackend.repositories.MemoRepository;
import javassist.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
public class MemoController {

    @Autowired
    private MemoRepository memoRepository;

    @GetMapping("/memos")
    public Iterable<Memo> findAllSongs() {
        return memoRepository.findAll();
    }

    @GetMapping("/memos/{memo_id}")
    public Memo findMemoById(@PathVariable Long memo_id) throws NotFoundException {
        Memo memo = memoRepository.findById(memo_id).get();
        if (memo == null) { throw new NotFoundException("Memo with the ID " + memo_id + " not found"); }
        return memo;
    }

    @PostMapping("/memos")
    public void createNewMemo(@RequestBody Memo memo) {
        memoRepository.save(memo);
    }

    @DeleteMapping("/memos/{memo_id}")
    public HttpStatus deleteMemoById(@PathVariable Long memo_id) {
        Memo memo = memoRepository.findById(memo_id).get();
        memoRepository.delete(memo);
        return HttpStatus.OK;
    }
}
