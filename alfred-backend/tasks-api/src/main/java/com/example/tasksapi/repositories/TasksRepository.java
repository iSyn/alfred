package com.example.tasksapi.repositories;

import com.example.tasksapi.models.Task;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface TasksRepository extends CrudRepository<Task, Long>{

    List<Task> findAll();
}
