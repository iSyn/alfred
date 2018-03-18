package com.synclairwang.alfredbackend.models;


import lombok.*;

import javax.persistence.*;
import java.sql.Timestamp;

@Data
@AllArgsConstructor @NoArgsConstructor @Getter @Setter
@Entity
@Table(name = "ORDERS")

public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column (name = "ITEM_NAME")
    private String item_name;

    @Column (name = "ITEM_PRICE")
    private String item_price;

    @Column (name = "PAYMENT_TYPE")
    private String payment_type;

    @Column (name = "TIMESTAMP")
    private Timestamp timestamp;


}