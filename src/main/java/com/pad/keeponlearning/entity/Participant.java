package com.pad.keeponlearning.entity;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name="participant")
@Data
public class Participant {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "first_name")
    private String first_name;

    @Column(name = "last_name")
    private String last_name;

    @Column(name = "email")
    private String email;

    @Column(name = "id_course")
    private Long id_course;
}
