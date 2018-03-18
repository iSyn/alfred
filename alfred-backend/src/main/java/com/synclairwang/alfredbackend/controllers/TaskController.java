package com.synclairwang.alfredbackend.controllers;

import com.synclairwang.alfredbackend.models.Task;
import com.synclairwang.alfredbackend.repositories.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TaskController {

    @Autowired
    private TaskRepository taskRepository;

    @GetMapping("/tasks")
    public Iterable<Task> findAllTasks() {
        return taskRepository.findAll();
    }

    @PostMapping("/tasks")
    public void createNewTask(@RequestBody Task task) {
        taskRepository.save(task);
    }
}
