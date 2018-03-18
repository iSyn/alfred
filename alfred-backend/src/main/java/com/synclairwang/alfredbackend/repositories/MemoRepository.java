package com.synclairwang.alfredbackend.repositories;

import com.synclairwang.alfredbackend.models.Memo;
import org.springframework.data.repository.CrudRepository;
import org.springframework.web.bind.annotation.GetMapping;

public interface MemoRepository extends CrudRepository<Memo, Long>{
}
