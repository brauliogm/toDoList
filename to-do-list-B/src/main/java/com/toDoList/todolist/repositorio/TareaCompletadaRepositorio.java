package com.toDoList.todolist.repositorio;

import com.toDoList.todolist.modelo.TareaCompletada;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TareaCompletadaRepositorio extends JpaRepository<TareaCompletada, Integer> {
}
