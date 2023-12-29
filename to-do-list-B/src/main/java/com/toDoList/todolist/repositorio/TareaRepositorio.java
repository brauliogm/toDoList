package com.toDoList.todolist.repositorio;

import com.toDoList.todolist.modelo.Tarea;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TareaRepositorio extends JpaRepository<Tarea, Integer> {

}
