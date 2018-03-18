package com.synclairwang.alfredbackend.repositories;

import com.synclairwang.alfredbackend.models.Order;
import org.springframework.data.repository.CrudRepository;

public interface OrderRepository extends CrudRepository<Order, Long> {

}
