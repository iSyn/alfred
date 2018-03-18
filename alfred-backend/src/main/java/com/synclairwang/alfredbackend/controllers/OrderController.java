package com.synclairwang.alfredbackend.controllers;

import com.synclairwang.alfredbackend.models.Order;
import com.synclairwang.alfredbackend.repositories.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class OrderController {

    @Autowired
    private OrderRepository orderRepository;

    @GetMapping("/orders")
    public Iterable<Order> findAllOrders() {
        return orderRepository.findAll();
    }

    @PostMapping("/orders")
    public void createNewOrder(@RequestBody Order order) {
        orderRepository.save(order);
    }

}
