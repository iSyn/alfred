package com.synclairwang.alfredbackend.controllers;

import com.synclairwang.alfredbackend.models.Order;
import com.synclairwang.alfredbackend.repositories.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
public class OrderController {

    @Autowired
    private OrderRepository orderRepository;

    @GetMapping("/orders")
    public Iterable<Order> findAllOrders() {
        return orderRepository.findAll();
    }

    @GetMapping("/orders/{order_id}")
    public Order getOrderById(@PathVariable Long order_id) {
        return orderRepository.findById(order_id).get();
    }

    @PostMapping("/orders")
    public void createNewOrder(@RequestBody Order order) {
        orderRepository.save(order);
    }

    @DeleteMapping("/orders/{order_id}")
    public HttpStatus deleteOrderById(@PathVariable Long order_id) {
        Order order = orderRepository.findById(order_id).get();
        orderRepository.delete(order);
        return HttpStatus.OK;
    }
}
