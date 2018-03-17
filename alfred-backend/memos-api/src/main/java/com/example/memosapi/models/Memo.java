package com.example.memosapi.models;

import lombok.*;

import javax.persistence.*;

@Entity
@AllArgsConstructor @NoArgsConstructor @Getter @Setter
@Table(name = "MEMOS")
public class Memo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "TITLE")
    private String title;

    @Column(name = "DESCRIPTION")
    private String description;

    public Memo(String title, String description) {
        this.title = title;
        this.description = description;
    }
}
