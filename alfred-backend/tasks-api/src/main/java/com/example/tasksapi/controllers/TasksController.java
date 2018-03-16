package com.example.tasksapi.controllers;

import com.example.tasksapi.models.Task;
import com.example.tasksapi.repositories.TasksRepository;
import javassist.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class TasksController {

    @Autowired
    private TasksRepository tasksRepository;

    @GetMapping("/tasks")
    public List<Task> findAllTasks() {
        return tasksRepository.findAll();
    }
}
