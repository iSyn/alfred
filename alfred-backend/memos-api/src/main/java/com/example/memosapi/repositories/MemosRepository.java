package com.example.memosapi.repositories;

import com.example.memosapi.models.Memo;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface MemosRepository extends CrudRepository<Memo, Long>{
    List<Memo> findAll();
}
