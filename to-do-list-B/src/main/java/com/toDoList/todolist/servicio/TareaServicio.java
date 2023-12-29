package com.toDoList.todolist.servicio;

import com.toDoList.todolist.modelo.Tarea;
import com.toDoList.todolist.repositorio.TareaRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TareaServicio implements ITareaServicio{

    @Autowired
    private TareaRepositorio tareaRepositorio;

    @Override
    public List<Tarea> listarTareas() {
        return this.tareaRepositorio.findAll();
    }

    @Override
    public Tarea buscarTareaPorId(Integer idTarea) {
        return this.tareaRepositorio.findById(idTarea).orElse(null);
    }

    @Override
    public Tarea guardarTarea(Tarea tarea) {
        return this.tareaRepositorio.save(tarea);
    }

    @Override
    public void eliminarTareaPorId(Integer idTarea) {
        this.tareaRepositorio.deleteById(idTarea);
    }
}
