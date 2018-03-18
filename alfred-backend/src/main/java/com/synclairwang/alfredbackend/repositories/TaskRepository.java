package com.synclairwang.alfredbackend.repositories;

import com.synclairwang.alfredbackend.models.Task;
import org.springframework.data.repository.CrudRepository;

public interface TaskRepository extends CrudRepository<Task, Long>{

}
