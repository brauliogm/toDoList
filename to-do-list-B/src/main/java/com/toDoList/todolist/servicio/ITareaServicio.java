package com.toDoList.todolist.servicio;

import com.toDoList.todolist.modelo.Tarea;

import java.util.List;

public interface ITareaServicio {

    public List<Tarea> listarTareas();

    public Tarea buscarTareaPorId(Integer idTarea);

    public Tarea guardarTarea(Tarea tarea);

    public void eliminarTareaPorId(Integer idTarea);

}
