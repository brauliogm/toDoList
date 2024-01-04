package com.toDoList.todolist.modelo;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString

public class TareaCompletada {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer idTareaCompletada;

    @JoinColumn(name = "descripcion")
    String descripcion;

    @Column(columnDefinition = "tinyint(1)")
    private boolean isChecked = true;
}
