package com.toDoList.todolist.servicio;

import com.toDoList.todolist.modelo.TareaCompletada;

import java.util.List;

public interface ITareaCompletadaServicio {

    public List<TareaCompletada> listarTareasCompletadas();

    public TareaCompletada buscarTareaCompletadaPorId(Integer idTareaCompletada);

    public TareaCompletada guardarTareaCompletada(TareaCompletada tareaCompletada);

    public void eliminarTareaCompletadaPorId(Integer idTareaCompletada);
}
