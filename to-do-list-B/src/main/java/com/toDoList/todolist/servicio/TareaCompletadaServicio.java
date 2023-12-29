package com.toDoList.todolist.servicio;

import com.toDoList.todolist.modelo.TareaCompletada;
import com.toDoList.todolist.repositorio.TareaCompletadaRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TareaCompletadaServicio implements ITareaCompletadaServicio{

    @Autowired
    private TareaCompletadaRepositorio tareaCompletadaRepositorio;

    @Override
    public List<TareaCompletada> listarTareasCompletadas() {
        return this.tareaCompletadaRepositorio.findAll();
    }

    @Override
    public TareaCompletada buscarTareaCompletadaPorId(Integer idTareaCompletada) {
        return this.tareaCompletadaRepositorio.findById(idTareaCompletada).orElse(null);
    }

    @Override
    public TareaCompletada guardarTareaCompletada(TareaCompletada tareaCompletada) {
        return this.tareaCompletadaRepositorio.save(tareaCompletada);
    }

    @Override
    public void eliminarTareaCompletadaPorId(Integer idTareaCompletada) {
        this.tareaCompletadaRepositorio.deleteById(idTareaCompletada);
    }
}
