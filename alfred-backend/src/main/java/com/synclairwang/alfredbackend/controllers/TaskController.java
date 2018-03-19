package com.synclairwang.alfredbackend.controllers;

import com.synclairwang.alfredbackend.models.Task;
import com.synclairwang.alfredbackend.repositories.TaskRepository;
import javassist.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
public class TaskController {

    @Autowired
    private TaskRepository taskRepository;

    @GetMapping("/tasks")
    public Iterable<Task> findAllTasks() {
        return taskRepository.findAll();
    }

    @GetMapping("/tasks/{task_id}")
    public Task findTaskById(@PathVariable Long task_id) throws NotFoundException {
        Task task = taskRepository.findById(task_id).get();
        if (task == null) { throw new NotFoundException("Task with ID of " + task_id + " was not found!"); }
        return task;
    }

    @PostMapping("/tasks")
    public void createNewTask(@RequestBody Task task) {
        taskRepository.save(task);
    }

    @DeleteMapping("/tasks/{task_id}")
    public HttpStatus deleteTaskById(@PathVariable Long task_id) {
        Task task = taskRepository.findById(task_id).get();
        taskRepository.delete(task);
        return HttpStatus.OK;
    }
}

